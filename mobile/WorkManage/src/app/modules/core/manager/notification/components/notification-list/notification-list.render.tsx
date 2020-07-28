import React from "react";
import { INotificationListProps } from "./notification-list.component";
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon } from 'native-base';
import { useStyles } from "./notification-list.styles";
import { NotificationVM } from "src/app/view-models";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from "react-native";

interface IRenderNotificationListProps extends INotificationListProps {
    notifications: NotificationVM[];
    avatar: any;
    useReturnTime: (data: string | number | Date) => string;
    useToggleNotification: (notification: NotificationVM) => void;
}
export const NotificationListRender = (props: IRenderNotificationListProps) => (
    <View style={useStyles().container}>
        {/* <SwipeListView
            style={useStyles().list}
            data={props.notifications}
            renderItem={(data, rowMap) => (
                <View style={useStyles().rowFront}>
                    <Text>{data.item.Data}</Text>
                </View>
            )}
            renderHiddenItem={(data, rowMap) => (
                <View style={useStyles().rowBack}>
                    <TouchableOpacity>
                        <Icon style={{ color: 'blue' }} name="pen-square" type="FontAwesome5" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={{ color: 'red' }} name="times-circle" type="FontAwesome5" />
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        /> */}
        {props.notifications.length > 0 && <List
            style={useStyles().list}
            dataArray={props.notifications}
            renderRow={(row: NotificationVM) =>
                <TouchableOpacity style={[useStyles().rowFront, !row.IsSeen && useStyles().notseen]} onPress={() => props.useToggleNotification(row)}>
                    <Image source={props.avatar ? { uri: props.avatar } : require("src/assets/none.jpg")} style={useStyles().image} />
                    <View style={useStyles().noti}>
                        <Text style={useStyles().title}>{row.Data}</Text>
                        <Text style={useStyles().subTitle}>{props.useReturnTime(row.CreatedAt)}</Text>
                    </View>
                </TouchableOpacity>}
        />}
        {
            props.notifications.length === 0 && <View style={{ justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                <Text>Không có thông báo</Text>
            </View>

        }
    </View>
);