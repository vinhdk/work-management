import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, List, Card, CardItem, Body, CheckBox } from "native-base";
import { IGroupUpdateMemberManagerProps } from "./group-update-member-manager.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./group-update-member-manager.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView, Image } from 'react-native';

export interface IRenderGroupUpdateMemberManagerProps extends IGroupUpdateMemberManagerProps {
    search: { fullname: string };
    selected: string | undefined;
    useSearch: (value: string) => void;
    useRemove: (user: UserVM) => void;
    useCreate: () => void;
    useSelect: (id: string | undefined) => void;
    useFormatName: (name: string) => string;
}

export const RenderGroupUpdateMemberManagerComponent = (props: IRenderGroupUpdateMemberManagerProps) => (
    <View style={{ flex: 1 }}>
        <List
            key="Manager"
            dataArray={props.data}
            renderRow={(row: UserVM) => (
                <View style={[useStyles().rowFront]}>
                    <TouchableOpacity>
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
        {(props.data.length === 0 && props.accounts.length > 0) &&
            <Card>
                <CardItem header>
                    <Text>Chọn Manager</Text>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1 }}>
                        <List
                            key="Manager"
                            dataArray={props.accounts}
                            renderRow={(row: UserVM) => (
                                <TouchableOpacity style={[useStyles().rowFront, { marginTop: 10 }]} onPress={() => props.useSelect(row.Id)}>
                                    <View style={{ flexDirection: "row", height: 70, width: 200, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={useStyles().image} source={row.Avatar ? {uri: row.Avatar} : require("src/assets/none.jpg")} />
                                        <View style={{ flex: 1, marginLeft: 10 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon name="vimeo-square" type="FontAwesome5" />
                                                <Text> {row.FullName}</Text>
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
            </Card>
        }
        {(props.data.length === 0 && props.accounts.length === 0) && <View style={{ justifyContent: "center", alignItems: "center" }}><Text>Không có Quản lý rảnh</Text></View>}
    </View>
);