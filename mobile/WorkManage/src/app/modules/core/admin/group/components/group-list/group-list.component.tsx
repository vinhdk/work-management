import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { IGroupHomeProps } from '../../screens';
import { GroupVM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers/index';
import { useGroupAction } from 'src/app/actions';
import { GroupListRender } from './group-list.render';
export interface IGroupListProps extends IGroupHomeProps {
    useClickCreate: () => void;
    useClickUpdate: (value: string) => void;
}

export const GroupListComponent = (props: IGroupListProps) => {
    const groups: Array<GroupVM> = useSelector((state: RootState) => state.group.array);
    const [search, setSearch] = useState({ name: "" });
    const dispatch = useDispatch();
    const [change, setChange] = useState(new Date());
    const useFilter: () => Array<GroupVM> = () => groups.filter(user => user.Name.includes(search.name));
    const useRemove = (id: string) => {
        if ((groups.find(group => group.Id === id) || { Users: [] }).Users.length > 0) {
            Alert.alert('Thông báo', 'Nhóm này còn nhiều thành viên, vui lòng đổi nhóm trước khi xóa', [
                {
                    text: 'OKE', style: "cancel"
                }
            ])
        } else {
            Alert.alert('Xác nhận', 'Quyết định xóa', [
                {
                    text: 'Xóa', onPress: () => {
                        dispatch(useGroupAction().remove(id));
                        setChange(new Date());
                    }
                },
                {
                    text: 'Hủy', style: "cancel"
                }
            ])
        }

    }
    const useSearch = (value: string, key: string) => {
        setSearch({ ...search, [key]: value })
    }
    useEffect(() => {
        dispatch(useGroupAction().getAll());
    }, [change]);

    return <GroupListRender {...props} useRemove={useRemove} useFilter={useFilter} useSearch={useSearch} search={search} />;
}