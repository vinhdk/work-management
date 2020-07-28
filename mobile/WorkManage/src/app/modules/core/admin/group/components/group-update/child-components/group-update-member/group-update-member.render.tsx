import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, List, Card, CardItem, Body, CheckBox } from "native-base";
import { IGroupUpdateMemberProps } from "./group-update-member.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./group-update-member.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from 'react-native';
import { GroupUpdateMemberManagerComponent, GroupUpdateMemberUserComponent } from "./child-components";

export interface IRenderGroupUpdateMemberProps extends IGroupUpdateMemberProps {
    useGetData: (roleName: "Manager" | "User", type: "search" | "data") => Array<UserVM>;
    useChange: () => void;
}

export const RenderGroupUpdateMemberComponent = (props: IRenderGroupUpdateMemberProps) => (
    <ScrollView style={useStyles().container}>
        <Card>
            <CardItem header>
                <Text>Manager - Quản lý nhóm</Text>
            </CardItem>
            <CardItem>
                <GroupUpdateMemberManagerComponent {...props} data={props.useGetData("Manager", "data")} accounts={props.useGetData("Manager", "search")} useChange={() => props.useChange()} />
            </CardItem>
        </Card>
        <Card>
            <CardItem header>
                <Text>User - Thành viên trong nhóm</Text>
            </CardItem>
            <CardItem>
                <GroupUpdateMemberUserComponent {...props} data={props.useGetData("User", "data")} accounts={props.useGetData("User", "search")} useChange={() => props.useChange()} />
            </CardItem>
        </Card>

    </ScrollView >
);