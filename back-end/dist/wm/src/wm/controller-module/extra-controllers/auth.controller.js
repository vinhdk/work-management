"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const wm_service_1 = require("src/wm-service");
const wm_model_1 = require("src/wm-model");
const view_models_module_1 = require("../../view-models-module");
class AuthController {
    constructor(sequelize) {
        this.useCheckToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let count = 0;
            const user = JSON.parse(req.headers.extra);
            for (let index = 0; index < user.Works.length; index++) {
                const element = user.Works[index];
                const nowTimes = new Date().toLocaleDateString().split("/");
                const workTimes = new Date(element.EndTime).toLocaleDateString().split("/");
                if (workTimes[2] === nowTimes[2]) {
                    if (workTimes[0] === nowTimes[0]) {
                        if (parseInt(workTimes[1], 0) - parseInt(nowTimes[1], 0) === 1) {
                            if (element.Status === "1") {
                                count = count + 1;
                            }
                        }
                    }
                }
            }
            if (count > 0) {
                const noti = new view_models_module_1.NotificationCM({ Data: "Có " + count + " công việc sắp hết hạn", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    const payload = {
                        notification: {
                            body: "Nhấn vào để xem",
                            title: "Bạn vừa có 1 cập nhập mới",
                        },
                        data: {
                            UserId: user.Id,
                            Data: "Có " + count + " công việc sắp hết hạn",
                            Id: user.Id,
                        },
                    };
                    if (user.Devices.length > 0) {
                        const ids = user.Devices.map((e) => e.Id);
                        yield this.firebaseService.useSendToDevice(ids.length > 1 ? ids : ids[0], payload);
                    }
                })).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }
            if (user.Avatar) {
                yield this.firebaseService.useGetFile(user.Avatar)
                    .then((uri) => __awaiter(this, void 0, void 0, function* () {
                    user.Avatar = uri[0];
                    return res.status(200).json(new view_models_module_1.ProfileVM(Object.assign({}, user)).getData());
                })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }
            else {
                return res.status(200).json(new view_models_module_1.ProfileVM(Object.assign({}, user)).getData());
            }
        });
        this.useLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const account = new view_models_module_1.LoginGM(Object.assign({}, req.body));
            this.userService.useGetOne({ UserName: account.UserName }, [])
                .then((user) => __awaiter(this, void 0, void 0, function* () {
                if (user) {
                    if (bcrypt_1.compareSync(account.PassWord, user.PassWordHash)) {
                        yield this.deviceService.useGetOne({ Id: account.FirebaseToken }, [])
                            .then((model) => __awaiter(this, void 0, void 0, function* () {
                            if (model === null) {
                                yield this.deviceService.useCreate(new view_models_module_1.DeviceCM({ Id: account.FirebaseToken, UserId: user.Id, getData: () => undefined }).getData(account.UserName, account.UserName));
                            }
                            else {
                                if (model.UserId !== user.Id) {
                                    yield this.deviceService.useRemove(account.FirebaseToken).then(() => __awaiter(this, void 0, void 0, function* () {
                                        yield this.deviceService.useCreate(new view_models_module_1.DeviceCM({ Id: account.FirebaseToken, UserId: user.Id, getData: () => undefined }).getData(account.UserName, account.UserName));
                                    }));
                                }
                            }
                        }));
                        yield this.roleService.useGetOne({ Id: user.RoleId }, [])
                            .then((model) => {
                            return res.status(200).json({
                                AccessToken: this.authService.useGenerateToken(user.UserName, model.Name),
                                ExpiresIn: "24h",
                                Role: model.Name,
                            });
                        });
                    }
                    else {
                        return res.status(400).json({ message: "Sai mật khẩu" });
                    }
                }
                else {
                    return res.status(404).json({ message: "Tài khoản không tồn tại" });
                }
            }))
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = JSON.parse(req.headers.extra);
            const data = new view_models_module_1.ProfileUM(req.body).getData(user.UserName);
            yield this.userService.useUpdate(data, data.Id)
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật thông tin", UserId: data.Id, getData: () => undefined, IsSeen: false }).getData(data.UserName, data.UserName);
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    const payload = {
                        notification: {
                            body: "Nhấn vào để xem",
                            title: "Bạn vừa có 1 cập nhập mới",
                            sound: "default",
                        },
                        data: {
                            UserId: user.Id,
                            Data: "",
                            Id: r.Id,
                        },
                    };
                    if (user.Devices.length > 0) {
                        const ids = user.Devices.map((e) => e.Id);
                        yield this.firebaseService.useSendToDevice(ids.length > 1 ? ids : ids[0], payload)
                            .catch((err) => {
                            return res.status(400).json({ message: "Có lỗi xảy ra" });
                        });
                    }
                    else {
                        return res.status(200).json({ message: "Cập nhật thành công" });
                    }
                    return res.status(200).json({ message: "Cập nhật thành công" });
                })).catch((err) => {
                    return res.status(400).json({ message: "Có lỗi xảy ra" });
                });
            }))
                .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.userService = new wm_service_1.BaseService(wm_model_1.User, sequelize);
        this.roleService = new wm_service_1.BaseService(wm_model_1.Role, sequelize);
        this.deviceService = new wm_service_1.BaseService(wm_model_1.Device, sequelize);
        this.notificationService = new wm_service_1.BaseService(wm_model_1.Notification, sequelize);
        this.deviceRepository = sequelize.getRepository(wm_model_1.Device);
        this.authService = new wm_service_1.AuthService(sequelize);
        this.firebaseService = new wm_service_1.FirebaseService();
    }
    useUpdatePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = JSON.parse(req.headers.extra);
            if (bcrypt_1.compareSync(req.body.OldPassWord, user.PassWordHash ? user.PassWordHash : "")) {
                user.PassWordHash = bcrypt_1.hashSync(req.body.NewPassWord, 10);
                yield this.userService.useUpdate(user, user.Id).then((r) => __awaiter(this, void 0, void 0, function* () {
                    const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật thông tin", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
                    yield this.notificationService.useCreate(noti)
                        .then((r) => __awaiter(this, void 0, void 0, function* () {
                        const payload = {
                            notification: {
                                body: "Nhấn vào để xem",
                                title: "Bạn vừa có 1 cập nhập mới",
                            },
                            data: {
                                UserId: user.Id,
                                Data: "",
                                Id: r.Id,
                            },
                        };
                        if (user.Devices.length > 0) {
                            yield this.firebaseService.useSendToDevice(user.Devices.map((e) => e.Id), payload)
                                .then(() => {
                                return res.status(200).json({ message: "Cập nhật thành công" });
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        }
                        else {
                            return res.status(200).json({ message: "Cập nhật thành công" });
                        }
                    })).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                })).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }
            else {
                res.status(400).json({ message: "Mật khẩu cũ sai" });
            }
        });
    }
    useUpdateAvatar(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = JSON.parse(req.headers.extra);
            if (user.Avatar) {
                yield this.firebaseService.useDeleteFile(user.Avatar);
            }
            yield this.userService.useUpdate(Object.assign(Object.assign({}, user), { Avatar: "users/" + user.UserName + "/avatars/" + req.body.name }), user.Id).then((r) => __awaiter(this, void 0, void 0, function* () {
                yield this.firebaseService.useUploadFileBase64("users/" + user.UserName + "/avatars/" + req.body.name, req.body.data, req.body.type);
                const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật thông tin", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    const payload = {
                        notification: {
                            body: "Nhấn vào để xem",
                            title: "Bạn vừa có 1 cập nhập mới",
                        },
                        data: {
                            UserId: user.Id,
                            Data: "",
                            Id: r.Id,
                        },
                    };
                    if (user.Devices.length > 0) {
                        yield this.firebaseService.useSendToDevice(user.Devices.map((e) => e.Id), payload)
                            .then(() => __awaiter(this, void 0, void 0, function* () {
                            yield this.firebaseService.useGetFile("users/" + user.UserName + "/avatars/" + req.body.name)
                                .then((uri) => __awaiter(this, void 0, void 0, function* () {
                                return res.status(200).json({ Avatar: uri[0] });
                            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    }
                    else {
                        return res.status(200).json({ message: "Cập nhật thành công" });
                    }
                })).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            })).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map