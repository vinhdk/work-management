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
const user_model_1 = require("./user.model");
const uuidv4_1 = __importDefault(require("uuidv4"));
let Notification = class Notification extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Length({ max: 500, min: 0 }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "Data", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Notification.prototype, "IsSeen", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "UserId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User, "UserId"),
    __metadata("design:type", user_model_1.User)
], Notification.prototype, "User", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "CreateBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "UpdateBy", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Notification.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Notification.prototype, "UpdatedAt", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Notification.prototype, "CreatedAt", void 0);
Notification = __decorate([
    sequelize_typescript_1.Table
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.model.js.map