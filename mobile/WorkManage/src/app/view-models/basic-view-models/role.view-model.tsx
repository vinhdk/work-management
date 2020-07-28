import { UserVM } from "./user.view-model";

export class RoleVM {
    public Id: string;
    public Name: string;
    public Users: UserVM[];
    public IsDelete: boolean;
    constructor(model: RoleVM) {
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
export class RoleState {
    array: Array<RoleVM>;
    constructor() {
        this.array = [];
    }
}