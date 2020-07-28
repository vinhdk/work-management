import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileHomeComponent } from './screens';
import { ProfileStack } from 'src/app/types/naviagtion-types/core/user/profile/profile.type';
import { UserStack } from 'src/app/types/naviagtion-types/core/user/user.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { UserNavigationProps } from '../user.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type ProfileNavigationProps = CompositeNavigationProp<DrawerNavigationProp<UserStack, 'Profile'>, UserNavigationProps>;
export type ProfileRouteProps = RouteProp<UserStack, 'Profile'>;
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
