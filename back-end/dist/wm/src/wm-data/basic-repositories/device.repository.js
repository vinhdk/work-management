"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const device_model_1 = require("../../wm-model/basic-models/device.model");
const base_repository_1 = require("../infrastructure/base.repository");
class DeviceRepository extends base_repository_1.RepositoryBase {
    constructor() {
        super(device_model_1.Device);
    }
}
exports.DeviceRepository = DeviceRepository;
//# sourceMappingURL=device.repository.js.map