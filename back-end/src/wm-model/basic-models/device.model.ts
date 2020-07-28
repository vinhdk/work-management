import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Length, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Device extends Model<Device> {

    @Length({ max: 500, min: 0 })
    @PrimaryKey
    @Column
    public Id!: string;

    @ForeignKey(() => User)
    @Column
    public UserId!: string;

    @BelongsTo(() => User, "UserId")
    public User!: User;

    @Column
    public CreateBy!: string;

    @Column
    public UpdateBy!: string;

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @UpdatedAt
    public UpdatedAt!: Date;

    @CreatedAt
    public CreatedAt!: Date;
}
