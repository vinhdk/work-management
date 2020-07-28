import React, { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';
import { useAuthService, useGlobalService, useFormService, IFormControl, IFormValidation } from 'src/app/services';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStack } from 'src/app/types/naviagtion-types/auth/auth.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AuthNavigationProps } from '../../auth.routing';
import { LoginRender } from './login.render';
import { Alert } from 'react-native';
export type LoginNavigationProps = CompositeNavigationProp<StackNavigationProp<AuthStack, 'Login'>, AuthNavigationProps>;
export type LoginRouteProps = RouteProp<AuthStack, 'Login'>;
export interface ILoginProps {
    navigation: LoginNavigationProps;
    route: LoginRouteProps;
}
export const LoginComponent = (props: ILoginProps) => {
    const initialForm: IFormControl = {
        "UserName": {
            value: "",
            valid: false,
            fire: false,
        },
        "PassWord": {
            value: "",
            valid: false,
            fire: false,
        },
        "FirebaseToken": {
            value: "",
            valid: false,
            fire: false,
        }
    }
    const validation: IFormValidation = {
        "UserName": {
            required: true
        },
        "PassWord": {
            required: true
        },
        "FirebaseToken": {
            required: true
        }
    }
    const useLogin = (data: any) => {
        useAuthService().useLogin(data)
            .then((res) => {
                useGlobalService().useSetToken(data.UserName, res.data, props.navigation);
            })
            .catch((err) => { Alert.alert('Có lỗi xảy ra', err.response.data.message) });
    };
    const { useHandleOnChange, useHandleOnSubmit, useCheckValid, useGetFormControl } = useFormService(initialForm, validation, useLogin);
    useEffect(() => {
        firebase.messaging().hasPermission().then(async (enabled) => {
            if (enabled) {
                const fcmToken = await firebase.messaging().getToken();
                useHandleOnChange({ name: "FirebaseToken", value: fcmToken });
            } else {
                firebase.messaging().requestPermission()
                    .then(() => {
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    }, []);

    return <LoginRender {...props} useHandleOnSubmit={useHandleOnSubmit} useHandleOnChange={useHandleOnChange} useCheckValid={useCheckValid} useGetFormControl={useGetFormControl} />
}