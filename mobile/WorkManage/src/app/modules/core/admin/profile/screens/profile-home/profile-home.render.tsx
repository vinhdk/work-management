import React from "react";
import { IProfileHomeProps } from "./profile-home.component";
import { BaseComponent } from "src/app/share/components";
import { useStyles } from "./profile-home.styles";
interface IRenderProfileHomeProps extends IProfileHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const ProfileHomeRender = (props: IRenderProfileHomeProps) => (
    <BaseComponent {...props} />
);