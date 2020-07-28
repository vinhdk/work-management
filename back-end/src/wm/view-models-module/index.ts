// extra view-models
import { AuthSwagger, LoginGM, ProfileUM, ProfileVM } from "./extra-view-models/auth.view-model";

// basic view-models
import { GroupCM, GroupSwagger, GroupUM, GroupVM } from "./basic-view-models/group.view-model";
import { RoleCM, RoleSwagger, RoleUM, RoleVM } from "./basic-view-models/role.view-model";
import { DeviceCM, DeviceVM, DeviceUM } from "./basic-view-models/device.view-model";
import { UserCM, UserSwagger, UserUM, UserVM } from "./basic-view-models/user.view-model";
import { WorkCM, WorkSwagger, WorkUM, WorkVM } from "./basic-view-models/work.view-model";
import { NotificationSwagger, NotificationCM, NotificationUM, NotificationVM } from "./basic-view-models/notification.view-model";

// extra view-models
export * from "./extra-view-models/auth.view-model";

// basic view-models
export * from "./basic-view-models/group.view-model";
export * from "./basic-view-models/role.view-model";
export * from "./basic-view-models/user.view-model";
export * from "./basic-view-models/work.view-model";
export * from "./basic-view-models/device.view-model";
export * from "./basic-view-models/notification.view-model";

export const VIEWMODELS = [
    RoleCM, RoleUM, RoleVM,
    GroupCM, GroupUM, GroupVM,
    UserCM, UserUM, UserVM,
    WorkCM, WorkUM, WorkVM,
    LoginGM, ProfileUM, ProfileVM,
    DeviceCM, DeviceVM, DeviceUM,
    NotificationCM, NotificationUM, NotificationVM,
];
export const SWAGGERS = [
    AuthSwagger,
    RoleSwagger,
    GroupSwagger,
    UserSwagger,
    WorkSwagger,
    NotificationSwagger,
];
