import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileHomeComponent } from './screens';
import { ProfileStack } from 'src/app/types/naviagtion-types/core/manager/profile/profile.type';
import { ManagerStack } from 'src/app/types/naviagtion-types/core/manager/manager.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ManagerNavigationProps } from '../manager.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type ProfileNavigationProps = CompositeNavigationProp<DrawerNavigationProp<ManagerStack, 'Profile'>, ManagerNavigationProps>;
export type ProfileRouteProps = RouteProp<ManagerStack, 'Profile'>;
interface IProfileProps {
    navigation: ProfileNavigationProps;
    route: ProfileRouteProps;
}
export const ProfileRoutes = (props: IProfileProps) => {
    const Stack = createStackNavigator<ProfileStack>();
    return (
        <Stack.Navigator initialRouteName="ProfileHome" headerMode="none">
            <Stack.Screen name="ProfileHome" component={ProfileHomeComponent} />
        </Stack.Navigator>
    );
}
