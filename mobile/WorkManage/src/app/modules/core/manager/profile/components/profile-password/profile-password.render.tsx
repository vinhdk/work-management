import React from 'react';
import { useStyles } from './profile-password.styles';
import { Text, Form, Item, Input, Button, Label, Icon } from 'native-base';
import { IProfilePassWordProps } from "./profile-password.component";

export interface IRenderProfilePassWordProps extends IProfilePassWordProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
}
export const ProfilePassWordRender = (props: IRenderProfilePassWordProps) => (
    <Form>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("OldPassWord").valid && props.useGetFormControl("OldPassWord").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("OldPassWord").valid && props.useGetFormControl("OldPassWord").fire) ? "red" : "black" }} type="FontAwesome5" name="key" />
            <Input placeholder="Mật khẩu cũ" secureTextEntry={true} value={props.useGetFormControl("OldPassWord").value} onChangeText={value => { props.useHandleOnChange({ name: 'OldPassWord', value }) }} />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("NewPassWord").valid && props.useGetFormControl("NewPassWord").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("NewPassWord").valid && props.useGetFormControl("NewPassWord").fire) ? "red" : "black" }} type="FontAwesome5" name="key" />
            <Input placeholder="Mật khẩu mới" secureTextEntry={true} value={props.useGetFormControl("NewPassWord").value} onChangeText={value => { props.useHandleOnChange({ name: 'NewPassWord', value });; props.useHandleOnChange({ name: "ConfirmPassWord", value: props.useGetFormControl("ConfirmPassWord").value }); }} />
        </Item>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("ConfirmPassWord").valid && props.useGetFormControl("ConfirmPassWord").fire) ? "red" : "black" }}>
            <Icon style={{ color: (!props.useGetFormControl("ConfirmPassWord").valid && props.useGetFormControl("ConfirmPassWord").fire) ? "red" : "black" }} type="FontAwesome5" name="key" />
            <Input placeholder="Nhập lại Mật khẩu" secureTextEntry={true} value={props.useGetFormControl("ConfirmPassWord").value} onChangeText={value => { props.useHandleOnChange({ name: 'ConfirmPassWord', value }) }} />
        </Item>
        <Item style={{ borderColor: "#ffffff", alignSelf: "center" }}>
            <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                <Text style={useStyles().button_text}>Cập nhật</Text>
            </Button>
        </Item>
    </Form>
)