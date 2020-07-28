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
const wm_service_1 = require("src/wm-service");
const view_models_module_1 = require("../../view-models-module");
const wm_model_1 = require("src/wm-model");
class WorkController {
    constructor(sequelize) {
        this.useCreate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.WorkCM(req.body).getData(username, username);
            yield this.service.useCreate(data)
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật công việc", UserId: data.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    yield this.userService.useGetOne({ Id: data.SolveBy }, [this.deviceRepository]).then((userModel) => __awaiter(this, void 0, void 0, function* () {
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
                        if (user.Devices.length > 0) {
                            yield this.firebaseService.useSendToDevice(user.Devices.map((e) => e.Id), payload)
                                .then(() => {
                                return res.status(200).json(model);
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        }
                        else {
                            return res.status(200).json(model);
                        }
                    })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }))
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.WorkUM(Object.assign(Object.assign({}, req.body), { FileUrl: req.body.FileUrl ? "groups/" + req.body.SolveBy + "/works/" + req.body.FileUrl.name : undefined })).getData(username);
            yield this.service.useGetOne({ Id: data.Id }, []).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (res.get().FileUrl) {
                    yield this.firebaseService.useDeleteFile(res.get().FileUrl);
                }
            }));
            yield this.service.useUpdate(data, data.Id)
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật công việc", UserId: data.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                if (data.FileUrl) {
                    yield this.firebaseService.useUploadFileBase64(data.FileUrl, req.body.FileUrl.data, req.body.FileUrl.type);
                }
                yield this.notificationService.useCreate(noti)
                    .then((r) => __awaiter(this, void 0, void 0, function* () {
                    yield this.userService.useGetOne({ Id: data.SolveBy }, [this.deviceRepository]).then((userModel) => __awaiter(this, void 0, void 0, function* () {
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
                        if (user.Devices.length > 0) {
                            yield this.firebaseService.useSendToDevice(user.Devices.map((e) => e.Id), payload)
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
            const username = JSON.parse(req.headers.extra).UserName;
            yield this.service.useGetOne({ Id: req.params.id }, []).then((model) => __awaiter(this, void 0, void 0, function* () {
                if (model != null) {
                    yield this.service.useRemove(req.params.id)
                        .then(() => __awaiter(this, void 0, void 0, function* () {
                        const work = model.get();
                        const noti = new view_models_module_1.NotificationCM({ Data: "Cập nhật công việc", UserId: work.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                        yield this.notificationService.useCreate(noti)
                            .then((r) => __awaiter(this, void 0, void 0, function* () {
                            yield this.userService.useGetOne({ Id: work.SolveBy }, [this.deviceRepository]).then((userModel) => __awaiter(this, void 0, void 0, function* () {
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
                                        return res.status(200).json({ message: "Xóa thành công" });
                                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                                }
                                else {
                                    return res.status(200).json({ message: "Xóa thành công" });
                                }
                            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                }
                else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetAll({}, []).then((list) => __awaiter(this, void 0, void 0, function* () {
                const arr = [];
                for (let index = 0; index < list.length; index++) {
                    const model = list[index];
                    const data = model.get();
                    if (data.FileUrl) {
                        yield this.firebaseService.useGetFile(data.FileUrl)
                            .then((uri) => __awaiter(this, void 0, void 0, function* () {
                            data.FileUrl = uri[0];
                        })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    }
                    arr.push(new view_models_module_1.WorkVM(Object.assign({}, data)).getData());
                }
                return res.status(200).json(arr);
            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetOne({ Id: req.params.id }, [])
                .then((model) => {
                return model != null ? res.status(200).json(new view_models_module_1.WorkVM(Object.assign({}, model.get())).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.service = new wm_service_1.BaseService(wm_model_1.Work, sequelize);
        this.notificationService = new wm_service_1.BaseService(wm_model_1.Notification, sequelize);
        this.userService = new wm_service_1.BaseService(wm_model_1.User, sequelize);
        this.firebaseService = new wm_service_1.FirebaseService();
        this.deviceRepository = sequelize.getRepository(wm_model_1.Device);
    }
}
exports.WorkController = WorkController;
//# sourceMappingURL=work.controller.js.map