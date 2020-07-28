import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, Textarea, Card, CardItem, List, } from "native-base";
import { IWorkUpdateProps } from "./work-update.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./work-update.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
export interface IRenderWorkUpdateProps extends IWorkUpdateProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
    formatDate: (date: Date) => string;
    useSelectPhoto: () => void;
    fileUrl: string | undefined;
    useSetFileUrl: (data: string | undefined) => void;
    status: string;
}

export const RenderWorkUpdateComponent = (props: IRenderWorkUpdateProps) => (
    <ScrollView>
        <Form style={{ flex: 1, marginBottom: 10 }}>
            <View style={useStyles().form}>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}>
                    <Icon name="briefcase" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}></Icon>
                    <Input placeholder="Tên công việc" editable={props.status === "0"} value={props.useGetFormControl("Name").value} onChangeText={value => { props.useHandleOnChange({ name: 'Name', value }) }} />
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}>
                    <Icon name="calendar" type="FontAwesome5" style={{ color: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}></Icon>
                    <Label style={{ color: (!props.useGetFormControl("StartTime").valid && props.useGetFormControl("StartTime").fire) ? "red" : "black" }}>Bắt đầu:</Label>
                    <Input placeholder="Ngày bắt đầu" value={props.useGetFormControl("StartTime").value} editable={false} />
                    {props.status === "0" && <DatePicker
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
                    {props.status === "0" && <DatePicker
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
                    {props.status === "0" && <Textarea placeholder="Nội dung" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Content").value} onChangeText={value => { props.useHandleOnChange({ name: "Content", value }) }} />}
                    {props.status !== "0" && <Textarea placeholder="Nội dung" disabled rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Content").value} onChangeText={value => { props.useHandleOnChange({ name: "Content", value }) }} />}
                    </Item>
                {props.status !== "0" && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Status").valid && props.useGetFormControl("Status").fire) ? "red" : "black" }}>
                    <Icon name="spinner" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Status").valid && props.useGetFormControl("Status").fire) ? "red" : "black" }}></Icon>
                    <Label style={{ color: (!props.useGetFormControl("Status").valid && props.useGetFormControl("Status").fire) ? "red" : "black" }}>Trạng thái:</Label>
                    <Picker
                        mode="dropdown"
                        enabled={props.status === "1"}
                        selectedValue={props.useGetFormControl("Status").value}
                        onValueChange={value => {
                            props.useHandleOnChange({ name: "Status", value });
                            if (value === "1") {
                                props.useHandleOnChange({ name: "FileUrl", value: undefined });
                                props.useHandleOnChange({ name: "Reason", value: undefined });
                                props.useHandleOnChange({ name: "ContentSolve", value: undefined });
                                props.useSetFileUrl(undefined);
                            } else if (value === "3") {
                                props.useHandleOnChange({ name: "Reason", value: undefined });
                            } else {
                                props.useHandleOnChange({ name: "FileUrl", value: undefined });
                                props.useHandleOnChange({ name: "ContentSolve", value: undefined });
                                props.useSetFileUrl(undefined);
                            }
                        }}
                    >
                        <Picker.Item label="Đang thực hiện" value="1" />
                        <Picker.Item label="Kết thúc" value="3" />
                        <Picker.Item label="Không thể thực hiện" value="5" />
                    </Picker>
                </Item>}
                {props.useGetFormControl("Status").value === "3" && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("ContentSolve").valid && props.useGetFormControl("ContentSolve").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("ContentSolve").valid && props.useGetFormControl("ContentSolve").fire) ? "red" : "black" }}></Icon>
                    <Textarea placeholder="Nội dung xử lí" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("ContentSolve").value} onChangeText={value => { props.useHandleOnChange({ name: "ContentSolve", value }) }} />
                </Item>}
                {props.useGetFormControl("Status").value === "5" && <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Reason").valid && props.useGetFormControl("Reason").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Reason").valid && props.useGetFormControl("Reason").fire) ? "red" : "black" }}></Icon>
                    <Textarea placeholder="Lý do" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Reason").value} onChangeText={value => { props.useHandleOnChange({ name: "Reason", value }) }} />
                </Item>}
                {(props.useGetFormControl("Status").value === "3" && props.status === "1") && <Item
                    style={{ ...useStyles().input, borderBottomWidth: 0 }}>
                    <Button style={{ width: "100%", justifyContent: "center", backgroundColor: "grey" }} onPress={props.useSelectPhoto}>
                        <Text>Chọn tệp đính kèm </Text><Icon name="file-image" type="FontAwesome5" />
                    </Button>
                </Item>}
                {props.fileUrl && <Item
                    style={{ ...useStyles().input, borderBottomWidth: 0 }}>
                    <Image source={{ uri: props.fileUrl }} style={useStyles().image} /></Item>
                }
            </View >
            <Item style={useStyles().view_button}>
                <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                    <Text style={useStyles().button_text}>Cập nhật</Text>
                </Button>
                <Button bordered style={{ ...useStyles().button }} danger onPress={props.useChildBack}>
                    <Text style={useStyles().button_text}>Quay lại</Text>
                </Button>
            </Item>
        </Form>

    </ScrollView>

)