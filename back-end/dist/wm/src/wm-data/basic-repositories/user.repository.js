"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../../wm-model/basic-models/user.model");
const base_repository_1 = require("../infrastructure/base.repository");
class UserRepository extends base_repository_1.RepositoryBase {
    constructor() {
        super(user_model_1.User);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map