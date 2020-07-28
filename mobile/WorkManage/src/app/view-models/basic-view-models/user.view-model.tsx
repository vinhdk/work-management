import { WorkVM } from "./work.view-model";

export class UserCM {
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public GroupId: string;
    public BirthDate: Date;
    public Gender: boolean;
    constructor(model: UserCM) {
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class UserUM {
    public Id: string;
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public GroupId: string;
    public Works: WorkVM[];
    public BirthDate: Date;
    public Gender: boolean;

    constructor(model: UserUM) {
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.Works = model.Works;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class UserVM {
    public Id: string;
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public Avatar: string;
    public GroupId: string;
    public Works: WorkVM[];
    public BirthDate: Date;
    public Gender: boolean;
    constructor(model: UserVM) {
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.Works = model.Works;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
        this.Avatar = model.Avatar;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class UserState {
    array: Array<UserVM>;
    constructor() {
        this.array = [];
    }
}