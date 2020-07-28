import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardHomeComponent } from './screens';
import { DashboardStack } from '../../../../types/naviagtion-types/core/admin/dashboard/dashboard.type';
import { AdminStack } from '../../../../types/naviagtion-types/core/admin/admin.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AdminNavigationProps } from '../admin.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type DashboardNavigationProps = CompositeNavigationProp<DrawerNavigationProp<AdminStack, 'Dashboard'>, AdminNavigationProps>;
export type DashboardRouteProps = RouteProp<AdminStack, 'Dashboard'>;
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
