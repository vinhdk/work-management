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
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = require("src/environment/environment");
const wm_model_1 = require("src/wm-model");
const wm_service_1 = require("src/wm-service");
class AuthService {
    constructor(sequelize) {
        this.useGenerateToken = (username, role) => {
            return jsonwebtoken_1.sign({ role }, environment_1.environment.jwt.code, { expiresIn: "24h", audience: username, issuer: environment_1.environment.jwt.issue, subject: environment_1.environment.jwt.subject });
        };
        this.useAuthorzie = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ error: "Có vẻ bạn chưa đăng nhập. Vui lòng đăng nhập" });
            }
            else {
                try {
                    const userService = new wm_service_1.BaseService(wm_model_1.User, this.sequelize);
                    const decoded = jsonwebtoken_1.verify(token + "", environment_1.environment.jwt.code, { issuer: environment_1.environment.jwt.issue, subject: environment_1.environment.jwt.subject });
                    const username = Object.assign(decoded.valueOf()).aud;
                    const role = Object.assign(decoded.valueOf()).role;
                    yield userService.useGetOne({ UserName: username }, [this.sequelize.getRepository(wm_model_1.Work), this.sequelize.getRepository(wm_model_1.Device), this.sequelize.getRepository(wm_model_1.Notification)])
                        .then((user) => __awaiter(this, void 0, void 0, function* () {
                        if (user) {
                            const path = "/" + req.path.split("/")[1] + "/" + req.path.split("/")[2];
                            const accessRole = environment_1.environment.accessRole.find((e) => e.path === path);
                            const roles = accessRole
                                ? accessRole.methods.findIndex((e) => e.method === req.method.toLowerCase()) > -1
                                    ? accessRole.methods[accessRole.methods.findIndex((e) => e.method === req.method.toLowerCase())].roles
                                    : []
                                : [];
                            if (roles.indexOf(role) > -1) {
                                req.headers.extra = JSON.stringify(Object.assign({}, user.get()));
                                next();
                            }
                            else {
                                return res.status(401).json("Bạn không có quyền truy cập");
                            }
                        }
                        else {
                            return res.status(404).json({ error: "Tài khoản không tồn tại" });
                        }
                    }))
                        .catch((err) => {
                        return res.status(400).json({ error: "Có lỗi xảy ra" });
                    });
                }
                catch (ex) {
                    return res.status(400).json({ error: "Token Sai" });
                }
            }
        });
        this.sequelize = sequelize;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map