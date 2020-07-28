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
const wm_model_1 = require("src/wm-model");
const wm_service_1 = require("src/wm-service");
const view_models_module_1 = require("../../view-models-module");
class UserController {
    constructor(sequelize) {
        this.useCreate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.UserCM(req.body).getData(username, username);
            data.PassWordHash = bcrypt_1.hashSync(data.PassWord, 10);
            delete data.PassWord;
            yield this.service.useCreate(data)
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                return res.status(201).json(model);
            }))
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.UserUM(req.body).getData(username);
            yield this.service.useUpdate(data, data.Id)
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật thông tin", UserId: data.Id, getData: () => undefined, IsSeen: false }).getData(data.UserName, data.UserName);
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    yield this.service.useGetOne({ Id: data.Id }, [this.deviceRepository]).then((userModel) => __awaiter(this, void 0, void 0, function* () {
                        const user = userModel.get();
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
                        const options = {
                            priority: "high",
                            timeToLive: 60 * 60 * 24,
                        };
                        if (user.Devices.length > 0) {
                            yield this.firebaseService.useSendToDevice(user.Devices.map((e) => e.Id), payload, options)
                                .then(() => {
                                return res.status(200).json({ message: "Cập nhật thành công" });
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        }
                        else {
                            return res.status(200).json({ message: "Cập nhật thành công" });
                        }
                    })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }))
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useRemove = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetOne({ Id: req.params.id }, [this.workRepository]).then((model) => __awaiter(this, void 0, void 0, function* () {
                if (model != null) {
                    model.Works.forEach((work) => __awaiter(this, void 0, void 0, function* () {
                        const username = JSON.parse(req.headers.extra).UserName;
                        const data = new view_models_module_1.WorkUM(Object.assign({}, work.get())).getData(username);
                        data.UserId = "";
                        yield this.workService.useUpdate(data, data.Id);
                    }));
                    yield this.service.useRemove(req.params.id)
                        .then(() => __awaiter(this, void 0, void 0, function* () {
                        return res.status(200).json({ message: "Xóa thành công" });
                    })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                }
                else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetAll(Object.assign({}, req.query), [this.workRepository]).then((list) => __awaiter(this, void 0, void 0, function* () {
                yield this.roleService.useGetAll({}, []).then((roles) => __awaiter(this, void 0, void 0, function* () {
                    const arr = list.map((model) => new view_models_module_1.UserVM(Object.assign({}, model.get())).getData())
                        .filter((model) => {
                        const role = roles.find((role) => role.get().Id === model.RoleId);
                        return role ? role.Name !== "Admin" : false;
                    });
                    for (let index = 0; index < arr.length; index++) {
                        const element = arr[index];
                        if (element.Avatar) {
                            yield this.firebaseService.useGetFile(element.Avatar).then((res) => {
                                arr[index].Avatar = res[0];
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        }
                    }
                    return res.status(200).json(arr);
                })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetOne({ Id: req.params.id }, [this.workRepository, this.deviceRepository])
                .then((model) => {
                return model != null ? res.status(200).json(new view_models_module_1.UserVM(Object.assign({}, model.get())).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.service = new wm_service_1.BaseService(wm_model_1.User, sequelize);
        this.workService = new wm_service_1.BaseService(wm_model_1.Work, sequelize);
        this.roleService = new wm_service_1.BaseService(wm_model_1.Role, sequelize);
        this.notificationService = new wm_service_1.BaseService(wm_model_1.Notification, sequelize);
        this.workRepository = sequelize.getRepository(wm_model_1.Work);
        this.deviceRepository = sequelize.getRepository(wm_model_1.Device);
        this.firebaseService = new wm_service_1.FirebaseService();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map