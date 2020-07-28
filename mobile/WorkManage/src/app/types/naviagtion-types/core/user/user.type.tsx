import { ProfileStack } from './profile/profile.type';
import { DashboardStack } from './dashboard/dashboard.type';
import { NotificationStack } from './notification/notification.type';
import { GroupStack } from './group/group.type';
import { WorkStack } from './work/work.type';
export type UserStack = {
    "Profile": ProfileStack;
    "Dashboard": DashboardStack;
    "Notification": NotificationStack;
    "Group": GroupStack;
    "Work": WorkStack;
}