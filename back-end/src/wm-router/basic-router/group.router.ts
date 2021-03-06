import { Application } from "express";
import { environment } from "src/environment/environment";
import { AuthService } from "src/wm-service";
import { GroupController } from "src/wm";
import { Sequelize } from "sequelize-typescript";

export const useGroupRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new GroupController(sequelize);
    app.route(environment.apiLink.basic.group.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetAll(req, res, next);
        })
        .post(AUTH, (req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.group.getById)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetById(req, res, next);
        })
        .delete(AUTH, (req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
