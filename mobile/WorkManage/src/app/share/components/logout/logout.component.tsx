import React from 'react';
import { useGlobalService } from 'src/app/services';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { LogoutRender } from './logout.render';
import { useDispatch } from 'react-redux';
import { useAuthAction, useGroupAction, useLoadingAction, useNotificationAction, useRoleAction, useUserAction, useWorkAction } from 'src/app/actions';

export interface ILogoutProps {
    navigation: CompositeNavigationProp<any, any>;
    route: RouteProp<any, string>;
}
export interface ILogoutState {

}
export const LogoutComponent = (props: ILogoutProps) => {
    const dispatch = useDispatch();
    const useLogout = () => {
        useGlobalService().useClearToken(props.navigation);
        dispatch(useAuthAction().reset());
        dispatch(useGroupAction().reset());
        dispatch(useLoadingAction().hideLoader());
        dispatch(useNotificationAction().reset());
        dispatch(useRoleAction().reset());
        dispatch(useUserAction().reset());
        dispatch(useWorkAction().reset());
    }
    return <LogoutRender {...props} useLogout={useLogout} />;
}