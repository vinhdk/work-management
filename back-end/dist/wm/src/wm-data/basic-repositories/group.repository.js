"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_model_1 = require("../../wm-model/basic-models/group.model");
const base_repository_1 = require("../infrastructure/base.repository");
class GroupRepository extends base_repository_1.RepositoryBase {
    constructor() {
        super(group_model_1.Group);
    }
}
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map