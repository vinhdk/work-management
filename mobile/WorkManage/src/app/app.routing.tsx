import React from 'react';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { CoreModule } from 'src/app/modules/core/core.module';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from 'src/app/types/naviagtion-types/root.type';

export const AppRoutes = () => {
    const Stack = createStackNavigator<RootStack>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth" headerMode="none">
                <Stack.Screen name="Auth" component={AuthModule.router} />
                <Stack.Screen name="Core" component={CoreModule.router} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}