"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const uuidv4_1 = __importDefault(require("uuidv4"));
const user_model_1 = require("./user.model");
let Work = class Work extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Name", void 0);
__decorate([
    sequelize_typescript_1.Length({ max: 500, min: 0 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Content", void 0);
__decorate([
    sequelize_typescript_1.Length({ max: 500, min: 0 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "ContentSolve", void 0);
__decorate([
    sequelize_typescript_1.Length({ max: 500, min: 0 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Reason", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Work.prototype, "Mark", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Work.prototype, "EvaluatedTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Work.prototype, "StartTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Work.prototype, "EndTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "Status", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "SolveBy", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User, "SolveBy"),
    __metadata("design:type", user_model_1.User)
], Work.prototype, "User", void 0);
__decorate([
    sequelize_typescript_1.Length({ max: 10000, min: 0 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "FileUrl", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "CreateBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Work.prototype, "UpdateBy", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Work.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Work.prototype, "UpdatedAt", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Work.prototype, "CreatedAt", void 0);
Work = __decorate([
    sequelize_typescript_1.Table
], Work);
exports.Work = Work;
//# sourceMappingURL=work.model.js.map