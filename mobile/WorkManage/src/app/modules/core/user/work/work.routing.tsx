import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkHomeComponent } from './screens';
import { WorkStack } from 'src/app/types/naviagtion-types/core/user/work/work.type';
import { UserStack } from 'src/app/types/naviagtion-types/core/user/user.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { UserNavigationProps } from '../user.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type WorkNavigationProps = CompositeNavigationProp<DrawerNavigationProp<UserStack, 'Work'>, UserNavigationProps>;
export type WorkRouteProps = RouteProp<UserStack, 'Work'>;
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
