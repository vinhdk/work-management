"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("src/environment/environment");
const wm_service_1 = require("src/wm-service");
const wm_1 = require("src/wm");
exports.useUserRouter = (app, sequelize) => {
    const AUTH = new wm_service_1.AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new wm_1.UserController(sequelize);
    app.route(environment_1.environment.apiLink.basic.user.main)
        .get((req, res, next) => {
        CONTROLLER.useGetAll(req, res, next);
    })
        .post(AUTH, (req, res, next) => {
        CONTROLLER.useCreate(req, res, next);
    })
        .put(AUTH, (req, res, next) => {
        CONTROLLER.useUpdate(req, res, next);
    });
    app.route(environment_1.environment.apiLink.basic.user.getById)
        .get(AUTH, (req, res, next) => {
        CONTROLLER.useGetById(req, res, next);
    })
        .delete(AUTH, (req, res, next) => {
        CONTROLLER.useRemove(req, res, next);
    });
};
//# sourceMappingURL=user.router.js.map