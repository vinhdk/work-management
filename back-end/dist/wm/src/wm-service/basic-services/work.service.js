"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkService {
    constructor(workRepository) {
        this.workRepository = workRepository;
    }
    add(model) {
        return this.workRepository.add(model);
    }
    update(model) {
        return this.workRepository.update(model);
    }
    delete(id) {
        return this.workRepository.delete(id);
    }
    getById(id, models) {
        return this.workRepository.getById(id, models);
    }
    getAll(expression, models) {
        return this.workRepository.getAll(expression, models);
    }
}
exports.WorkService = WorkService;
//# sourceMappingURL=work.service.js.map