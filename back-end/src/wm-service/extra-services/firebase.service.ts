import { File, GetSignedUrlResponse, UploadResponse } from "@google-cloud/storage";
import admin from "firebase-admin";
import { environment } from "src/environment/environment";
import { PassThrough } from "stream";
export interface IFirebaseService {
    useInit: () => Promise<void>;

    useSendToDevice: (
        registrationToken: string | string[],
        payload: admin.messaging.MessagingPayload,
        options?: admin.messaging.MessagingOptions,
    ) => Promise<admin.messaging.MessagingDevicesResponse>;

    useUploadFile: (path: string, file: Express.Multer.File) => Promise<UploadResponse>;

    useDeleteFile: (path: string) => Promise<any[]>;

    useGetFile: (path: string) => Promise<[string]>;

    useUploadFileBase64: (path: string, data: string, type: string) => Promise<any>;

}

export class FirebaseService implements IFirebaseService {
    constructor() {
    }
    public useInit = async () => {
        await admin.initializeApp({
            credential: admin.credential.cert(require("../../service-account.json")),
            databaseURL: environment.firebase.databaseURL,
        });
    }

    public useSendToDevice = async (
        registrationToken: string | string[],
        payload: admin.messaging.MessagingPayload,
        options?: admin.messaging.MessagingOptions,
    ): Promise<admin.messaging.MessagingDevicesResponse> => {
        return admin.messaging().sendToDevice(registrationToken, payload, { priority: "normal", timeToLive: 24 * 24 * 60 });
    }
    public useUploadFile = async (path: string, file: Express.Multer.File): Promise<UploadResponse> => {
        return this.useGetStorage().Bucket(environment.firebase.bucketUrl).upload(file.path, {
            destination: path + file.originalname,
            contentType: file.mimetype,
            gzip: true,
        });
    }
    public useUploadFileBase64 = async (path: string, data: string, type: string): Promise<any> => {
        const buffer = new PassThrough();
        buffer.end(Buffer.from(data, "base64"));
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        buffer.pipe(file.createWriteStream({
            metadata: {
                contentType: type,
            },
        })).on("finish", () => {
            return "";
        });
    }
    public useDeleteFile = async (path: string): Promise<any[]> => {
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        return file.delete();
    }
    public useGetFile = async (path: string): Promise<GetSignedUrlResponse> => {
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        return file.getSignedUrl({
            action: "read",
            expires: "3000-10-10",
        });
    }
    private useGetStorage = () => {
        const Bucket = (name: string) => admin.storage().bucket(name);
        const Storage = () => admin.storage();
        return { Storage, Bucket };
    }
}
