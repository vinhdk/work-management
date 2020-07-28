// basic models
import { Device } from "./basic-models/device.model";
import { Group } from "./basic-models/group.model";
import { Role } from "./basic-models/role.model";
import { User } from "./basic-models/user.model";
import { Work } from "./basic-models/work.model";
import { Notification } from "./basic-models/notification.model";

// basic models
export * from "./basic-models/device.model";
export * from "./basic-models/group.model";
export * from "./basic-models/role.model";
export * from "./basic-models/user.model";
export * from "./basic-models/work.model";
export * from "./basic-models/notification.model";

export const MODELS = [
    User,
    Work,
    Device,
    Role,
    Group,
    Notification,
];
