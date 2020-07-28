import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, List, Card, CardItem, Body, CheckBox } from "native-base";
import { useStyles } from "./group-member.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IGroupMemberProps } from "./group-member.component";
import { UserVM } from "src/app/view-models";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Image } from 'react-native';
export interface IRenderGroupMemberProps extends IGroupMemberProps {
    search: { fullname: string };
    useSearch: (value: string) => void;
    openQr: boolean;
    openDetail: boolean;
    useTogglenQr: (value: boolean) => void;
    useOpenDetail: (value: boolean) => void;
    useRead: (e: any) => void;
    account: UserVM;
}

export const RenderGroupMemberComponent = (props: IRenderGroupMemberProps) => (
    <View style={{ flex: 1 }}>
        {!props.openDetail && <View style={{ flex: 1 }}>
            {!props.openQr && <View style={{ flex: 1 }}>
                <Item regular style={{ paddingHorizontal: 10 }}>
                    <Icon active name='search' />
                    <Input
                        placeholder="Search"
                        value={props.search.fullname}
                        onChangeText={value => props.useSearch(value)}
                    />
                    <TouchableOpacity onPress={() => props.useTogglenQr(true)}>
                        <Icon name="qrcode" type="FontAwesome5" />
                    </TouchableOpacity>
                </Item>
                <List
                    style={{ marginTop: 15 }}
                    key="User"
                    dataArray={props.accounts.filter((e) => e.FullName.includes(props.search.fullname))}
                    renderRow={(row: UserVM) => (
                        <View style={[useStyles().rowFront]}>
                            <Image style={useStyles().image} source={row.Avatar ? {uri: row.Avatar} : require("src/assets/none.jpg")} />
                            <View style={{ flex: 1, marginLeft: 20 }}>
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
                    )}
                />
            </View>}
            {props.openQr && <View style={{ flex: 1 }}>
                <View style={{ width: "100%", height: "90%" }}>
                    <QRCodeScanner
                        onRead={props.useRead} />
                </View>
                <View style={{ width: "100%", height: "10%", paddingHorizontal: 10 }}>
                    <Button onPress={() => props.useTogglenQr(false)} danger rounded style={{ justifyContent: "center", alignItems: "center" }}><Text>Đóng</Text></Button>
                </View>
            </View>}
        </View>}
        {props.openDetail && <View style={{ flex: 1,  justifyContent: "center", alignItems: 'center' }}>
            <View style={{ justifyContent: "center", alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 30 }}>Thông tin thành viên</Text>
            </View>
            <Item
                style={{ ...useStyles().input, borderBottomWidth: 0, justifyContent: 'center' }}>
                <Image style={{width: 100, height: 100,  borderRadius: 50}} source={props.account.Avatar ? {uri: props.account.Avatar} : require("src/assets/none.jpg")} />
            </Item>
            <Item regular
                style={{ ...useStyles().input}}>
                <Icon type="FontAwesome5" name="user" />
                <Input placeholder="Tên tài khoản" value={props.account.UserName} />
            </Item>
            <Item regular
                style={{ ...useStyles().input}}>
                <Icon type="FontAwesome5" name="signature" />
                <Input placeholder="Họ và tên" value={props.account.FullName} />
            </Item>
            <Item regular
                style={{ ...useStyles().input}}>
                <Icon type="FontAwesome5" name="envelope" />
                <Input placeholder="Thư điện tử" value={props.account.Email} />
            </Item>
            <Item regular
                style={{ ...useStyles().input}}>
                <Icon type="FontAwesome5" name="phone-volume" />
                <Input placeholder="Số điện thoại" value={props.account.Phone} />
            </Item>
            <View style={{ width: "80%" }}>
                <Button onPress={() => props.useOpenDetail(false)} bordered danger rounded style={{ justifyContent: "center", alignItems: 'center' }}>
                    <Text>Đóng</Text>
                </Button>
            </View>
        </View>}
    </View>
);