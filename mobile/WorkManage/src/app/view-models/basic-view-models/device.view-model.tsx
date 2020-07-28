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