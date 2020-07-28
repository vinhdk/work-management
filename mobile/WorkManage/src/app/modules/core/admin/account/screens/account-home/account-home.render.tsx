import React from "react";
import { IAccountHomeProps } from "./account-home.component";
import { useStyles } from "./account-home.styles";
import { BaseComponent } from "src/app/share/components";
interface IRenderAccountProps extends IAccountHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const AccountHomeRender = (props: IRenderAccountProps) => (
    <BaseComponent {...props} />
);