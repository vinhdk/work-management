"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    add(model) {
        return this.userRepository.add(model);
    }
    update(model) {
        return this.userRepository.update(model);
    }
    delete(id) {
        return this.userRepository.delete(id);
    }
    getById(id, models) {
        return this.userRepository.getById(id, models);
    }
    getAll(expression, models) {
        return this.userRepository.getAll(expression, models);
    }
    getOne(expression, models) {
        return this.userRepository.getOne(expression, models);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map