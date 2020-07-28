import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INotificationHomeProps } from '../../screens';
import { NotificationVM, NotificationUM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers/index';
import { NotificationListRender } from './notification-list.render';
import Moment from 'moment';
import { useNotificationAction, useAuthAction } from 'src/app/actions';
export interface INotificationListProps extends INotificationHomeProps {
}

export const NotificationListComponent = (props: INotificationListProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.profile);
    const notifications: Array<NotificationVM> = (profile.Notifications || []).sort((a, b) => new Date(a.CreatedAt) > new Date(b.CreatedAt) ? -1 : (new Date(a.CreatedAt) < new Date(b.CreatedAt) ? 1 : 0));;
    const avatar = profile ? profile.Avatar : undefined;
    const useReturnTime = (data: string | number | Date): string => {
        const real = () => {
            const fullDate = Moment(new Date(data)).format('DD/MM/YYYY HH:mm:ss');
            const date = fullDate.split(" ")[0].split("/");
            const time = fullDate.split(" ")[1].split(":");

            const day = parseInt(date[0], 0);
            const month = parseInt(date[1], 0);
            const year = parseInt(date[2], 0);

            const hour = parseInt(time[0], 0);
            const minute = parseInt(time[1], 0);
            const second = parseInt(time[2], 0);
            return { day, month, year, hour, minute, second };
        }
        const now = () => {
            const fullDate = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
            const date = fullDate.split(" ")[0].split("/");
            const time = fullDate.split(" ")[1].split(":");

            const day = parseInt(date[0], 0);
            const month = parseInt(date[1], 0);
            const year = parseInt(date[2], 0);

            const hour = parseInt(time[0], 0);
            const minute = parseInt(time[1], 0);
            const second = parseInt(time[2], 0);
            return { day, month, year, hour, minute, second };
        }
        if (real().year < now().year) {
            return now().year - real().year + " năm trước";
        } else {
            if (real().month < now().month) {
                return now().month - real().month + " tháng trước";
            } else {
                if (real().day < now().day) {
                    return now().day - real().day + " ngày trước";
                } else {
                    if (real().hour < now().hour) {
                        return now().hour - real().hour + " giờ trước";
                    } else {
                        if (real().minute < now().minute) {
                            return now().minute - real().minute + " phút trước";
                        } else {
                            if (real().second < now().second) {
                                return now().second - real().second + " giây trước";
                            } else {
                                return "Vừa xong"
                            }
                        }
                    }
                }
            }
        }

    }
    const useToggleNotification = (notification: NotificationVM) => {
        if (!notification.IsSeen) {
            dispatch(useNotificationAction().update(new NotificationUM({ ...notification, IsSeen: true }).getData()));
            notifications[notifications.findIndex(e => e.Id === notification.Id)].IsSeen = true;
        }

    }
    return <NotificationListRender useReturnTime={useReturnTime} useToggleNotification={useToggleNotification} avatar={avatar} {...props} notifications={notifications} />;
}