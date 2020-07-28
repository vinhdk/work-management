"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wm_context_1 = require("../context/wm.context");
class RepositoryBase {
    constructor(model) {
        this.model = model;
        this.context = new wm_context_1.WmContext();
        this.repository = this.context.sequelize.getRepository(model);
    }
    add(model) {
        return this.repository.create(model);
    }
    update(model) {
        return this.repository.update(model, { where: { Id: model.id } });
    }
    delete(id) {
        return this.repository.destroy({ where: { Id: id } });
    }
    getById(id, models) {
        return this.repository.findOne({ where: { Id: id }, include: models ? models : [] });
    }
    getOne(expression, models) {
        return this.repository.findOne({ where: expression ? expression : {}, include: models ? models : [] });
    }
    getAll(expression, models) {
        return this.repository.findAll({ include: models ? models : [], where: expression ? expression : {} });
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=base.repository.js.map