"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_model_1 = require("../../wm-model/basic-models/role.model");
const base_repository_1 = require("../infrastructure/base.repository");
class RoleRepository extends base_repository_1.RepositoryBase {
    constructor() {
        super(role_model_1.Role);
    }
}
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=role.repository.js.map