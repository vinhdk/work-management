"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic models
const device_model_1 = require("./basic-models/device.model");
const group_model_1 = require("./basic-models/group.model");
const role_model_1 = require("./basic-models/role.model");
const user_model_1 = require("./basic-models/user.model");
const work_model_1 = require("./basic-models/work.model");
// basic models
var device_model_2 = require("./basic-models/device.model");
exports.Device = device_model_2.Device;
var group_model_2 = require("./basic-models/group.model");
exports.Group = group_model_2.Group;
var role_model_2 = require("./basic-models/role.model");
exports.Role = role_model_2.Role;
var user_model_2 = require("./basic-models/user.model");
exports.User = user_model_2.User;
var work_model_2 = require("./basic-models/work.model");
exports.Work = work_model_2.Work;
exports.models = [
    user_model_1.User,
    work_model_1.Work,
    device_model_1.Device,
    role_model_1.Role,
    group_model_1.Group,
];
//# sourceMappingURL=wm-model.module.js.map