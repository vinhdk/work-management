import React from "react";
import { IGroupListProps } from "./group-list.component";
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStyles } from "./group-list.styles";
import { GroupVM } from "src/app/view-models";
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

interface IRenderGroupListProps extends IGroupListProps {
    search: { name: string };
    useFilter: () => Array<GroupVM>;
    useSearch: (value: string, key: string) => void;
    useRemove: (id: string) => void;
}
export const GroupListRender = (props: IRenderGroupListProps) => (
    <View style={useStyles().container}>
        <Item regular style={{ paddingHorizontal: 10 }}>
            <Icon active name='search' />
            <Input
                placeholder="Search"
                value={props.search.name}
                onChangeText={value => props.useSearch(value, "name")}
            />
            <TouchableOpacity onPress={() => props.useClickCreate()}>
                <Icon style={{ color: 'green' }} name="plus-square" type="FontAwesome5" />
            </TouchableOpacity>
        </Item>
        <SwipeListView
            style={useStyles().list}
            data={props.useFilter()}
            renderItem={(data, rowMap) => (
                <View style={useStyles().rowFront}>
                    <Item regular
                        style={{ ...useStyles().row }}>
                        <Icon name="campground" type="FontAwesome5"></Icon>
                        <Input placeholder="Tên nhóm" value={data.item.Name} editable={false} />
                    </Item>
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