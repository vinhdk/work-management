import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { NotificationModule } from './notification/notification.module';
import { GroupModule } from './group/group.module';
import { WorkModule } from './work/work.module';
import { DrawerComponent } from 'src/app/share/components';
import { ManagerStack } from 'src/app/types/naviagtion-types/core/manager/manager.type';
import { CoreStack } from 'src/app/types/naviagtion-types/core/core.type';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { CoreNavigationProps } from '../core.routing';
export type ManagerNavigationProps = CompositeNavigationProp<StackNavigationProp<CoreStack, 'Manager'>, CoreNavigationProps>;
export type ManagerRouteProps = RouteProp<CoreStack, 'Manager'>;
interface IManagerProps {
    navigation: ManagerNavigationProps;
    route: ManagerRouteProps;
}
export const ManagerRoutes = (props: IManagerProps) => {
    const Drawer = createDrawerNavigator<ManagerStack>();
    return (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={prop => <DrawerComponent navigation={props.navigation} route={props.route} useName={() => "Manager"} />}>
            <Drawer.Screen name="Dashboard" component={DashboardModule.router} />
            <Drawer.Screen name="Profile" component={ProfileModule.router} />
            <Drawer.Screen name="Notification" component={NotificationModule.router} />
            <Drawer.Screen name="Group" component={GroupModule.router} />
            <Drawer.Screen name="Work" component={WorkModule.router} />
        </Drawer.Navigator>
    );
}