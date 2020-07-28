import { NextFunction, Request, Response } from "express";
import { IBaseService, BaseService, IFirebaseService, FirebaseService } from "src/wm-service";
import { WorkCM, WorkUM, WorkVM, NotificationCM, UserVM, DeviceVM } from "../../view-models-module";
import { Work, User, Notification, Device } from "src/wm-model";
import { Sequelize, Repository } from "sequelize-typescript";

export class WorkController {
    private service: IBaseService<Work>;
    private firebaseService: IFirebaseService;
    private notificationService: IBaseService<Notification>;
    private userService: IBaseService<User>;
    private deviceRepository: Repository<Device>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<Work>(Work, sequelize);
        this.notificationService = new BaseService<Notification>(Notification, sequelize);
        this.userService = new BaseService<User>(User, sequelize);
        this.firebaseService = new FirebaseService();
        this.deviceRepository = sequelize.getRepository(Device);
    }

    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new WorkCM(req.body).getData(username, username);
        await this.service.useCreate(data)
            .then(async (model) => {
                const noti = new NotificationCM({ Data: "Cập nhật công việc", UserId: data.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                await this.notificationService.useCreate(noti)
                    .then(async (r) => {
                        await this.userService.useGetOne({ Id: data.SolveBy }, [this.deviceRepository]).then(async (userModel) => {
                            const user = userModel.get() as UserVM;
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
                                await this.firebaseService.useSendToDevice(user.Devices.map((e: DeviceVM) => e.Id), payload)
                                    .then(() => {
                                        return res.status(200).json(model);
                                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                            } else {
                                return res.status(200).json(model);
                            }
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new WorkUM({ ...req.body, FileUrl: req.body.FileUrl ? "groups/" + req.body.SolveBy + "/works/" + req.body.FileUrl.name : undefined }).getData(username);
        await this.service.useGetOne({ Id: data.Id }, []).then(async (res) => {
            if ((res.get() as WorkVM).FileUrl) {
                await this.firebaseService.useDeleteFile((res.get() as WorkVM).FileUrl);
            }
        });
        await this.service.useUpdate(data, data.Id)
            .then(async (model) => {
                const noti = new NotificationCM({ Data: "Cập nhật công việc", UserId: data.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                if (data.FileUrl) {
                    await this.firebaseService.useUploadFileBase64(data.FileUrl, req.body.FileUrl.data, req.body.FileUrl.type);
                }
                await this.notificationService.useCreate(noti)
                    .then(async (r) => {
                        await this.userService.useGetOne({ Id: data.SolveBy }, [this.deviceRepository]).then(async (userModel) => {
                            const user = userModel.get() as UserVM;
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
                                await this.firebaseService.useSendToDevice(user.Devices.map((e: DeviceVM) => e.Id), payload)
                                    .then(() => {
                                        return res.status(200).json({ message: "Cập nhật thành công" });
                                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                            } else {
                                return res.status(200).json({ message: "Cập nhật thành công" });
                            }

                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        await this.service.useGetOne({ Id: req.params.id }, []).then(
            async (model) => {
                if (model != null) {
                    await this.service.useRemove(req.params.id)
                        .then(async () => {
                            const work = model.get() as WorkVM;
                            const noti = new NotificationCM({ Data: "Cập nhật công việc", UserId: work.SolveBy, getData: () => undefined, IsSeen: false }).getData(username, username);
                            await this.notificationService.useCreate(noti)
                                .then(async (r) => {
                                    await this.userService.useGetOne({ Id: work.SolveBy }, [this.deviceRepository]).then(async (userModel) => {
                                        const user = userModel.get() as UserVM;
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
                                            await this.firebaseService.useSendToDevice(user.Devices.map((e: DeviceVM) => e.Id), payload, options)
                                                .then(() => {
                                                    return res.status(200).json({ message: "Xóa thành công" });
                                                }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                                        } else {
                                            return res.status(200).json({ message: "Xóa thành công" });
                                        }
                                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                                }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({}, []).then(async (list) => {
            const arr: WorkVM[] = [];
            for (let index = 0; index < list.length; index++) {
                const model = list[index];
                const data = model.get() as WorkVM;
                if (data.FileUrl) {
                    await this.firebaseService.useGetFile(data.FileUrl)
                        .then(async (uri) => {
                            data.FileUrl = uri[0];
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                }
                arr.push(new WorkVM({ ...data }).getData());
            }
            return res.status(200).json(arr);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, [])
            .then((model) => {
                return model != null ? res.status(200).json(new WorkVM({ ...model.get() as WorkVM }).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
