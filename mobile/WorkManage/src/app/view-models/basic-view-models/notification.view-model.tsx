export class NotificationCM {
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    constructor(model: NotificationCM) {
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class NotificationUM {
    public Id: string;
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    constructor(model: NotificationUM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class NotificationVM {
    public Id: string;
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    public CreatedAt: Date;
    constructor(model: NotificationVM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
        this.CreatedAt = model.CreatedAt;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class NotificationState {
    array: Array<NotificationVM>;
    constructor() {
        this.array = [];
    }
}