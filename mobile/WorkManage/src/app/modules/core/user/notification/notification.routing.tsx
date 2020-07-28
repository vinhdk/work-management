import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationHomeComponent } from './screens';
import { NotificationStack } from '../../../../types/naviagtion-types/core/user/notification/notification.type';
import { UserStack } from '../../../../types/naviagtion-types/core/user/user.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { UserNavigationProps } from '../user.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type NotificationNavigationProps = CompositeNavigationProp<DrawerNavigationProp<UserStack, 'Notification'>, UserNavigationProps>;
export type NotificationRouteProps = RouteProp<UserStack, 'Notification'>;
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
