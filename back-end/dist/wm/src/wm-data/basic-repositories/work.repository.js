"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const work_model_1 = require("../../wm-model/basic-models/work.model");
const base_repository_1 = require("../infrastructure/base.repository");
class WorkRepository extends base_repository_1.RepositoryBase {
    constructor() {
        super(work_model_1.Work);
    }
}
exports.WorkRepository = WorkRepository;
//# sourceMappingURL=work.repository.js.map