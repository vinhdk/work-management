import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileHomeComponent } from './screens';
import { ProfileStack } from 'src/app/types/naviagtion-types/core/admin/profile/profile.type';
import { AdminStack } from 'src/app/types/naviagtion-types/core/admin/admin.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AdminNavigationProps } from '../admin.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type ProfileNavigationProps = CompositeNavigationProp<DrawerNavigationProp<AdminStack, 'Profile'>, AdminNavigationProps>;
export type ProfileRouteProps = RouteProp<AdminStack, 'Profile'>;
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
