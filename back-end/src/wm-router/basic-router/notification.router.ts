import { Application } from "express";
import { environment } from "src/environment/environment";
import { AuthService } from "src/wm-service";
import { NotificationController } from "src/wm";
import { Sequelize } from "sequelize-typescript";

export const useNotificationRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new NotificationController(sequelize);
    app.route(environment.apiLink.basic.notification.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetAll(req, res, next);
        })
        .post(AUTH, (req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.notification.getById)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetById(req, res, next);
        })
        .delete(AUTH, (req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
