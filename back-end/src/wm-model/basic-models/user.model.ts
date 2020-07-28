import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Length, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Device } from "./device.model";
import { Group } from "./group.model";
import { Role } from "./role.model";
import { Work } from "./work.model";
import { Notification } from "./notification.model";

@Table
export class User extends Model<User> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Unique
    @Column
    public UserName!: string;

    @Column
    public PassWordHash!: string;

    @Column
    public FullName!: string;

    @Column
    public Phone!: string;

    @Unique
    @Column
    public Email!: string;
    @Length({ min: 0, max: 10000 })
    @Column
    public Avatar!: string;

    @Column
    public Gender!: boolean;

    @Column
    public BirthDate!: Date;

    @ForeignKey(() => Role)
    @Column
    public RoleId!: string;

    @BelongsTo(() => Role, "RoleId")
    public Role!: Role;

    @ForeignKey(() => Group)
    @Column
    public GroupId!: string;

    @BelongsTo(() => Group, "GroupId")
    public Group!: Group;

    @HasMany(() => Work)
    public Works!: Work[];

    @HasMany(() => Device)
    public Devices!: Device[];

    @HasMany(() => Notification)
    public Notifications!: Notification[];

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
