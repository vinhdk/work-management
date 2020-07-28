import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon } from "native-base";
import { IGroupCreateProps } from "./group-create.component";
import { RoleVM, GroupVM } from "src/app/view-models";
import { useStyles } from "./group-create.styles";

export interface IRenderGroupCreateProps extends IGroupCreateProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
}

export const RenderGroupCreateComponent = (props: IRenderGroupCreateProps) => (
    <Form style={useStyles().form}>
        <Item regular
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}>
            <Icon name="campground" type="FontAwesome5"></Icon>
            <Input placeholder="Tên nhóm" value={props.useGetFormControl("Name").value} onChangeText={value => { props.useHandleOnChange({ name: 'Name', value }) }} />
        </Item>
        <Item style={useStyles().view_button}>
            <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                <Text style={useStyles().button_text}>Cập nhật</Text>
            </Button>
            <Button bordered style={{ ...useStyles().button }} danger onPress={props.useBack}>
                <Text style={useStyles().button_text}>Quay lại</Text>
            </Button>
        </Item>
    </Form>


)