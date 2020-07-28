import { WorkVM } from "../basic-view-models/work.view-model";
import { NotificationVM } from "../basic-view-models/notification.view-model";
import { DeviceVM } from "../basic-view-models/device.view-model";

export class LoginGM {
    public UserName: string;
    public PassWord: string;
    public FirebaseToken: string;
    constructor(model: LoginGM) {
        this.UserName = model.UserName;
        this.PassWord = model.PassWord;
        this.FirebaseToken = model.FirebaseToken;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class ProfileUM {
    public Id: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public Gender: boolean;
    public BirthDate: Date;
    constructor(model: ProfileUM) {
        this.Id = model.Id;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.Gender = model.Gender;
        this.BirthDate = model.BirthDate;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class ProfileVM {
    public Id: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public Gender: boolean;
    public BirthDate: Date;
    public Avatar: string;
    public Works: WorkVM[];
    public Devices: DeviceVM[];
    public Notifications: NotificationVM[];
    public GroupId: string;
    constructor(model: ProfileVM) {
        this.Id = model.Id;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.Gender = model.Gender;
        this.BirthDate = model.BirthDate;
        this.Avatar = model.Avatar;
        this.GroupId = model.GroupId;
        this.Works = model.Works;
        this.Devices = model.Devices;
        this.Notifications = model.Notifications;

    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class TokenVM {
    AccessToken: string;
    ExpiresIn: string;
    Role: string;
    constructor(model: TokenVM) {
        this.AccessToken = model.AccessToken;
        this.ExpiresIn = model.ExpiresIn;
        this.Role = model.Role;

    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class PasswordVM {
    OldPassWord: string;
    NewPassWord: string;
    constructor(model: PasswordVM) {
        this.OldPassWord = model.OldPassWord;
        this.NewPassWord = model.NewPassWord;

    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class AuthState {
    profile: ProfileVM;
    constructor() {
        this.profile = new ProfileVM({} as any);
    }
}