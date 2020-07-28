import React from "react";
import { IAccountListProps } from "./account-list.component";
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStyles } from "./account-list.styles";
import { RoleVM, UserVM } from "src/app/view-models";
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { Image } from "react-native";

interface IRenderAccountListProps extends IAccountListProps {
    extra: { roles: Array<RoleVM> };
    search: { fullname: string, roleId: string };
    useFilter: () => Array<UserVM>;
    useSearch: (value: string, key: string) => void;
    useRemove: (id: string) => void;
}
export const AccountListRender = (props: IRenderAccountListProps) => (
    <View style={useStyles().container}>
        <Item regular style={{ paddingHorizontal: 10 }}>
            <Icon active name='search' />
            <Input
                placeholder="Search"
                value={props.search.fullname}
                onChangeText={value => props.useSearch(value, "fullname")}
            />
            <Picker
                mode="dropdown"
                style={{ marginHorizontal: 30 }}
                selectedValue={props.search.roleId}
                onValueChange={value => {
                    props.useSearch(value, "roleId")
                }}
            >
                <Picker.Item label="Tất cả" value="" />
                {
                    props.extra.roles.map(role => {
                        return (
                            <Picker.Item key={role.Id} label={role.Name} value={role.Id} />
                        )
                    })
                }
            </Picker>
            <TouchableOpacity onPress={() => props.useClickCreate()}>
                <Icon style={{ color: 'green' }} name="plus-square" type="FontAwesome5" />
            </TouchableOpacity>
        </Item>
        <SwipeListView
            style={useStyles().list}
            data={props.useFilter()}
            renderItem={(data, rowMap) => (
                <View style={useStyles().rowFront}>
                    <Image style={useStyles().image} source={data.item.Avatar ? {uri: data.item.Avatar} : require("src/assets/none.jpg")} />
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="vimeo-square" type="FontAwesome5" />
                            <Text> {data.item.FullName}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="phone-square" type="FontAwesome5" />
                            <Text> {data.item.Phone}</Text>
                        </View>
                    </View>
                </View>
            )}
            renderHiddenItem={(data, rowMap) => (
                <View style={useStyles().rowBack}>
                    <TouchableOpacity onPress={() => { props.useClickUpdate(data.item.Id) }}>
                        <Icon style={{ color: 'blue' }} name="pen-square" type="FontAwesome5" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.useRemove(data.item.Id) }}>
                        <Icon style={{ color: 'red' }} name="times-circle" type="FontAwesome5" />
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />
    </View>
);