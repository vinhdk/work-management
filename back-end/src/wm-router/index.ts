// extra-routers
import { useAuthRouter } from "./extra-router/auth.router";

// basic-routers
import { useGroupRouter } from "./basic-router/group.router";
import { useRoleRouter } from "./basic-router/role.router";
import { useUserRouter } from "./basic-router/user.router";
import { useWorkRouter } from "./basic-router/work.router";
import { useNotificationRouter } from "./basic-router/notification.router";
export const ROUTERS = [useAuthRouter, useGroupRouter, useRoleRouter, useUserRouter, useWorkRouter, useNotificationRouter];
