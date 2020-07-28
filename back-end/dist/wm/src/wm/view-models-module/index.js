"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// extra view-models
const auth_view_model_1 = require("./extra-view-models/auth.view-model");
// basic view-models
const group_view_model_1 = require("./basic-view-models/group.view-model");
const role_view_model_1 = require("./basic-view-models/role.view-model");
const device_view_model_1 = require("./basic-view-models/device.view-model");
const user_view_model_1 = require("./basic-view-models/user.view-model");
const work_view_model_1 = require("./basic-view-models/work.view-model");
const notification_view_model_1 = require("./basic-view-models/notification.view-model");
// extra view-models
__export(require("./extra-view-models/auth.view-model"));
// basic view-models
__export(require("./basic-view-models/group.view-model"));
__export(require("./basic-view-models/role.view-model"));
__export(require("./basic-view-models/user.view-model"));
__export(require("./basic-view-models/work.view-model"));
__export(require("./basic-view-models/device.view-model"));
__export(require("./basic-view-models/notification.view-model"));
exports.VIEWMODELS = [
    role_view_model_1.RoleCM, role_view_model_1.RoleUM, role_view_model_1.RoleVM,
    group_view_model_1.GroupCM, group_view_model_1.GroupUM, group_view_model_1.GroupVM,
    user_view_model_1.UserCM, user_view_model_1.UserUM, user_view_model_1.UserVM,
    work_view_model_1.WorkCM, work_view_model_1.WorkUM, work_view_model_1.WorkVM,
    auth_view_model_1.LoginGM, auth_view_model_1.ProfileUM, auth_view_model_1.ProfileVM,
    device_view_model_1.DeviceCM, device_view_model_1.DeviceVM, device_view_model_1.DeviceUM,
    notification_view_model_1.NotificationCM, notification_view_model_1.NotificationUM, notification_view_model_1.NotificationVM,
];
exports.SWAGGERS = [
    auth_view_model_1.AuthSwagger,
    role_view_model_1.RoleSwagger,
    group_view_model_1.GroupSwagger,
    user_view_model_1.UserSwagger,
    work_view_model_1.WorkSwagger,
    notification_view_model_1.NotificationSwagger,
];
//# sourceMappingURL=index.js.map