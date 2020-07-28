import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, Textarea, Card, CardItem, List, } from "native-base";
import { IGroupUpdateWorkUpdateProps } from "./group-update-work-update.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./group-update-work-update.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
export interface IRenderGroupUpdateWorkUpdateProps extends IGroupUpdateWorkUpdateProps {
    useCheckValid: () => boolean;
    useCheckAnother: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useDoneWork: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
    formatDate: (date: Date) => string;
    extra: { users: UserVM[], solveBy: UserVM };
    done: boolean;
    inititalStatus: string;
    fileUrl: string | undefined;
}

export const RenderGroupUpdateWorkUpdateComponent = (props: IRenderGroupUpdateWorkUpdateProps) => (
    <ScrollView>
        <Form style={{ flex: 1, marginBottom: 10 }}>
            <View style={useStyles().form}>
                {props.useGetFormControl("EvaluatedTime").value && <Item regular
                    style={{ ...useStyles().input }}>
                    <Icon name="calendar" type="FontAwesome5"></Icon>
                    <Label>Cập nhật: </Label>
                    <Input value={props.useGetFormControl("EvaluatedTime").value} editable={false} />
                </Item>}
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}>
                    <Icon name="briefcase" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}></Icon>
                    <Input placeholder="Tên công việc" value={props.useGetFormControl("Name").value} onChangeText={value => { props.useHandleOnChange({ name: 'Name', value }) }} />
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}>
                    <Icon name="calendar" type="FontAwesome5" style={{ color: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}></Icon>
                    <Label style={{ color: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}>Bắt đầu:</Label>
                    <Input placeholder="Ngày bắt đầu" value={props.useGetFormControl("StartTime").value} editable={false} />
                    {(props.inititalStatus === "0" || (props.inititalStatus === "5" && props.useCheckAnother())) && <DatePicker
                        animationType={"fade"}
                        androidMode="default"
                        placeHolderText="Chọn"
                        formatChosenDate={() => {
                            return "Chọn";
                        }}
                        onDateChange={value => {
                            props.useHandleOnChange({ name: "StartTime", value: props.formatDate(value) });
                        }}
                        disabled={false}
                    />}
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}>
                    <Icon name="calendar" type="FontAwesome5" style={{ color: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}></Icon>
                    <Label style={{ color: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}>Kết thúc:</Label>
                    <Input placeholder="Ngày kết thúc" disabled value={props.useGetFormControl("EndTime").value} editable={false} />
                    {(props.inititalStatus === "0" || (props.inititalStatus === "5" && props.useCheckAnother())) && <DatePicker
                        animationType={"fade"}
                        androidMode="default"
                        placeHolderText="Chọn"
                        formatChosenDate={() => {
                            return "Chọn";
                        }}
                        onDateChange={value => {
                            props.useHandleOnChange({ name: "EndTime", value: props.formatDate(value) });
                        }}
                        disabled={false}
                    />}
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Content").valid && props.useGetFormControl("Content").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Content").valid && props.useGetFormControl("Content").fire) ? "red" : "black" }}></Icon>
                    {(props.inititalStatus === "0" || (props.inititalStatus === "5" && props.useCheckAnother())) && <Textarea placeholder="Nội dung" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Content").value} onChangeText={value => { props.useHandleOnChange({ name: "Content", value }) }} />}
                    {!(props.inititalStatus === "0" || (props.inititalStatus === "5" && props.useCheckAnother())) && <Textarea placeholder="Nội dung" disabled rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Content").value} onChangeText={value => { props.useHandleOnChange({ name: "Content", value }) }} />}
                </Item>
                <Item
                    style={{ ...useStyles().input, borderBottomWidth: 0 }}>
                    <Card style={{ width: "100%", borderColor: "black" }}>
                        <CardItem header>
                            <Text>Người xử lí</Text>
                        </CardItem>
                        <CardItem>
                            <View style={{ flex: 1 }}>
                                <List
                                    key="User"
                                    dataArray={[...props.extra.users.filter(e => e.Works.length === 0), props.extra.solveBy]}
                                    renderRow={(row: UserVM) => (
                                        <TouchableOpacity disabled={props.inititalStatus !== "5"} style={[useStyles().rowFront, { marginTop: 10 }]} onPress={() => {
                                            props.useHandleOnChange({ name: "SolveBy", value: row.Id });
                                            if (props.useCheckAnother()) {
                                                props.useHandleOnChange({ name: "Status", value: "1" });
                                            } else {
                                                props.useHandleOnChange({ name: "Status", value: props.inititalStatus });
                                            }
                                        }}>
                                            <Text>{row.FullName}</Text>
                                            {props.useGetFormControl("SolveBy").value === row.Id && <Icon style={{ color: 'green' }} name="check-circle" type="FontAwesome5" />}
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </CardItem>
                    </Card>
                </Item>
                {(!props.done || !props.useCheckAnother()) && <Item regular
                    style={{ ...useStyles().input }}>
                    <Icon name="spinner" type="FontAwesome5"></Icon>
                    <Label>Trạng thái: </Label>
                    <Input value={props.inititalStatus === "0" ? "Chờ duyệt thực hiện" : (props.inititalStatus === "1" ? "Đang thực hiện" : (props.inititalStatus === "2" ? "Chờ duyệt kết thúc" : (props.inititalStatus === "3" ? "Kết thúc" : (props.inititalStatus === "4" ? "Trễ hạn" : "Không thể thực hiện" ) ) ))} editable={false} />
                </Item>}
                {(props.done && !props.useCheckAnother() && props.useGetFormControl("Status").value === "3") && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("ContentSolve").valid && props.useGetFormControl("ContentSolve").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("ContentSolve").valid && props.useGetFormControl("ContentSolve").fire) ? "red" : "black" }}></Icon>
                    <Textarea placeholder="Nội dung xử lí" disabled rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("ContentSolve").value} onChangeText={value => { props.useHandleOnChange({ name: "ContentSolve", value }) }} />
                </Item>}
                {(props.done && !props.useCheckAnother() && props.useGetFormControl("Status").value === "3") && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Mark").valid && props.useGetFormControl("Mark").fire) ? "red" : "black" }}>
                    <Icon name="acquisitions-incorporated" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Mark").valid && props.useGetFormControl("Mark").fire) ? "red" : "black" }}></Icon>
                    <Input editable={props.inititalStatus !== "3"} placeholder="Đánh giá điểm số 1-10" keyboardType="numeric" maxLength={2} value={props.useGetFormControl("Mark").value} onChangeText={value => { props.useHandleOnChange({ name: 'Mark', value: parseInt(value) }) }} />
                </Item>}
                {(props.done && !props.useCheckAnother() && props.useGetFormControl("Status").value === "3") && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Description").valid && props.useGetFormControl("Description").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Description").valid && props.useGetFormControl("Description").fire) ? "red" : "black" }}></Icon>
                    {props.inititalStatus === "3" && <Textarea placeholder="Nhận xét" disabled rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Description").value} onChangeText={value => { props.useHandleOnChange({ name: "Description", value }) }} />}
                    {props.inititalStatus !== "3" && <Textarea placeholder="Nhận xét" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Description").value} onChangeText={value => { props.useHandleOnChange({ name: "Description", value }) }} />}
                </Item>}
                {(props.done && !props.useCheckAnother() && props.useGetFormControl("Status").value === "5") && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Reason").valid && props.useGetFormControl("Reason").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Reason").valid && props.useGetFormControl("Reason").fire) ? "red" : "black" }}></Icon>
                    <Textarea placeholder="Lý do" disabled rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Reason").value} onChangeText={value => { props.useHandleOnChange({ name: "Reason", value }) }} />
                </Item>}
                {(props.fileUrl && (!props.useCheckAnother() && (props.inititalStatus === "2" || props.inititalStatus === "3"))) && <Item
                    style={{ ...useStyles().input, borderBottomWidth: 0 }}>
                    <Image source={{ uri: props.fileUrl }} style={useStyles().image} /></Item>
                }
            </View >
            <Item style={useStyles().view_button}>
                {!props.done && <Button bordered info disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useDoneWork}>
            <Text style={useStyles().button_text}>{props.inititalStatus === "2" ? "Kết thúc" : "Trễ hạn"}</Text>
                </Button>}
                {props.done && <Button bordered disabled={!props.useCheckValid() || (props.inititalStatus === "3" || props.inititalStatus === "4") || (props.inititalStatus === "5" && !props.useCheckAnother())} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                    <Text style={useStyles().button_text}>{props.inititalStatus === "0" ? "Duyệt" : "Cập nhật"}</Text>
                </Button>}
                <Button bordered style={{ ...useStyles().button }} danger onPress={props.useChildBack}>
                    <Text style={useStyles().button_text}>Quay lại</Text>
                </Button>
            </Item>
        </Form>

    </ScrollView >

)