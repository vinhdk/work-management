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
const device_model_1 = require("./device.model");
const group_model_1 = require("./group.model");
const role_model_1 = require("./role.model");
const work_model_1 = require("./work.model");
const notification_model_1 = require("./notification.model");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "UserName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "PassWordHash", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "FullName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Phone", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Email", void 0);
__decorate([
    sequelize_typescript_1.Length({ min: 0, max: 10000 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "Avatar", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], User.prototype, "Gender", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "BirthDate", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => role_model_1.Role),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "RoleId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => role_model_1.Role, "RoleId"),
    __metadata("design:type", role_model_1.Role)
], User.prototype, "Role", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => group_model_1.Group),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "GroupId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => group_model_1.Group, "GroupId"),
    __metadata("design:type", group_model_1.Group)
], User.prototype, "Group", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => work_model_1.Work),
    __metadata("design:type", Array)
], User.prototype, "Works", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => device_model_1.Device),
    __metadata("design:type", Array)
], User.prototype, "Devices", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => notification_model_1.Notification),
    __metadata("design:type", Array)
], User.prototype, "Notifications", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "CreateBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "UpdateBy", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], User.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "UpdatedAt", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "CreatedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map