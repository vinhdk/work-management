import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { environment } from "src/environment/environment";
import { User, Work, Device, Notification } from "src/wm-model";
import { IBaseService, BaseService } from "src/wm-service";
import { Sequelize } from "sequelize-typescript";
export interface IAuthService {
    useGenerateToken: (username: string, role: string) => string;
    useAuthorzie: (req: Request, res: Response, next: NextFunction) => void;
}

export class AuthService implements IAuthService {
    private sequelize: Sequelize;
    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
    }
    public useGenerateToken = (username: string, role: string): string => {
        return sign({ role }, environment.jwt.code, { expiresIn: "24h", audience: username, issuer: environment.jwt.issue, subject: environment.jwt.subject });
    }
    public useAuthorzie = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Có vẻ bạn chưa đăng nhập. Vui lòng đăng nhập" });
        } else {
            try {
                const userService: IBaseService<User> = new BaseService<User>(User, this.sequelize);
                const decoded = verify(token + "", environment.jwt.code, { issuer: environment.jwt.issue, subject: environment.jwt.subject });
                const username = Object.assign(decoded.valueOf()).aud;
                const role = Object.assign(decoded.valueOf()).role;
                await userService.useGetOne({ UserName: username }, [this.sequelize.getRepository(Work), this.sequelize.getRepository(Device), this.sequelize.getRepository(Notification)])
                    .then(async (user) => {
                        if (user) {
                            const path = "/" + req.path.split("/")[1] + "/" + req.path.split("/")[2];
                            const accessRole = environment.accessRole.find((e) => e.path === path);
                            const roles = accessRole
                                ? accessRole.methods.findIndex((e) => e.method === req.method.toLowerCase()) > -1
                                    ? accessRole.methods[accessRole.methods.findIndex((e) => e.method === req.method.toLowerCase())].roles
                                    : []
                                : [];
                            if (roles.indexOf(role) > -1) {
                                req.headers.extra = JSON.stringify({ ...user.get() });
                                next();
                            } else {
                                return res.status(401).json("Bạn không có quyền truy cập");
                            }
                        } else {
                            return res.status(404).json({ error: "Tài khoản không tồn tại" });
                        }
                    })
                    .catch((err) => {
                        return res.status(400).json({ error: "Có lỗi xảy ra" });
                    });
            } catch (ex) {
                return res.status(400).json({ error: "Token Sai" });
            }
        }
    }
}
