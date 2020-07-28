import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, List, Card, CardItem, Body, CheckBox } from "native-base";
import { IGroupUpdateMemberUserProps } from "./group-update-member-user.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./group-update-member-user.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

export interface IRenderGroupUpdateMemberUserProps extends IGroupUpdateMemberUserProps {
    search: { fullname: string };
    selected: string | undefined;
    openCreate: boolean;
    useSearch: (value: string) => void;
    useRemove: (user: UserVM) => void;
    useCreate: () => void;
    useSelect: (id: string | undefined) => void;
    useToggle: () => void;
    useFormatName: (name: string) => string;
}

export const RenderGroupUpdateMemberUserComponent = (props: IRenderGroupUpdateMemberUserProps) => (
    <View style={{ flex: 1 }}>
        <Item rounded style={{ paddingHorizontal: 10, marginBottom: 10 }}>
            <Icon active name='search' />
            <Input
                placeholder="Search"
                value={props.search.fullname}
                onChangeText={value => props.useSearch(value)}
            />
            <TouchableOpacity disabled={props.accounts.length === 0} onPress={() => props.useToggle()}>
                <Icon style={{ color: props.accounts.length === 0 ? 'grey' : (!props.openCreate ? 'green' : 'red') }} name={!props.openCreate ? "plus-square" : "times-circle"} type="FontAwesome5" />
            </TouchableOpacity>
        </Item>
        {props.openCreate &&
            <Card>
                <CardItem header>
                    <Text>Thêm thành viên vào nhóm</Text>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1 }}>
                        <List
                            key="User"
                            dataArray={props.accounts}
                            renderRow={(row: UserVM) => (
                                <TouchableOpacity style={[useStyles().rowFront, { marginTop: 10 }]} onPress={() => props.useSelect(row.Id)}>
                                    <View style={{ flexDirection: "row", height: 70, width: 200, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={useStyles().image} source={row.Avatar ? {uri: row.Avatar} : require("src/assets/none.jpg")} />
                                        <View style={{ flex: 1, marginLeft: 10 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon name="vimeo-square" type="FontAwesome5" />
                                                <Text> {props.useFormatName(row.FullName)}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon name="phone-square" type="FontAwesome5" />
                                                <Text> {row.Phone}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {props.selected === row.Id && <Icon style={{ color: 'green' }} name="check-circle" type="FontAwesome5" />}
                                </TouchableOpacity>
                            )}
                        />
                        <Item style={{ borderBottomWidth: 0, marginTop: 10 }}>
                            <Button disabled={!props.selected} onPress={() => props.useCreate()} bordered success style={{ justifyContent: "center", alignItems: "center", width: "100%", borderRadius: 20 }}><Text style={useStyles().button_text}>Thêm</Text></Button>
                        </Item>
                    </View>
                </CardItem>
            </Card>}
        <List
            key="User"
            dataArray={props.data}
            renderRow={(row: UserVM) => (
                <View style={[useStyles().rowFront, { marginTop: 10 }]}>
                    <TouchableOpacity >
                        <View style={{ flexDirection: "row", height: 70, width: 200, justifyContent: "center", alignItems: "center" }}>
                            <Image style={useStyles().image} source={row.Avatar ? {uri: row.Avatar} : require("src/assets/none.jpg")} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Icon name="vimeo-square" type="FontAwesome5" />
                                    <Text> {props.useFormatName(row.FullName)}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Icon name="phone-square" type="FontAwesome5" />
                                    <Text> {row.Phone}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={useStyles().icon} onPress={() => props.useRemove(row)}>
                        <Icon style={{ color: 'red' }} name="times-circle" type="FontAwesome5" />
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
);