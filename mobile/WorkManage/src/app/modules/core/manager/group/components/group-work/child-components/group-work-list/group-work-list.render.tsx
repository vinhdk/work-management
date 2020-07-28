import React from "react";
import { Form, Item, Label, Input, Button, Text, View, Icon, List, Picker, DatePicker } from "native-base";
import { IGroupWorkListProps } from "./group-work-list.component";
import { useStyles } from "./group-work-list.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WorkVM, UserVM } from "src/app/view-models";

export interface IRenderGroupWorkListProps extends IGroupWorkListProps {
    search: { name: string, from: string | undefined, to: string | undefined, user: string, status: string };
    useFilter: () => Array<WorkVM>;
    useSearch: (data: { name: string, from: string | undefined, to: string | undefined, user: string, status: string }) => void;
    useRemove: (id: string) => void;
    formatDate: (date: Date | string) => string;
    listStatus: {label: string, value: string, color: string}[];
}
export const RenderGroupWorkListComponent = (props: IRenderGroupWorkListProps) => (
    <View style={useStyles().container}>
        <Item regular style={{ paddingHorizontal: 10, width: "100%" }}>
            <Icon active name='search' />
            <Input
                placeholder="Search name"
                value={props.search.name}
                onChangeText={value => props.useSearch({ ...props.search, name: value })}
            />
            <Picker
                mode="dropdown"
                selectedValue={props.search.status}
                onValueChange={value => {
                    props.useSearch({ ...props.search, status: value });

                }}
            >
                <Picker.Item label="Tất cả" value="" />
                {props.listStatus.map((e) => {
                    return <Picker.Item label={e.label} value={e.value} />;
                })}
            </Picker>
            <TouchableOpacity disabled={props.accounts.filter(e => e.Works.length === 0).length === 0} onPress={() => props.useClickCreate()}>
                <Icon style={{ color: props.accounts.filter(e => e.Works.length === 0).length === 0 ? "grey" : "green" }} name="plus-square" type="FontAwesome5" />
            </TouchableOpacity>
        </Item>
        <Item regular style={{ paddingHorizontal: 10, width: "100%" }}>
            <Icon name="users" type="FontAwesome5" />
            <Picker
                mode="dropdown"
                selectedValue={props.search.user}
                onValueChange={value => {
                    props.useSearch({ ...props.search, user: value });

                }}
            >
                <Picker.Item label="Tất cả thành viên" value="" />
                {props.accounts.map((e) => {
                    return <Picker.Item label={e.FullName} value={e.Id} />
                })}
            </Picker>
        </Item>
        <View style={{ flexDirection: "row" }}>
            <Item regular style={{ paddingHorizontal: 10, width: "50%", borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                <DatePicker
                    animationType={"fade"}
                    androidMode="default"
                    placeHolderText="Từ"
                    formatChosenDate={() => {
                        return "Từ";
                    }}
                    onDateChange={value => {
                        props.useSearch({ ...props.search, from: props.formatDate(value) });
                    }}
                    disabled={false}
                />
                <Input disabled value={props.search.from} editable={true} />
            </Item>
            <Item regular style={{ paddingHorizontal: 10, width: "50%", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <Input disabled value={props.search.to} editable={true} />
                <DatePicker
                    animationType={"fade"}
                    androidMode="default"
                    placeHolderText="Đến"
                    formatChosenDate={() => {
                        return "Đến";
                    }}
                    onDateChange={value => {
                        props.useSearch({ ...props.search, to: props.formatDate(value) });
                    }}
                    disabled={false}
                />
            </Item>
        </View>
        <List
            style={useStyles().list}
            dataArray={props.useFilter()}
            renderRow={(row: WorkVM) =>
                <Item regular style={useStyles().rowFront}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon style={{color: props.listStatus.find(e => e.value === row.Status)?.color}} name="briefcase" type="FontAwesome5" />
                        <Text> {row.Name}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => props.useClickUpdate(row.Id)} style={{ marginRight: 5 }}>
                            <Icon style={{ color: "blue" }} name="info-circle" type="FontAwesome5" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.useRemove(row.Id)}>
                            <Icon style={{ color: "red" }} name="times-circle" type="FontAwesome5" />
                        </TouchableOpacity>
                    </View>
                </Item>}
        />
    </View>
);