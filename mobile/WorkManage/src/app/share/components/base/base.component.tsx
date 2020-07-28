import React from 'react';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { BaseRender } from './base.render';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/reducers';
import { View, Spinner } from 'native-base';
import { useStyles } from './base.styles';
export interface IBaseProps {
    navigation: CompositeNavigationProp<any, any>;
    route: RouteProp<any, string>;
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const BaseComponent = (props: IBaseProps) => {
    const status = useSelector((state: RootState) => (state.loading.status));
    const useLoading = () => {
        return status && <View
            style={useStyles().show}>
            {<Spinner color={"#20bf6b"} />}
        </View>
    }

    return <BaseRender {...props} useLoading={useLoading} />;
};