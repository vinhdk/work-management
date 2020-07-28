import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { GroupStack } from 'src/app/types/naviagtion-types/core/admin/group/group.type';
import { GroupNavigationProps } from '../../group.routing';
import { GroupHomeRender } from './group-home.render';
import { GroupInformationComponent, GroupMemberComponent, GroupWorkComponent } from '../../components';
import { TabHeading, Tabs, Tab, Icon, View } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/app/reducers';
import { useUserAction, useGroupAction, useWorkAction } from 'src/app/actions';

export type GroupHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<GroupStack, 'GroupHome'>, GroupNavigationProps>;
export type GroupHomeRouteProps = RouteProp<GroupStack, 'GroupHome'>;
export interface IGroupHomeProps {
    navigation: GroupHomeNavigationProps;
    route: GroupHomeRouteProps;
}
export const GroupHomeComponent = (props: IGroupHomeProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.profile);
    const group = useSelector((state: RootState) => state.group.array, (left, right) => {
        return false;
    }).find((e) => e.Id === profile.GroupId);
    const accounts = useSelector((state: RootState) => state.user.array, (left, right) => {
        return false;
    }).filter((e) => e.Id !== profile.Id && e.GroupId === (group || { Id: "" } as any).Id);
    const [change, setChange] = useState(new Date());
    const useTitle = () => "Nhóm";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "Manager";
    const useContent = () => {
        return <View style={{ flex: 1 }}>
            <Tabs>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="info-circle" type="FontAwesome5" /></TabHeading>}>
                    <GroupInformationComponent group={group || { Name: "" } as any} {...props} />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="users" type="FontAwesome5" /></TabHeading>}>
                    <GroupMemberComponent group={group || { Name: "" } as any} accounts={accounts} {...props} />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="briefcase" type="FontAwesome5" /></TabHeading>}>
                    <GroupWorkComponent useLoad={() => setChange(new Date())} group={group || { Name: "" } as any} accounts={accounts} {...props} />
                </Tab>
            </Tabs>
        </View>
    }
    useEffect(() => {
        dispatch(useUserAction().getAll());
        dispatch(useGroupAction().getAll());
        dispatch(useWorkAction().getAll());
    }, [change]);
    return <GroupHomeRender useName={useName} {...props} useTitle={useTitle} useType={useType} useContent={useContent} />;
}