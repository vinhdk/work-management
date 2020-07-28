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
class NotificationController {
    constructor(sequelize) {
        this.useCreate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.NotificationCM(req.body).getData(username, username);
            yield this.service.useCreate(data)
                .then((model) => {
                return res.status(201).json(model);
            })
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = JSON.parse(req.headers.extra).UserName;
            const data = new view_models_module_1.NotificationUM(Object.assign({}, req.body)).getData(username);
            yield this.service.useUpdate(data, data.Id)
                .then((model) => {
                return res.status(200).json(model);
            })
                .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useRemove = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetOne({ Id: req.params.id }, []).then((model) => __awaiter(this, void 0, void 0, function* () {
                if (model != null) {
                    yield this.service.useRemove(req.params.id)
                        .then(() => {
                        return res.status(200).json({ message: "Xóa thành công" });
                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                }
                else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            })).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetAll({}, []).then((list) => {
                const arr = list.map((model) => new view_models_module_1.NotificationVM(Object.assign({}, model.get())).getData());
                return res.status(200).json(arr);
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.useGetById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.useGetOne({ Id: req.params.id }, [])
                .then((model) => {
                return model != null ? res.status(200).json(new view_models_module_1.NotificationVM(Object.assign({}, model.get())).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        });
        this.service = new wm_service_1.BaseService(wm_model_1.Notification, sequelize);
    }
}
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map