import { compareSync, hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { IBaseService, IAuthService, IFirebaseService, BaseService, AuthService, FirebaseService } from "src/wm-service";
import { User, Role, Device, Notification } from "src/wm-model";
import { ProfileVM, LoginGM, UserUM, DeviceCM, ProfileUM, DeviceVM, NotificationCM, UserVM, WorkVM } from "../../view-models-module";
import { Sequelize, Repository } from "sequelize-typescript";

export class AuthController {
    private userService: IBaseService<User>;
    private roleService: IBaseService<Role>;
    private deviceService: IBaseService<Device>;
    private notificationService: IBaseService<Notification>;
    private authService: IAuthService;
    private firebaseService: IFirebaseService;
    private deviceRepository: Repository<Device>;
    constructor(sequelize: Sequelize) {
        this.userService = new BaseService<User>(User, sequelize);
        this.roleService = new BaseService<Role>(Role, sequelize);
        this.deviceService = new BaseService<Device>(Device, sequelize);
        this.notificationService = new BaseService<Notification>(Notification, sequelize);
        this.deviceRepository = sequelize.getRepository(Device);
        this.authService = new AuthService(sequelize);
        this.firebaseService = new FirebaseService();
    }
    public useCheckToken = async (req: Request, res: Response, next: NextFunction) => {
        let count = 0;
        const user = JSON.parse(req.headers.extra as string);
        for (let index = 0; index < user.Works.length; index++) {
            const element: WorkVM = user.Works[index];
            const nowTimes = new Date().toLocaleDateString().split("/");
            const workTimes = new Date(element.EndTime).toLocaleDateString().split("/");
            if (workTimes[2] === nowTimes[2]) {
                if (workTimes[0] === nowTimes[0]) {
                    if (parseInt(workTimes[1], 0) - parseInt(nowTimes[1], 0) === 1) {
                        if (element.Status === "1") {
                            count = count + 1;
                        }
                    }
                }
            }
        }
        if (count > 0) {
            const noti = new NotificationCM({ Data: "Có " + count + " công việc sắp hết hạn", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
            await this.notificationService.useCreate(noti)
                .then(async (r) => {
                    const payload = {

                        notification: {
                            body: "Nhấn vào để xem",
                            title: "Bạn vừa có 1 cập nhập mới",
                        },
                        data: {
                            UserId: user.Id,
                            Data: "Có " + count + " công việc sắp hết hạn",
                            Id: user.Id,
                        },
                    };
                    if (user.Devices.length > 0) {
                        const ids = user.Devices.map((e: DeviceVM) => e.Id);
                        await this.firebaseService.useSendToDevice(ids.length > 1 ? ids : ids[0], payload);
                    }
                }).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        }
        if (user.Avatar) {
            await this.firebaseService.useGetFile(user.Avatar)
                .then(async (uri) => {
                    user.Avatar = uri[0];
                    return res.status(200).json(new ProfileVM({ ...user }).getData());
                }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        } else {
            return res.status(200).json(new ProfileVM({ ...user }).getData());
        }
    }
    public useLogin = async (req: Request, res: Response, next: NextFunction) => {
        const account: LoginGM = new LoginGM({ ...req.body });
        this.userService.useGetOne({ UserName: account.UserName }, [])
            .then(async (user) => {
                if (user) {
                    if (compareSync(account.PassWord, user.PassWordHash)) {
                        await this.deviceService.useGetOne({ Id: account.FirebaseToken }, [])
                            .then(async (model) => {
                                if (model === null) {
                                    await this.deviceService.useCreate(new DeviceCM({ Id: account.FirebaseToken, UserId: user.Id, getData: () => undefined }).getData(account.UserName, account.UserName));
                                } else {
                                    if (model.UserId !== user.Id) {
                                        await this.deviceService.useRemove(account.FirebaseToken).then(async () => {
                                            await this.deviceService.useCreate(new DeviceCM({ Id: account.FirebaseToken, UserId: user.Id, getData: () => undefined }).getData(account.UserName, account.UserName));
                                        });
                                    }
                                }
                            });
                        await this.roleService.useGetOne({ Id: user.RoleId }, [])
                            .then(
                                (model) => {
                                    return res.status(200).json({
                                        AccessToken: this.authService.useGenerateToken(user.UserName, model.Name),
                                        ExpiresIn: "24h",
                                        Role: model.Name,
                                    });
                                },
                            );
                    } else {
                        return res.status(400).json({ message: "Sai mật khẩu" });
                    }
                } else {
                    return res.status(404).json({ message: "Tài khoản không tồn tại" });
                }
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const user = JSON.parse(req.headers.extra as string);
        const data = new ProfileUM(req.body).getData(user.UserName);
        await this.userService.useUpdate(data, data.Id)
            .then(async (model) => {
                const noti = new NotificationCM({ Data: "Cập nhật thông tin", UserId: data.Id, getData: () => undefined, IsSeen: false }).getData(data.UserName, data.UserName);
                await this.notificationService.useCreate(noti)
                    .then(async (r) => {
                        const payload = {
                            notification: {
                                body: "Nhấn vào để xem",
                                title: "Bạn vừa có 1 cập nhập mới",
                                sound: "default",
                            },
                            data: {
                                UserId: user.Id,
                                Data: "",
                                Id: r.Id,
                            },
                        };
                        if (user.Devices.length > 0) {
                            const ids = user.Devices.map((e: DeviceVM) => e.Id);
                            await this.firebaseService.useSendToDevice(ids.length > 1 ? ids : ids[0], payload)
                                .catch((err) => {
                                    return res.status(400).json({ message: "Có lỗi xảy ra" });
                                });
                        } else {
                            return res.status(200).json({ message: "Cập nhật thành công" });
                        }
                        return res.status(200).json({ message: "Cập nhật thành công" });
                    }).catch((err) => {
                        return res.status(400).json({ message: "Có lỗi xảy ra" });
                    });
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public async useUpdatePassword(req: Request, res: Response, next: NextFunction): Promise<any> {
        const user = JSON.parse(req.headers.extra as string);
        if (compareSync(req.body.OldPassWord, user.PassWordHash ? user.PassWordHash : "")) {
            user.PassWordHash = hashSync(req.body.NewPassWord, 10);
            await this.userService.useUpdate(user, user.Id).then(async (r) => {
                const noti = new NotificationCM({ Data: "Cập nhật thông tin", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
                await this.notificationService.useCreate(noti)
                    .then(async (r) => {
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
                    }).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
            }).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
        } else {
            res.status(400).json({ message: "Mật khẩu cũ sai" });
        }
    }
    public async useUpdateAvatar(req: Request, res: Response, next: NextFunction): Promise<any> {
        const user = JSON.parse(req.headers.extra as string);
        if (user.Avatar) {
            await this.firebaseService.useDeleteFile(user.Avatar);
        }
        await this.userService.useUpdate({ ...user, Avatar: "users/" + user.UserName + "/avatars/" + req.body.name }, user.Id).then(async (r) => {
            await this.firebaseService.useUploadFileBase64("users/" + user.UserName + "/avatars/" + req.body.name, req.body.data, req.body.type);
            const noti = new NotificationCM({ Data: "Cập nhật thông tin", UserId: user.Id, getData: () => undefined, IsSeen: false }).getData(user.UserName, user.UserName);
            await this.notificationService.useCreate(noti)
                .then(async (r) => {
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
                            .then(async () => {
                                await this.firebaseService.useGetFile("users/" + user.UserName + "/avatars/" + req.body.name)
                                    .then(async (uri) => {
                                        return res.status(200).json({ Avatar: uri[0] });
                                    }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    } else {
                        return res.status(200).json({ message: "Cập nhật thành công" });
                    }
                }).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));

        }).catch((e) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
