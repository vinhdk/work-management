"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// basic models
const device_model_1 = require("./basic-models/device.model");
const group_model_1 = require("./basic-models/group.model");
const role_model_1 = require("./basic-models/role.model");
const user_model_1 = require("./basic-models/user.model");
const work_model_1 = require("./basic-models/work.model");
const notification_model_1 = require("./basic-models/notification.model");
// basic models
__export(require("./basic-models/device.model"));
__export(require("./basic-models/group.model"));
__export(require("./basic-models/role.model"));
__export(require("./basic-models/user.model"));
__export(require("./basic-models/work.model"));
__export(require("./basic-models/notification.model"));
exports.MODELS = [
    user_model_1.User,
    work_model_1.Work,
    device_model_1.Device,
    role_model_1.Role,
    group_model_1.Group,
    notification_model_1.Notification,
];
//# sourceMappingURL=index.js.map