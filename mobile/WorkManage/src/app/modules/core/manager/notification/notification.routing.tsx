import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationHomeComponent } from './screens';
import { NotificationStack } from '../../../../types/naviagtion-types/core/manager/notification/notification.type';
import { ManagerStack } from '../../../../types/naviagtion-types/core/manager/manager.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ManagerNavigationProps } from '../manager.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type NotificationNavigationProps = CompositeNavigationProp<DrawerNavigationProp<ManagerStack, 'Notification'>, ManagerNavigationProps>;
export type NotificationRouteProps = RouteProp<ManagerStack, 'Notification'>;
interface INotificationProps {
    navigation: NotificationNavigationProps;
    route: NotificationRouteProps;
}
export const NotificationRoutes = (props: INotificationProps) => {
    const Stack = createStackNavigator<NotificationStack>();
    return (
        <Stack.Navigator initialRouteName="NotificationHome" headerMode="none">
            <Stack.Screen name="NotificationHome" component={NotificationHomeComponent} />
        </Stack.Navigator>
    );
}
