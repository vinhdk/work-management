"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// extra-routers
const auth_router_1 = require("./extra-router/auth.router");
// basic-routers
const group_router_1 = require("./basic-router/group.router");
const role_router_1 = require("./basic-router/role.router");
const user_router_1 = require("./basic-router/user.router");
const work_router_1 = require("./basic-router/work.router");
exports.routers = [role_router_1.RoleAPI, group_router_1.GroupAPI, user_router_1.UserAPI, work_router_1.WorkAPI, auth_router_1.AuthAPI];
//# sourceMappingURL=wm-router.module.js.map