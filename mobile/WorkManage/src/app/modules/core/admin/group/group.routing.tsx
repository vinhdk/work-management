import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GroupHomeComponent } from './screens';
import { GroupStack } from 'src/app/types/naviagtion-types/core/admin/group/group.type';
import { AdminStack } from 'src/app/types/naviagtion-types/core/admin/admin.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AdminNavigationProps } from '../admin.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type GroupNavigationProps = CompositeNavigationProp<DrawerNavigationProp<AdminStack, 'Group'>, AdminNavigationProps>;
export type GroupRouteProps = RouteProp<AdminStack, 'Group'>;
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
