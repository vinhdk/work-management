import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { AccountModule } from './account/account.module';
import { GroupModule } from './group/group.module';
import { NotificationModule } from './notification/notification.module';
import { DrawerComponent } from 'src/app/share/components';
import { AdminStack } from 'src/app/types/naviagtion-types/core/admin/admin.type';
import { CoreStack } from 'src/app/types/naviagtion-types/core/core.type';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { CoreNavigationProps } from '../core.routing';
export type AdminNavigationProps = CompositeNavigationProp<StackNavigationProp<CoreStack, 'Admin'>, CoreNavigationProps>;
export type AdminRouteProps = RouteProp<CoreStack, 'Admin'>;
interface IAdminProps {
    navigation: AdminNavigationProps;
    route: AdminRouteProps;
}
export const AdminRoutes = (props: IAdminProps) => {
    const Drawer = createDrawerNavigator<AdminStack>();
    return (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={() => <DrawerComponent navigation={props.navigation} route={props.route} useName={() => "Admin"} />}>
            <Drawer.Screen name="Dashboard" component={DashboardModule.router} />
            <Drawer.Screen name="Profile" component={ProfileModule.router} />
            <Drawer.Screen name="Account" component={AccountModule.router} />
            <Drawer.Screen name="Group" component={GroupModule.router} />
            <Drawer.Screen name="Notification" component={NotificationModule.router} />
        </Drawer.Navigator>
    );
}