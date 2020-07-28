"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    add(model) {
        return this.roleRepository.add(model);
    }
    update(model) {
        return this.roleRepository.update(model);
    }
    delete(id) {
        return this.roleRepository.delete(id);
    }
    getById(id, models) {
        return this.roleRepository.getById(id, models);
    }
    getAll(expression, models) {
        return this.roleRepository.getAll(expression, models);
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map