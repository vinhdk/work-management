"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model, sequelize) {
        this.useCreate = (model) => {
            return this.repository.create(model);
        };
        this.useUpdate = (model, id) => {
            return this.repository.update(model, { where: { Id: id } });
        };
        this.useRemove = (id) => {
            return this.repository.destroy({ where: { Id: id } });
        };
        this.useGetOne = (expression, models) => {
            return this.repository.findOne({ where: expression, include: models });
        };
        this.useGetAll = (expression, models) => {
            return this.repository.findAll({ include: models, where: expression });
        };
        this.repository = sequelize.getRepository(model);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=index.js.map