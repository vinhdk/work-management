import React, { useEffect } from 'react';
import { View, Text } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { DashboardStack } from 'src/app/types/naviagtion-types/core/manager/dashboard/dashboard.type';
import { DashboardNavigationProps } from '../../dashboard.routing';
import { DashboardHomeRender } from './dashboard-home.render';

export type DashboardHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<DashboardStack, 'DashboardHome'>, DashboardNavigationProps>;
export type DashboardHomeRouteProps = RouteProp<DashboardStack, 'DashboardHome'>;
export interface IDashboardHomeProps {
    navigation: DashboardHomeNavigationProps;
    route: DashboardHomeRouteProps;
}
export const DashboardHomeComponent = (props: IDashboardHomeProps) => {
    const useContent = () => {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Welcome
                </Text>
            </View>
        );
    }
    const useTitle = () => "Trang chủ";
    const useType = () => "main"
    const useName: () => "Admin" | "User" | "Manager" = () => "Manager";
    return <DashboardHomeRender useName={useName} useType={useType} {...props} useContent={useContent} useTitle={useTitle} />;
}