import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NotificationStack } from 'src/app/types/naviagtion-types/core/admin/notification/notification.type';
import { NotificationNavigationProps } from '../../notification.routing';
import { NotificationHomeRender } from './notification-home.render';
import { NotificationListComponent } from '../../components';

export type NotificationHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<NotificationStack, 'NotificationHome'>, NotificationNavigationProps>;
export type NotificationHomeRouteProps = RouteProp<NotificationStack, 'NotificationHome'>;
export interface INotificationHomeProps {
    navigation: NotificationHomeNavigationProps;
    route: NotificationHomeRouteProps;
}
export const NotificationHomeComponent = (props: INotificationHomeProps) => {
    const useTitle = () => "Thông báo";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "Admin";
    const useContent = () => {
        return <NotificationListComponent {...props} />
    }
    return <NotificationHomeRender useName={useName} {...props} useTitle={useTitle} useType={useType} useContent={useContent} />;
}