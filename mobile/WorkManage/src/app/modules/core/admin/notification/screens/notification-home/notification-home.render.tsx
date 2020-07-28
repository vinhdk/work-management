import React from "react";
import { INotificationHomeProps } from "./notification-home.component";
import { useStyles } from "./notification-home.styles";
import { BaseComponent } from "src/app/share/components";
interface IRenderNotificationProps extends INotificationHomeProps {
    useContent: () => JSX.Element;
    useTitle: () => string;
    useType: () => string;
    useName: () => "Admin" | "User" | "Manager";
}
export const NotificationHomeRender = (props: IRenderNotificationProps) => (
    <BaseComponent {...props} />
);