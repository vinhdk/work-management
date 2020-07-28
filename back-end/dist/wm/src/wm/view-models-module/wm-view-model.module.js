"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// extra view-models
const auth_view_model_1 = require("./extra-view-models/auth.view.model");
// basic view-models
const group_view_model_1 = require("./basic-view-models/group.view.model");
const role_view_model_1 = require("./basic-view-models/role.view.model");
const user_view_model_1 = require("./basic-view-models/user.view.model");
const work_view_model_1 = require("./basic-view-models/work.view.model");
// extra view-models
var auth_view_model_2 = require("./extra-view-models/auth.view.model");
exports.AuthSwagger = auth_view_model_2.AuthSwagger;
exports.LoginVM = auth_view_model_2.LoginVM;
exports.ProfileUM = auth_view_model_2.ProfileUM;
exports.ProfileVM = auth_view_model_2.ProfileVM;
// basic view-models
var group_view_model_2 = require("./basic-view-models/group.view.model");
exports.GroupCM = group_view_model_2.GroupCM;
exports.GroupSwagger = group_view_model_2.GroupSwagger;
exports.GroupUM = group_view_model_2.GroupUM;
exports.GroupVM = group_view_model_2.GroupVM;
var role_view_model_2 = require("./basic-view-models/role.view.model");
exports.RoleCM = role_view_model_2.RoleCM;
exports.RoleSwagger = role_view_model_2.RoleSwagger;
exports.RoleUM = role_view_model_2.RoleUM;
exports.RoleVM = role_view_model_2.RoleVM;
var user_view_model_2 = require("./basic-view-models/user.view.model");
exports.UserCM = user_view_model_2.UserCM;
exports.UserSwagger = user_view_model_2.UserSwagger;
exports.UserUM = user_view_model_2.UserUM;
exports.UserVM = user_view_model_2.UserVM;
var work_view_model_2 = require("./basic-view-models/work.view.model");
exports.WorkCM = work_view_model_2.WorkCM;
exports.WorkSwagger = work_view_model_2.WorkSwagger;
exports.WorkUM = work_view_model_2.WorkUM;
exports.WorkVM = work_view_model_2.WorkVM;
exports.viewModels = [
    role_view_model_1.RoleCM, role_view_model_1.RoleUM, role_view_model_1.RoleVM,
    group_view_model_1.GroupCM, group_view_model_1.GroupUM, group_view_model_1.GroupVM,
    user_view_model_1.UserCM, user_view_model_1.UserUM, user_view_model_1.UserVM,
    work_view_model_1.WorkCM, work_view_model_1.WorkUM, work_view_model_1.WorkVM,
    auth_view_model_1.LoginVM, auth_view_model_1.ProfileUM, auth_view_model_1.ProfileVM,
];
exports.swaggers = [
    auth_view_model_1.AuthSwagger,
    role_view_model_1.RoleSwagger,
    group_view_model_1.GroupSwagger,
    user_view_model_1.UserSwagger,
    work_view_model_1.WorkSwagger,
];
//# sourceMappingURL=wm-view-model.module.js.map