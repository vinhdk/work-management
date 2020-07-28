import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Length, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { User } from "./user.model";

@Table
export class Work extends Model<Work> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public Content!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public ContentSolve!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public Description!: string;

    @Column
    public Reason!: string;

    @Column
    public Mark!: number;

    @Column
    public EvaluatedTime!: Date;

    @Column
    public StartTime!: Date;

    @Column
    public EndTime!: Date;

    @Column
    public Status!: string;

    @ForeignKey(() => User)
    @Column
    public SolveBy!: string;

    @BelongsTo(() => User, "SolveBy")
    public User!: User;

    @Length({ max: 10000, min: 0 })
    @Column
    public FileUrl!: string;

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
