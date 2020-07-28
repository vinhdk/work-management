import React from "react";
import { IBellProps } from "./bell.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, View, Text } from "native-base";
import { useStyles } from "./bell.styles";
import { NotificationVM } from "src/app/view-models";
interface IRenderBellProps extends IBellProps {
    useToggle: () => void;
    notifications: NotificationVM[];
}
export const BellRender = (props: IRenderBellProps) => (
    <TouchableOpacity onPress={props.useToggle}>
        {props.notifications.length > 0 && <View style={useStyles().bell_count}>
            <Text style={useStyles().bell_text}>{props.notifications.length}</Text>
        </View>}
        <Icon type="FontAwesome5" name="bell" style={useStyles().icon} />
    </TouchableOpacity>
)