import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { NotificationModule } from './notification/notification.module';
import { WorkModule } from './work/work.module';
import { DrawerComponent } from 'src/app/share/components';
import { UserStack } from 'src/app/types/naviagtion-types/core/user/user.type';
import { CoreStack } from 'src/app/types/naviagtion-types/core/core.type';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { CoreNavigationProps } from '../core.routing';
export type UserNavigationProps = CompositeNavigationProp<StackNavigationProp<CoreStack, 'User'>, CoreNavigationProps>;
export type UserRouteProps = RouteProp<CoreStack, 'User'>;
interface IUserProps {
    navigation: UserNavigationProps;
    route: UserRouteProps;
}
export const UserRoutes = (props: IUserProps) => {
    const Drawer = createDrawerNavigator<UserStack>();
    return (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={prop => <DrawerComponent navigation={props.navigation} route={props.route} useName={() => "User"} />}>
            <Drawer.Screen name="Dashboard" component={DashboardModule.router} />
            <Drawer.Screen name="Profile" component={ProfileModule.router} />
            <Drawer.Screen name="Notification" component={NotificationModule.router} />
            <Drawer.Screen name="Work" component={WorkModule.router} />
        </Drawer.Navigator>
    );
}