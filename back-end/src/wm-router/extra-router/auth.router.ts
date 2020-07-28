import { Application } from "express";
import { environment } from "src/environment/environment";
import { AuthController } from "src/wm";
import { AuthService } from "src/wm-service";
import { Sequelize } from "sequelize-typescript";

export const useAuthRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new AuthController(sequelize);
    app.route(environment.apiLink.extra.auth.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useCheckToken(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.extra.auth.token)
        .post((req, res, next) => {
            CONTROLLER.useLogin(req, res, next);
        });
    app.route(environment.apiLink.extra.auth.password)
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdatePassword(req, res, next);
        });
    app.route(environment.apiLink.extra.auth.avatar)
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdateAvatar(req, res, next);
        });
};
