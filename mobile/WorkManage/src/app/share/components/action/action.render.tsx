import React from "react";
import { IActionProps } from "./action.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "native-base";
import { useStyles } from "./action.styles";
interface IRenderActionProps extends IActionProps {
    useToggle: () => void;
}
export const ActionRender = (props: IRenderActionProps) => (
    <TouchableOpacity onPress={props.useToggle}>
        <Icon type="FontAwesome5" name={props.useType() === "main" ? "bars" : "arrow-left"} style={useStyles().icon} />
    </TouchableOpacity>
)