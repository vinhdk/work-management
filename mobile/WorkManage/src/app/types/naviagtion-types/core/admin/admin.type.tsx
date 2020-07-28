import { ProfileStack } from './profile/profile.type';
import { DashboardStack } from './dashboard/dashboard.type';
import { AccountStack } from './account/account.type';
import { GroupStack } from './group/group.type';
import { NotificationStack } from './notification/notification.type';
export type AdminStack = {
    "Profile": ProfileStack;
    "Dashboard": DashboardStack;
    "Account": AccountStack;
    "Group": GroupStack;
    "Notification": NotificationStack;
}