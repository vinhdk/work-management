import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardHomeComponent } from './screens';
import { DashboardStack } from 'src/app/types/naviagtion-types/core/manager/dashboard/dashboard.type';
import { ManagerStack } from 'src/app/types/naviagtion-types/core/manager/manager.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ManagerNavigationProps } from '../manager.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type DashboardNavigationProps = CompositeNavigationProp<DrawerNavigationProp<ManagerStack, 'Dashboard'>, ManagerNavigationProps>;
export type DashboardRouteProps = RouteProp<ManagerStack, 'Dashboard'>;
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
