import React from "react";
import { IWorkHomeProps } from "./work-home.component";
import { useStyles } from "./work-home.styles";
import { BaseComponent } from "src/app/share/components";
interface IRenderWorkProps extends IWorkHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const WorkHomeRender = (props: IRenderWorkProps) => (
    <BaseComponent {...props} />
);