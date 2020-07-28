import { Model, Repository, Sequelize } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";
import { WmContext } from "../context";

export interface IBaseRepository<T extends Model> {
    useCreate: (model: T) => Promise<T>;
    useUpdate: (model: T, id: string | number) => Promise<[number, T[]]>;
    useRemove: (id: string | number) => Promise<number>;
    useGetAll: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T[]>;
    useGetOne: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T>;
}

export class BaseRepository<T extends Model> implements IBaseRepository<T> {

    private repository: Repository<T>;
    constructor(model: new () => T, sequelize: Sequelize) {
        this.repository = sequelize.getRepository(model);
    }
    public useCreate = (model: T): Promise<T> => {
        return this.repository.create(model);
    }
    public useUpdate = (model: T, id: string | number): Promise<[number, T[]]> => {
        return this.repository.update(model, { where: { Id: id } });
    }
    public useRemove = (id: string | number): Promise<number> => {
        return this.repository.destroy({ where: { Id: id } });
    }
    public useGetOne = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.findOne({ where: expression, include: models });
    }
    public useGetAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.findAll({ include: models, where: expression });
    }
}
