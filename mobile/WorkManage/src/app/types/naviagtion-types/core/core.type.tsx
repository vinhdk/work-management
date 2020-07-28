import { AdminStack } from "./admin/admin.type";
import { UserStack } from "./user/user.type";
import { ManagerStack } from "./manager/manager.type";

export type CoreStack = {
    "Admin": AdminStack;
    "User": UserStack;
    "Manager": ManagerStack;
}