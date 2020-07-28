import React from 'react';
import { useStyles } from './profile-information.styles';
import { IProfileInformationProps } from "./profile-Information.component";
import { Text, Form, Item, Input, Button, Label, DatePicker, Picker, Icon } from 'native-base';
import Moment from 'moment';

export interface IRenderProfileInformationProps extends IProfileInformationProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
    formatDate: (date: Date) => string;
}
export const ProfileInformationRender = (props: IRenderProfileInformationProps) => (
    <Form>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("FullName").valid && props.useGetFormControl("FullName").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("FullName").valid && props.useGetFormControl("FullName").fire) ? "red" : "black" }} type="FontAwesome5" name="signature" />
            <Input placeholder="Họ và tên" value={props.useGetFormControl("FullName").value} onChangeText={value => { props.useHandleOnChange({ name: 'FullName', value }) }} />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Email").valid && props.useGetFormControl("Email").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("Email").valid && props.useGetFormControl("Email").fire) ? "red" : "black" }} type="FontAwesome5" name="envelope" />
            <Input placeholder="Thư điện tử" value={props.useGetFormControl("Email").value} onChangeText={value => { props.useHandleOnChange({ name: "Email", value }) }} />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Phone").valid && props.useGetFormControl("Phone").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("Phone").valid && props.useGetFormControl("Phone").fire) ? "red" : "black" }} type="FontAwesome5" name="phone-volume" />
            <Input placeholder="Số điện thoại" value={props.useGetFormControl("Phone").value} onChangeText={value => { props.useHandleOnChange({ name: "Phone", value }) }} />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("BirthDate").valid && props.useGetFormControl("BirthDate").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("BirthDate").valid && props.useGetFormControl("BirthDate").fire) ? "red" : "black" }} type="FontAwesome5" name="gifts" />
            <Input placeholder="Sinh nhật" value={props.useGetFormControl("BirthDate").value} editable={false} />
            <DatePicker
                animationType={"fade"}
                androidMode="default"
                placeHolderText="Chọn"
                formatChosenDate={() => {
                    return "Chọn";
                }}
                onDateChange={value => {
                    props.useHandleOnChange({ name: "BirthDate", value: props.formatDate(value) });
                }}
                disabled={false}
            />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Gender").valid && props.useGetFormControl("Gender").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("Gender").valid && props.useGetFormControl("Gender").fire) ? "red" : "black" }} type="FontAwesome5" name="venus-mars" />
            <Input placeholder="Giới tính" editable={false} />
            <Picker
                mode="dropdown"
                selectedValue={props.useGetFormControl("Gender").value}
                onValueChange={value => {
                    props.useHandleOnChange({ name: "Gender", value });
                }}
            >
                <Picker.Item label="Không" value={undefined} />
                <Picker.Item label="Nam" value={true} />
                <Picker.Item label="Nữ" value={false} />
            </Picker>
        </Item>
        <Item style={useStyles().input}>
            <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                <Text style={useStyles().button_text}>Cập nhật</Text>
            </Button>
        </Item>
    </Form>
)