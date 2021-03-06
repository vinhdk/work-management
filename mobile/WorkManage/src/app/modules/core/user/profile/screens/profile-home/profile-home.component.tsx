import React from 'react';
import { useStyles } from './profile-home.styles';
import { View, Icon, Text, Tabs, Tab, TabHeading } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStack } from 'src/app/types/naviagtion-types/core/manager/profile/profile.type';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { ProfileNavigationProps } from '../../profile.routing';
import { ProfileHomeRender } from './profile-home.render';
import { ProfileInformationComponent, ProfilePassWordComponent, ProfileQrCodeComponent } from '../../components';

export type ProfileHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<ProfileStack, 'ProfileHome'>, ProfileNavigationProps>;
export type ProfileHomeRouteProps = RouteProp<ProfileStack, 'ProfileHome'>;
export interface IProfileHomeProps {
    navigation: ProfileHomeNavigationProps;
    route: ProfileHomeRouteProps;
}
export const ProfileHomeComponent = (props: IProfileHomeProps) => {
    const useContent = () => {
        return (
            <Tabs>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="user-circle" type="FontAwesome5" /><Text style={{ color: "#00a8cc" }}>Thông tin</Text></TabHeading>}>
                    <View style={useStyles().form}>
                        <ProfileInformationComponent {...props} />
                    </View >
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="lock" type="FontAwesome5" /><Text style={{ color: "#00a8cc" }}>Mật khẩu</Text></TabHeading>}>
                    <View style={useStyles().form}>
                        <ProfilePassWordComponent {...props} />
                    </View >
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="qrcode" type="FontAwesome5" /><Text style={{ color: "#00a8cc" }}>QRCODE</Text></TabHeading>}>
                    <View style={useStyles().form}>
                        <ProfileQrCodeComponent {...props} />
                    </View >
                </Tab>
            </Tabs>
        );
    }
    const useTitle = () => "Hồ sơ";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "Manager";
    return <ProfileHomeRender useName={useName} useType={useType} {...props} useContent={useContent} useTitle={useTitle} />
}