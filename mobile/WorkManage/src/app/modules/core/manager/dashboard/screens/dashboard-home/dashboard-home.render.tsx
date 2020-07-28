import React from "react";
import { IDashboardHomeProps } from "./dashboard-home.component";
import { BaseComponent } from "src/app/share/components";
import { useStyles } from "./dashboard-home.styles";
interface IRenderDashboardProps extends IDashboardHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const DashboardHomeRender = (props: IRenderDashboardProps) => (
    <BaseComponent {...props} />
);