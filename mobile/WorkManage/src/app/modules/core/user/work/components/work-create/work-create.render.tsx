import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon, Textarea, Card, CardItem, List } from "native-base";
import { IWorkCreateProps } from "./work-create.component";
import { UserVM } from "src/app/view-models";
import { useStyles } from "./work-create.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export interface IRenderWorkCreateProps extends IWorkCreateProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
    formatDate: (date: Date) => string;
}

export const RenderWorkCreateComponent = (props: IRenderWorkCreateProps) => (
    <ScrollView>
        <Form style={{ flex: 1, marginBottom: 10 }}>
            <View style={useStyles().form}>
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
                    <DatePicker
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
                    />
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}>
                    <Icon name="calendar" type="FontAwesome5" style={{ color: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}></Icon>
                    <Label style={{ color: (!props.useGetFormControl("EndTime").valid && props.useGetFormControl("EndTime").fire) ? "red" : "black" }}>Kết thúc:</Label>
                    <Input placeholder="Ngày kết thúc" disabled value={props.useGetFormControl("EndTime").value} editable={false} />
                    <DatePicker
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
                    />
                </Item>
                <Item regular
                    style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Content").valid && props.useGetFormControl("Content").fire) ? "red" : "black" }}>
                    <Icon name="text-width" type="FontAwesome5" style={{ color: (!props.useGetFormControl("Content").valid && props.useGetFormControl("Content").fire) ? "red" : "black" }}></Icon>
                    <Textarea placeholder="Nội dung" rowSpan={5} style={{ width: "80%" }} bordered={false} underline={false} value={props.useGetFormControl("Content").value} onChangeText={value => { props.useHandleOnChange({ name: "Content", value }) }} />
                </Item>
            </View >
            <Item style={useStyles().view_button}>
                <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                    <Text style={useStyles().button_text}>Xác nhận</Text>
                </Button>
                <Button bordered style={{ ...useStyles().button }} danger onPress={props.useChildBack}>
                    <Text style={useStyles().button_text}>Quay lại</Text>
                </Button>
            </Item>
        </Form>

    </ScrollView>

)