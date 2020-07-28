"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// extra-routers
const auth_router_1 = require("./extra-router/auth.router");
// basic-routers
const group_router_1 = require("./basic-router/group.router");
const role_router_1 = require("./basic-router/role.router");
const user_router_1 = require("./basic-router/user.router");
const work_router_1 = require("./basic-router/work.router");
const notification_router_1 = require("./basic-router/notification.router");
exports.ROUTERS = [auth_router_1.useAuthRouter, group_router_1.useGroupRouter, role_router_1.useRoleRouter, user_router_1.useUserRouter, work_router_1.useWorkRouter, notification_router_1.useNotificationRouter];
//# sourceMappingURL=index.js.map