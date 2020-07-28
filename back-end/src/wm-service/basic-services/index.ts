import { WhereOptions } from "sequelize/types";
import { IBaseRepository, BaseRepository } from "src/wm-data";
import { Model, Repository, Sequelize } from "sequelize-typescript";

export interface IBaseService<T> {
    useCreate: (model: T) => Promise<T>;
    useUpdate: (model: T, id: string | number) => Promise<[number, T[]]>;
    useRemove: (id: string | number) => Promise<number>;
    useGetAll: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T[]>;
    useGetOne: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T>;
}

export class BaseService<T extends Model> implements IBaseService<T> {

    private readonly repository: IBaseRepository<T>;
    constructor(model: new () => T, sequelize: Sequelize) {
        this.repository = new BaseRepository<T>(model, sequelize);
    }
    public useCreate = (model: T): Promise<T> => {
        return this.repository.useCreate(model);
    }
    public useUpdate = (model: T, id: string | number): Promise<[number, T[]]> => {
        return this.repository.useUpdate(model, id);
    }
    public useRemove = (id: string | number): Promise<number> => {
        return this.repository.useRemove(id);
    }
    public useGetOne = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.useGetOne(expression, models);
    }
    public useGetAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.useGetAll(expression, models);
    }
}
