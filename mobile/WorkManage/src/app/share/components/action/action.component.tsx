import React from 'react';
import { useNavigateService } from 'src/app/services';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ActionRender } from './action.render';

export interface IActionProps {
    navigation: CompositeNavigationProp<any, any>;
    route: RouteProp<any, string>;
    useType: () => string;
}
export const ActionComponent = (props: IActionProps) => {

    const useToggle = () => {
        if (props.useType() === 'main') {
            props.navigation.toggleDrawer();
        } else {
            useNavigateService().useOpen(props.navigation, props.route.key, props.route.name, {});
        }
    }
    return <ActionRender {...props} useToggle={useToggle} />;
}