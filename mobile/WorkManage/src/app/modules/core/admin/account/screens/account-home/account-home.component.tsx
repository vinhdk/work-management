import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AccountStack } from 'src/app/types/naviagtion-types/core/admin/account/account.type';
import { AccountNavigationProps } from '../../account.routing';
import { AccountHomeRender } from './account-home.render';
import { AccountListComponent, AccountCreateComponent, AccountUpdateComponent } from '../../components';

export type AccountHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<AccountStack, 'AccountHome'>, AccountNavigationProps>;
export type AccountHomeRouteProps = RouteProp<AccountStack, 'AccountHome'>;
export interface IAccountHomeProps {
    navigation: AccountHomeNavigationProps;
    route: AccountHomeRouteProps;
}
export const AccountHomeComponent = (props: IAccountHomeProps) => {
    const useTitle = () => "Nhân sự";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "Admin";
    const [type, setType] = useState<"list" | "create" | "update">("list");
    const [id, setId] = useState("");

    const useContent = () => {
        return type === "list" ?
            <AccountListComponent useClickCreate={() => setType("create")} useClickUpdate={(value) => { setType("update"); setId(value); }} {...props} /> :
            (type === "create" ?
                <AccountCreateComponent useBack={() => { setType("list") }} {...props} /> :
                <AccountUpdateComponent Id={id} useBack={() => { setType("list") }} {...props} {...props} />)
    }
    return <AccountHomeRender useName={useName} {...props} useTitle={useTitle} useType={useType} useContent={useContent} />;
}