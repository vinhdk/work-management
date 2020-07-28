import React from "react";
import { Form, Item, Label, Input, Button, Text, Icon } from "native-base";
import { IGroupInformationProps } from "./group-information.component";
import { useStyles } from "./group-information.styles";
import { GroupVM } from "src/app/view-models";

export interface IRenderGroupInformationProps extends IGroupInformationProps {
    group: GroupVM;
}

export const RenderGroupInformationComponent = (props: IRenderGroupInformationProps) => (
    <Form style={useStyles().form}>
        <Item regular
            style={{ ...useStyles().input }}>
            <Icon name="campground" type="FontAwesome5"></Icon>
            <Input placeholder="Tên nhóm" value={props.group.Name} editable={false} />
        </Item>
    </Form>
);