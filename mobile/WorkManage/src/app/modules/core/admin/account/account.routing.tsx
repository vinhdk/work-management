import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountHomeComponent } from './screens';
import { AccountStack } from 'src/app/types/naviagtion-types/core/admin/account/account.type';
import { AdminStack } from 'src/app/types/naviagtion-types/core/admin/admin.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AdminNavigationProps } from '../admin.routing';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export type AccountNavigationProps = CompositeNavigationProp<DrawerNavigationProp<AdminStack, 'Account'>, AdminNavigationProps>;
export type AccountRouteProps = RouteProp<AdminStack, 'Account'>;
interface IAccountProps {
    navigation: AccountNavigationProps;
    route: AccountRouteProps;
}
export const AccountRoutes = (props: IAccountProps) => {
    const Stack = createStackNavigator<AccountStack>();
    return (
        <Stack.Navigator initialRouteName="AccountHome" headerMode="none">
            <Stack.Screen name="AccountHome" component={AccountHomeComponent} />
        </Stack.Navigator>
    );
}
