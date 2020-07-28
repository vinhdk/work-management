import { hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { Repository, Sequelize } from "sequelize-typescript";
import { Device, Work, User, Role, Notification } from "src/wm-model";
import { IBaseService, BaseService, FirebaseService, IFirebaseService } from "src/wm-service";
import { UserCM, UserUM, UserVM, WorkUM, RoleVM, NotificationCM, DeviceVM } from "../../view-models-module";

export class UserController {
    private service: IBaseService<User>;
    private workService: IBaseService<Work>;
    private roleService: IBaseService<Role>;
    private firebaseService: IFirebaseService;
    private workRepository: Repository<Work>;
    private deviceRepository: Repository<Device>;
    private notificationService: IBaseService<Notification>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<User>(User, sequelize);
        this.workService = new BaseService<Work>(Work, sequelize);
        this.roleService = new BaseService<Role>(Role, sequelize);
        this.notificationService = new BaseService<Notification>(Notification, sequelize);
        this.workRepository = sequelize.getRepository(Work);
        this.deviceRepository = sequelize.getRepository(Device);
        this.firebaseService = new FirebaseService();
    }

    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new UserCM(req.body).getData(username, username);
        data.PassWordHash = hashSync(data.PassWord, 10);
        delete data.PassWord;
        await this.service.useCreate(data)
            .then(async (model) => {
                return res.status(201).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new UserUM(req.body).getData(username);
        await this.service.useUpdate(data, data.Id)
            .then(async (model) => {
                const noti = new NotificationCM({ Data: "Cập nhật thông tin", UserId: data.Id, getData: () => undefined, IsSeen: false }).getData(data.UserName, data.UserName);
                await this.notificationService.useCreate(noti)
                    .then(async (r) => {
                        await this.service.useGetOne({ Id: data.Id }, [this.deviceRepository]).then(async (userModel) => {
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
        await this.service.useGetOne({ Id: req.params.id }, [this.workRepository]).then(
            async (model) => {
                if (model != null) {
                    model.Works.forEach(async (work) => {
                        const username = JSON.parse(req.headers.extra as string).UserName;
                        const data = new WorkUM({ ...work.get() as WorkUM }).getData(username);
                        data.UserId = "";
                        await this.workService.useUpdate(data, data.Id);
                    });
                    await this.service.useRemove(req.params.id)
                        .then(async () => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({ ...req.query }, [this.workRepository]).then(async (list) => {
            await this.roleService.useGetAll({}, []).then(async (roles) => {
                const arr = list.map((model) => new UserVM({ ...model.get() as UserVM }).getData())
                    .filter((model) => {
                        const role = roles.find((role) => (role.get() as RoleVM).Id === model.RoleId);
                        return role ? role.Name !== "Admin" : false;
                    });
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element.Avatar) {
                        await this.firebaseService.useGetFile(element.Avatar).then((res) => {
                            arr[index].Avatar = res[0];
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    }
                }
                return res.status(200).json(arr);
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, [this.workRepository, this.deviceRepository])
            .then((model) => {
                return model != null ? res.status(200).json(new UserVM({ ...model.get() as UserVM }).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
