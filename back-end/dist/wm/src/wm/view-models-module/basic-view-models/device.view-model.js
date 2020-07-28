"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeviceCM {
    constructor(model) {
        this.getData = (UpdateBy, CreateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy, CreateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
}
exports.DeviceCM = DeviceCM;
class DeviceUM {
    constructor(model) {
        this.getData = (UpdateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
}
exports.DeviceUM = DeviceUM;
class DeviceVM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserId = model.UserId;
    }
}
exports.DeviceVM = DeviceVM;
//# sourceMappingURL=device.view-model.js.map