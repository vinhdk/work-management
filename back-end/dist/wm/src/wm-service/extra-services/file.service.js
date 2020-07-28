"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const multer_1 = __importDefault(require("multer"));
const environment_1 = require("src/environment/environment");
class FileService {
    constructor() {
        this.useSaveFile = (type) => {
            return multer_1.default({
                fileFilter: (req, file, cb) => {
                    if (file.mimetype === "image/bmp"
                        || file.mimetype === "image/png"
                        || file.mimetype === "image/jpg"
                        || file.mimetype === "image/jpeg"
                        || file.mimetype === "image/gif") {
                        cb(null, true);
                    }
                    else {
                        return cb(new Error("Only image are allowed!"), false);
                    }
                },
                storage: multer_1.default.diskStorage({
                    filename: (req, file, cb) => {
                        if (type === "avatar") {
                            const request = req;
                            const token = request.headers.authorization;
                            const decoded = jsonwebtoken_1.verify(token + "", environment_1.environment.jwt.code, { issuer: environment_1.environment.jwt.issue, subject: environment_1.environment.jwt.subject });
                            const username = Object.assign(decoded.valueOf()).aud;
                            cb(null, Date.now() + "-" + username + "-" + file.originalname);
                        }
                        else {
                            cb(null, Date.now() + "-" + file.originalname);
                        }
                    },
                }),
            });
        };
    }
}
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map