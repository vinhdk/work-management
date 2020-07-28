import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardHomeComponent } from './screens';
import { DashboardStack } from 'src/app/types/naviagtion-types/core/user/dashboard/dashboard.type';
import { UserStack } from 'src/app/types/naviagtion-types/core/user/user.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { UserNavigationProps } from '../user.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type DashboardNavigationProps = CompositeNavigationProp<DrawerNavigationProp<UserStack, 'Dashboard'>, UserNavigationProps>;
export type DashboardRouteProps = RouteProp<UserStack, 'Dashboard'>;
interface IDashboardProps {
    navigation: DashboardNavigationProps;
    route: DashboardRouteProps;
}
export const DashboardRoutes = (props: IDashboardProps) => {
    const Stack = createStackNavigator<DashboardStack>();
    return (
        <Stack.Navigator initialRouteName="DashboardHome" headerMode="none">
            <Stack.Screen name="DashboardHome" component={DashboardHomeComponent} />
        </Stack.Navigator>
    );
}
