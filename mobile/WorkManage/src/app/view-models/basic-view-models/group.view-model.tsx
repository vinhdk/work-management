import { UserVM } from "./user.view-model";

export class GroupCM {
    public Name: string;
    constructor(model: GroupCM) {
        this.Name = model.Name;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class GroupUM {
    public Id: string;
    public Name: string;
    constructor(model: GroupUM) {
        this.Id = model.Id;
        this.Name = model.Name;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class GroupVM {
    public Id: string;
    public Name: string;
    public Users: UserVM[];
    public IsDelete: boolean;
    constructor(model: GroupVM) {
        this.Id = model.Id;
        this.Name = model.Name;
        this.Users = model.Users;
        this.IsDelete = model.IsDelete;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class GroupState {
    array: Array<GroupVM>;
    constructor() {
        this.array = [];
    }
}
