import { existsSync, mkdirSync } from "fs";
import { verify } from "jsonwebtoken";
import multer from "multer";
import { environment } from "src/environment/environment";
export interface IFileService {
    useSaveFile: (type: string) => multer.Instance;
}

export class FileService implements IFileService {
    public useSaveFile = (type: string): multer.Instance => {
        return multer({
            fileFilter: (req, file, cb) => {
                if (file.mimetype === "image/bmp"
                    || file.mimetype === "image/png"
                    || file.mimetype === "image/jpg"
                    || file.mimetype === "image/jpeg"
                    || file.mimetype === "image/gif") {
                    cb(null, true);
                } else {
                    return cb(new Error("Only image are allowed!"), false);
                }
            },
            storage: multer.diskStorage({
                filename: (req, file, cb) => {
                    if (type === "avatar") {
                        const request: any = req;
                        const token = request.headers.authorization;
                        const decoded = verify(token + "", environment.jwt.code, { issuer: environment.jwt.issue, subject: environment.jwt.subject });
                        const username = Object.assign(decoded.valueOf()).aud;
                        cb(null, Date.now() + "-" + username + "-" + file.originalname);
                    } else {
                        cb(null, Date.now() + "-" + file.originalname);
                    }
                },
            }),
        });
    }

}
