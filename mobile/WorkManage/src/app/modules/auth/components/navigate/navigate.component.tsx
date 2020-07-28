import React, { useEffect } from 'react';
import { useAuthService, useNavigateService, useGlobalService } from 'src/app/services';
import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStack } from 'src/app/types/naviagtion-types/auth/auth.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AuthNavigationProps } from '../../auth.routing';
import { NavigateRender } from './navigate.render';
export type NavigateNavigationProps = CompositeNavigationProp<StackNavigationProp<AuthStack, 'Navigate'>, AuthNavigationProps>;
export type NavigateRouteProps = RouteProp<AuthStack, 'Navigate'>;
export interface INavigateProps {
    navigation: NavigateNavigationProps;
    route: NavigateRouteProps;
}
export const NavigateComponent = (props: INavigateProps) => {
    useEffect(() => {
        useAuthService().useCheckToken().then(res => {
            AsyncStorage.getItem("wm-role").then(res => {
                const role = res ? JSON.parse(res) : null;
                if (role) {
                    useNavigateService().useOpen(props.navigation, "Core", role, {});
                } else {
                    useGlobalService().useGoToLogin(props.navigation);
                }

            });
        }).catch(err => {
            useGlobalService().useGoToLogin(props.navigation);
        });
    });
    return <NavigateRender {...props} />;
}