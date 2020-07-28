import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Length, Model, PrimaryKey, Table, UpdatedAt, IsUUID } from "sequelize-typescript";
import { User } from "./user.model";
import uuid from "uuidv4";

@Table
export class Notification extends Model<Notification> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public Data!: string;

    @Column
    public IsSeen!: boolean;

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
