import React from "react";
import { Form, Item, Label, Input, Button, Text, Icon } from "native-base";
import { IGroupUpdateInformationProps } from "./group-update-information.component";
import { useStyles } from "./group-update-information.styles";

export interface IRenderGroupUpdateInformationProps extends IGroupUpdateInformationProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
}

export const RenderGroupUpdateInformationComponent = (props: IRenderGroupUpdateInformationProps) => (
    <Form style={useStyles().form}>
        <Item regular fixedLabel
            style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Name").valid && props.useGetFormControl("Name").fire) ? "red" : "black" }}>
            <Icon name="campground" type="FontAwesome5"></Icon>
            <Input placeholder="Tên nhóm" value={props.useGetFormControl("Name").value} onChangeText={value => { props.useHandleOnChange({ name: 'Name', value }) }} />
        </Item>
        <Item style={useStyles().view_button}>
            <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                <Text style={useStyles().button_text}>Cập nhật</Text>
            </Button>
        </Item>
    </Form>
);