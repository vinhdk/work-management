import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { LoginComponent, NavigateComponent } from './components';
import { AuthStack } from 'src/app/types/naviagtion-types/auth/auth.type';
import { RootStack } from 'src/app/types/naviagtion-types/root.type';
import { RouteProp } from '@react-navigation/native';
export type AuthNavigationProps = StackNavigationProp<RootStack, 'Auth'>;
export type AuthRouteProps = RouteProp<RootStack, 'Auth'>;
interface IAuthProps {
    navigation: AuthNavigationProps;
    route: AuthRouteProps;
}
export const AuthRoutes = (props: IAuthProps) => {
    const Stack = createStackNavigator<AuthStack>();
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Navigate">
            <Stack.Screen name="Login" component={LoginComponent} />
            <Stack.Screen name="Navigate" component={NavigateComponent} />
        </Stack.Navigator>
    )
}
