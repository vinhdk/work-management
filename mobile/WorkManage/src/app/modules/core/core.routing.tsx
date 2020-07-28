import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ManagerModule } from './manager/manager.module';
import { CoreStack } from 'src/app/types/naviagtion-types/core/core.type';
import { RootStack } from 'src/app/types/naviagtion-types/root.type';
import { RouteProp } from '@react-navigation/native';
export type CoreNavigationProps = StackNavigationProp<RootStack, 'Core'>;
export type CoreRouteProps = RouteProp<RootStack, 'Core'>;
interface ICoreProps {
    navigation: CoreNavigationProps,
    route: CoreRouteProps;
}
export const CoreRoutes = (props: ICoreProps) => {
    const Stack = createStackNavigator<CoreStack>();
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Admin" component={AdminModule.router} />
            <Stack.Screen name="User" component={UserModule.router} />
            <Stack.Screen name="Manager" component={ManagerModule.router} />
        </Stack.Navigator>
    )
}