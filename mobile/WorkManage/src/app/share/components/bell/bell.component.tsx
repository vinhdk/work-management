import React, { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BellRender } from './bell.render';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/reducers';
import { useAuthAction, useWorkAction } from 'src/app/actions';
import { useNavigateService } from 'src/app/services';
import AsyncStorage from '@react-native-community/async-storage';

export interface IBellProps {
    navigation: CompositeNavigationProp<any, any>;
    route: RouteProp<any, string>;
    useName: () => "Admin" | "User" | "Manager";
}
export interface IBellState {

}
export const BellComponent = (props: IBellProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => (state.auth.profile));
    const notifications = (profile.Notifications || []).filter(e => e.IsSeen === false);
    const useToggle = () => {
        useNavigateService().useOpen(props.navigation, props.useName(), "Notification", {});
    }

    useEffect(() => {
        firebase.notifications().onNotification(async (notification) => {
            if (notification.data.Userid === profile.Id) {
                dispatch(useAuthAction().getToken());
                dispatch(useWorkAction().getToken());
            }
        });
    }, [])
    return <BellRender {...props} useToggle={useToggle} notifications={notifications} />;
}