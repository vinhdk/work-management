import { NextFunction, Request, Response } from "express";
import { IBaseService, BaseService } from "src/wm-service";
import { NotificationCM, NotificationUM, NotificationVM } from "../../view-models-module";
import { Notification } from "src/wm-model";
import { Sequelize } from "sequelize-typescript";

export class NotificationController {
    private service: IBaseService<Notification>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<Notification>(Notification, sequelize);
    }

    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new NotificationCM(req.body).getData(username, username);
        await this.service.useCreate(data)
            .then((model) => {
                return res.status(201).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new NotificationUM({ ...req.body }).getData(username);
        await this.service.useUpdate(data, data.Id)
            .then((model) => {
                return res.status(200).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, []).then(
            async (model) => {
                if (model != null) {
                    await this.service.useRemove(req.params.id)
                        .then(() => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({}, []).then((list) => {
            const arr = list.map((model) => new NotificationVM({ ...model.get() as NotificationVM }).getData());
            return res.status(200).json(arr);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, [])
            .then((model) => {
                return model != null ? res.status(200).json(new NotificationVM({ ...model.get() as NotificationVM }).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
