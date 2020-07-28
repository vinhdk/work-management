"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("src/environment/environment");
const wm_1 = require("src/wm");
const wm_service_1 = require("src/wm-service");
exports.useAuthRouter = (app, sequelize) => {
    const AUTH = new wm_service_1.AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new wm_1.AuthController(sequelize);
    app.route(environment_1.environment.apiLink.extra.auth.main)
        .get(AUTH, (req, res, next) => {
        CONTROLLER.useCheckToken(req, res, next);
    })
        .put(AUTH, (req, res, next) => {
        CONTROLLER.useUpdate(req, res, next);
    });
    app.route(environment_1.environment.apiLink.extra.auth.token)
        .post((req, res, next) => {
        CONTROLLER.useLogin(req, res, next);
    });
    app.route(environment_1.environment.apiLink.extra.auth.password)
        .put(AUTH, (req, res, next) => {
        CONTROLLER.useUpdatePassword(req, res, next);
    });
    app.route(environment_1.environment.apiLink.extra.auth.avatar)
        .put(AUTH, (req, res, next) => {
        CONTROLLER.useUpdateAvatar(req, res, next);
    });
};
//# sourceMappingURL=auth.router.js.map