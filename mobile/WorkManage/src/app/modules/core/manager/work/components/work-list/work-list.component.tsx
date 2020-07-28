import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { IWorkHomeProps } from '../../screens';
import { WorkVM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers/index';
import { useWorkAction } from 'src/app/actions';
import { WorkListRender } from './work-list.render';
export interface IWorkListProps extends IWorkHomeProps {
    useClickCreate: () => void;
    useClickUpdate: (value: string) => void;
    useReload();
}

export const WorkListComponent = (props: IWorkListProps) => {
    const profile = useSelector((state: RootState) => state.auth.profile);
    const works: Array<WorkVM> = useSelector((state: RootState) => state.work.array).filter((e) => e.SolveBy === profile.Id);
    const listStatus = [
        {
            label: "Chờ duyệt thực hiện",
            value: "0",
            color: "#6a737c"
        },
        {
            label: "Đang thực hiện",
            value: "1",
            color: "#379fef"
        },
        {
            label: "Chờ duyệt kết thúc",
            value: "2",
            color: "#5eba7d"
        },
        {
            label: "Kết thúc",
            value: "3",
            color: "#bd5c00"
        },
        {
            label: "Trễ hạn",
            value: "4",
            color: "#f2720c"
        },
        {
            label: "Không thể thực hiện",
            value: "5",
            color: "#f7aa6d"
        }
    ];
    const useRemove = (id: string) => {
        Alert.alert('Xác nhận', 'Quyết định xóa', [
            {
                text: 'Xóa', onPress: () => {
                    dispatch(useWorkAction().remove(id));
                    props.useReload();
                }
            },
            {
                text: 'Hủy', style: "cancel"
            }
        ])
    }
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) ) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() );
        }
    }


    return <WorkListRender {...props} listStatus={listStatus} formatDate={formatDate} useRemove={useRemove} works={works} />;
}