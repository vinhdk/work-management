import React from "react";
import { Text, Tabs, Tab, TabHeading, Icon, View, Button, Item } from "native-base";
import { IGroupUpdateProps } from "./group-update.component";
import { RoleVM, GroupVM, UserVM } from "src/app/view-models";
import { useStyles } from "./group-update.styles";
import { GroupUpdateInformationComponent, GroupUpdateMemberComponent, GroupUpdateWorkComponent } from "./child-components";

export interface IRenderGroupUpdateProps extends IGroupUpdateProps {
    Id: string;
}

export const RenderGroupUpdateComponent = (props: IRenderGroupUpdateProps) => (
    <View style={{ flex: 1 }}>
        <Tabs>
            <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="info-circle" type="FontAwesome5" /></TabHeading>}>
                <GroupUpdateInformationComponent {...props} />
            </Tab>
            <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="users" type="FontAwesome5" /></TabHeading>}>
                <GroupUpdateMemberComponent {...props} />
            </Tab>
            <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="briefcase" type="FontAwesome5" /></TabHeading>}>
                <GroupUpdateWorkComponent {...props} />
            </Tab>
        </Tabs>
        <Item style={{ paddingHorizontal: 10, marginBottom: 10 }}>
            <Button onPress={() => props.useBack()} bordered danger style={{ ...useStyles().button }}><Text style={useStyles().button_text}>Trở về</Text></Button>
        </Item>

    </View>
)