import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationHomeComponent } from './screens';
import { NotificationStack } from 'src/app/types/naviagtion-types/core/admin/notification/notification.type';
import { AdminStack } from 'src/app/types/naviagtion-types/core/admin/admin.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AdminNavigationProps } from '../admin.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type NotificationNavigationProps = CompositeNavigationProp<DrawerNavigationProp<AdminStack, 'Notification'>, AdminNavigationProps>;
export type NotificationRouteProps = RouteProp<AdminStack, 'Notification'>;
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
