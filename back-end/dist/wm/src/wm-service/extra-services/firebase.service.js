"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const environment_1 = require("src/environment/environment");
const stream_1 = require("stream");
class FirebaseService {
    constructor() {
        this.useInit = () => __awaiter(this, void 0, void 0, function* () {
            yield firebase_admin_1.default.initializeApp({
                credential: firebase_admin_1.default.credential.cert(require("../../service-account.json")),
                databaseURL: environment_1.environment.firebase.databaseURL,
            });
        });
        this.useSendToDevice = (registrationToken, payload, options) => __awaiter(this, void 0, void 0, function* () {
            return firebase_admin_1.default.messaging().sendToDevice(registrationToken, payload, { priority: "normal", timeToLive: 24 * 24 * 60 });
        });
        this.useUploadFile = (path, file) => __awaiter(this, void 0, void 0, function* () {
            return this.useGetStorage().Bucket(environment_1.environment.firebase.bucketUrl).upload(file.path, {
                destination: path + file.originalname,
                contentType: file.mimetype,
                gzip: true,
            });
        });
        this.useUploadFileBase64 = (path, data, type) => __awaiter(this, void 0, void 0, function* () {
            const buffer = new stream_1.PassThrough();
            buffer.end(Buffer.from(data, "base64"));
            const file = this.useGetStorage().Bucket(environment_1.environment.firebase.bucketUrl).file(path);
            buffer.pipe(file.createWriteStream({
                metadata: {
                    contentType: type,
                },
            })).on("finish", () => {
                return "";
            });
        });
        this.useDeleteFile = (path) => __awaiter(this, void 0, void 0, function* () {
            const file = this.useGetStorage().Bucket(environment_1.environment.firebase.bucketUrl).file(path);
            return file.delete();
        });
        this.useGetFile = (path) => __awaiter(this, void 0, void 0, function* () {
            const file = this.useGetStorage().Bucket(environment_1.environment.firebase.bucketUrl).file(path);
            return file.getSignedUrl({
                action: "read",
                expires: "3000-10-10",
            });
        });
        this.useGetStorage = () => {
            const Bucket = (name) => firebase_admin_1.default.storage().bucket(name);
            const Storage = () => firebase_admin_1.default.storage();
            return { Storage, Bucket };
        };
    }
}
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map