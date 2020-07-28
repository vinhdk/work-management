import React from "react";
import { IGroupHomeProps } from "./group-home.component";
import { useStyles } from "./group-home.styles";
import { BaseComponent } from "src/app/share/components";
interface IRenderGroupProps extends IGroupHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const GroupHomeRender = (props: IRenderGroupProps) => (
    <BaseComponent {...props} />
);