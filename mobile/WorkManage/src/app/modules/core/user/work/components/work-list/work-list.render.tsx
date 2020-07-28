import React from "react";
import { IWorkListProps } from "./work-list.component";
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker, Textarea } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStyles } from "./work-list.styles";
import { WorkVM } from "src/app/view-models";
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import {Image} from "react-native";

interface IRenderWorkListProps extends IWorkListProps {
    works: WorkVM[];
    useRemove: (id: string) => void;
    formatDate: (date: Date) => string;
    listStatus: {label: string, value: string, color: string}[];
}
export const WorkListRender = (props: IRenderWorkListProps) => (
    <View style={useStyles().container}>
        {props.works.length === 0 && <View style={{ justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <Text>Chưa có công việc</Text>
            <TouchableOpacity style={{ justifyContent: "center" }} onPress={() => props.useClickCreate()}>
                <Icon style={{ color: 'green' }} name="plus-square" type="FontAwesome5" />

            </TouchableOpacity>
        </View>}
        {props.works.length > 0 && <SwipeListView
            style={useStyles().list}
            data={props.works}
            renderItem={(data, rowMap) => (
                <View style={{...useStyles().rowFront, borderColor: props.listStatus.find(e => e.value === data.item.Status)?.color}}>
                <View style={useStyles().form}>
                <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="briefcase" type="FontAwesome5"></Icon>
                    <Input placeholder="Tên công việc" value={data.item.Name} editable={false} />
                </Item>
                <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="calendar" type="FontAwesome5"></Icon>
                    <Label>Bắt đầu:</Label>
                    <Input placeholder="Ngày bắt đầu" value={props.formatDate(data.item.StartTime)} editable={false} />
                </Item>
                <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="calendar" type="FontAwesome5"></Icon>
                    <Label>Kết thúc:</Label>
                    <Input placeholder="Ngày kết thúc" disabled value={props.formatDate(data.item.EndTime)} editable={false} />
                </Item>
                <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="text-width" type="FontAwesome5"></Icon>
                    <Textarea disabled placeholder="Nội dung" rowSpan={5} style={{ width: "80%" }} editable={false} bordered={false} underline={false} value={data.item.Content} />
                </Item>

                <Item regular
                style={{ ...useStyles().input, borderColor: data.item.Status === "0" ? "#6a737c" : (data.item.Status === "1" ? "#379fef" : (data.item.Status === "2" ? "#5eba7d" : (data.item.Status === "3" ? "#bd5c00" : (data.item.Status === "4" ? "#f2720c" : "#f7aa6d" ))))}}>
                <Icon name="spinner" type="FontAwesome5"></Icon>
                <Picker
                    mode="dropdown"
                    selectedValue={data.item.Status}
                    enabled={false}
                >
                    {props.listStatus.map((e) => <Picker.Item label={e.label} value={e.value} />)}
                </Picker>
            </Item>
            {(data.item.Status === "3" || data.item.Status === "2") && <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="text-width" type="FontAwesome5"></Icon>
                    <Textarea disabled placeholder="Nội dung xử lí" rowSpan={5} style={{ width: "80%" }} editable={false} bordered={false} underline={false} value={data.item.ContentSolve} />
                </Item>}
                {(data.item.Status === "5") && <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="text-width" type="FontAwesome5"></Icon>
                    <Textarea disabled placeholder="Lý do" rowSpan={5} style={{ width: "80%" }} editable={false} bordered={false} underline={false} value={data.item.Reason} />
                </Item>}
                {(data.item.Status === "3") && <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="acquisitions-incorporated" type="FontAwesome5"></Icon>
                    <Textarea disabled placeholder="Đánh giá của quản lý" rowSpan={5} style={{ width: "80%" }} editable={false} bordered={false} underline={false} value={data.item.Mark + ""} />
                </Item>}
                {(data.item.Status === "3") && <Item regular
                    style={{ ...useStyles().input}}>
                    <Icon name="text-width" type="FontAwesome5"></Icon>
                    <Textarea disabled placeholder="Nhận xét của quản lý" rowSpan={5} style={{ width: "80%" }} editable={false} bordered={false} underline={false} value={data.item.Description} />
                </Item>}
            {data.item.FileUrl && <Item
                    style={{ ...useStyles().input, borderBottomWidth: 0 }}>
                    <Image source={{ uri: data.item.FileUrl }} style={useStyles().image} /></Item>
                }
            </View >
                </View>
            )}
            renderHiddenItem={(data, rowMap) => (
                <View style={useStyles().rowBack}>
                    <TouchableOpacity disabled={data.item.Status !== "0" && data.item.Status !== "1"} onPress={() => { props.useClickUpdate(data.item.Id) }}>
                        <Icon style={{ color: data.item.Status !== "0" && data.item.Status !== "1" ? "grey" : 'blue' }} name="pen-square" type="FontAwesome5" />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={data.item.Status !== "0" && data.item.Status !== "1"} onPress={() => { props.useRemove(data.item.Id) }}>
                        <Icon style={{ color:data.item.Status !== "0" && data.item.Status !== "1" ? 'grey' : 'red' }} name="times-circle" type="FontAwesome5" />
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />}
    </View>
);