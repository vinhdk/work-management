"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    add(model) {
        return this.groupRepository.add(model);
    }
    update(model) {
        return this.groupRepository.update(model);
    }
    delete(id) {
        return this.groupRepository.delete(id);
    }
    getById(id, models) {
        return this.groupRepository.getById(id, models);
    }
    getAll(expression, models) {
        return this.groupRepository.getAll(expression, models);
    }
}
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map