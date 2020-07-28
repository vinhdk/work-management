import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkHomeComponent } from './screens';
import { WorkStack } from 'src/app/types/naviagtion-types/core/manager/work/work.type';
import { ManagerStack } from 'src/app/types/naviagtion-types/core/manager/manager.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ManagerNavigationProps } from '../manager.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type WorkNavigationProps = CompositeNavigationProp<DrawerNavigationProp<ManagerStack, 'Work'>, ManagerNavigationProps>;
export type WorkRouteProps = RouteProp<ManagerStack, 'Work'>;
interface IWorkProps {
    navigation: WorkNavigationProps;
    route: WorkRouteProps;
}
export const WorkRoutes = (props: IWorkProps) => {
    const Stack = createStackNavigator<WorkStack>();
    return (
        <Stack.Navigator initialRouteName="WorkHome" headerMode="none">
            <Stack.Screen name="WorkHome" component={WorkHomeComponent} />
        </Stack.Navigator>
    );
}
