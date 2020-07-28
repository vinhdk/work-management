"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wm_data_1 = require("src/wm-data");
class BaseService {
    constructor(model, sequelize) {
        this.useCreate = (model) => {
            return this.repository.useCreate(model);
        };
        this.useUpdate = (model, id) => {
            return this.repository.useUpdate(model, id);
        };
        this.useRemove = (id) => {
            return this.repository.useRemove(id);
        };
        this.useGetOne = (expression, models) => {
            return this.repository.useGetOne(expression, models);
        };
        this.useGetAll = (expression, models) => {
            return this.repository.useGetAll(expression, models);
        };
        this.repository = new wm_data_1.BaseRepository(model, sequelize);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=index.js.map