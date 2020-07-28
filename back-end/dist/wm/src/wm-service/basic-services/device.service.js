"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeviceService {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    add(model) {
        return this.deviceRepository.add(model);
    }
    update(model) {
        return this.deviceRepository.update(model);
    }
    delete(id) {
        return this.deviceRepository.delete(id);
    }
    getById(id, models) {
        return this.deviceRepository.getById(id, models);
    }
    getAll(expression, models) {
        return this.deviceRepository.getAll(expression, models);
    }
}
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map