import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { GroupStack } from 'src/app/types/naviagtion-types/core/admin/group/group.type';
import { GroupNavigationProps } from '../../group.routing';
import { GroupHomeRender } from './group-home.render';
import { GroupListComponent, GroupCreateComponent, GroupUpdateComponent } from '../../components';

export type GroupHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<GroupStack, 'GroupHome'>, GroupNavigationProps>;
export type GroupHomeRouteProps = RouteProp<GroupStack, 'GroupHome'>;
export interface IGroupHomeProps {
    navigation: GroupHomeNavigationProps;
    route: GroupHomeRouteProps;
}
export const GroupHomeComponent = (props: IGroupHomeProps) => {
    const useTitle = () => "Nhóm";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "Admin";
    const [type, setType] = useState<"list" | "create" | "update">("list")
    const [id, setId] = useState("");
    const useContent = () => {
        return type === "list" ?
            <GroupListComponent useClickCreate={() => setType("create")} useClickUpdate={(value) => { setType("update"); setId(value); }} {...props} /> :
            (type === "create" ?
                <GroupCreateComponent useBack={() => setType("list")} {...props} /> :
                <GroupUpdateComponent useBack={() => setType("list")} Id={id} {...props} />)
    }
    return <GroupHomeRender useName={useName} {...props} useTitle={useTitle} useType={useType} useContent={useContent} />;
}