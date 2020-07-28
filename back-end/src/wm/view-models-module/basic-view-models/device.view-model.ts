export class DeviceCM {
    public Id: string;
    public UserId: string;
    constructor(model: DeviceCM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
    public getData = (UpdateBy: string, CreateBy: string): any => {
        const data = { ...this, UpdateBy, CreateBy };
        delete data.getData;
        return data;
    }
}

export class DeviceUM {
    public Id: string;
    public UserId: string;
    constructor(model: DeviceUM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
    public getData = (UpdateBy: string): any => {
        const data = { ...this, UpdateBy };
        delete data.getData;
        return data;
    }
}

export class DeviceVM {
    public Id: string;
    public UserId: string;
    constructor(model: DeviceVM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
