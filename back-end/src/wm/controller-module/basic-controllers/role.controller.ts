import { NextFunction, Request, Response } from "express";
import { Repository, Sequelize } from "sequelize-typescript";
import { User, Role } from "src/wm-model";
import { IBaseService, BaseService } from "src/wm-service";
import { RoleCM, RoleUM, RoleVM, UserUM } from "../../view-models-module";

export class RoleController {
    private service: IBaseService<Role>;
    private userService: IBaseService<User>;
    private userRepository: Repository<User>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<Role>(Role, sequelize);
        this.userRepository = sequelize.getRepository(User);
        this.userService = new BaseService<User>(User, sequelize);
    }

    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new RoleCM(req.body).getData(username, username);
        await this.service.useCreate(data)
            .then((model) => {
                return res.status(201).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = new RoleUM({ ...req.body }).getData(username);
        await this.service.useUpdate(data, data.Id)
            .then((model) => {
                return res.status(200).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, [this.userRepository]).then(
            async (model) => {
                if (model != null) {
                    if (model.Name === "Admin") {
                        return res.status(500).json({ message: "Không thể xóa" });
                    } else {
                        model.Users.forEach(async (user) => {
                            const username = JSON.parse(req.headers.extra as string).UserName;
                            const data = new UserUM({ ...user.get() as UserUM }).getData(username);
                            data.GroupId = "";
                            await this.userService.useUpdate(data, data.Id);
                        });
                        await this.service.useRemove(req.params.id)
                            .then(() => {
                                return res.status(200).json({ message: "Xóa thành công" });
                            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                    }
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({ ...req.query }, []).then((list) => {
            const arr = list.map((model) => new RoleVM({ ...model.get() as RoleVM }).getData()).filter((model) => model.Name !== "Admin");
            return res.status(200).json(arr);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ Id: req.params.id }, [])
            .then((model) => {
                return model != null ? res.status(200).json(new RoleVM({ ...model.get() as RoleVM }).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
