import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GroupHomeComponent } from './screens';
import { GroupStack } from 'src/app/types/naviagtion-types/core/manager/group/group.type';
import { ManagerStack } from 'src/app/types/naviagtion-types/core/manager/manager.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ManagerNavigationProps } from '../manager.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type GroupNavigationProps = CompositeNavigationProp<DrawerNavigationProp<ManagerStack, 'Group'>, ManagerNavigationProps>;
export type GroupRouteProps = RouteProp<ManagerStack, 'Group'>;
interface IGroupProps {
    navigation: GroupNavigationProps;
    route: GroupRouteProps;
}
export const GroupRoutes = (props: IGroupProps) => {
    const Stack = createStackNavigator<GroupStack>();
    return (
        <Stack.Navigator initialRouteName="GroupHome" headerMode="none">
            <Stack.Screen name="GroupHome" component={GroupHomeComponent} />
        </Stack.Navigator>
    );
}
