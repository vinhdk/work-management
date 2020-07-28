import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, List, ListItem, Left, Item, Input, Label, Icon, Body, Button, Right, Grid, Row, Col, InputGroup, Picker } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { IAccountHomeProps } from '../../screens';
import { UserVM, RoleVM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers/index';
import { useUserAction, useRoleAction } from 'src/app/actions';
import { AccountListRender } from './account-list.render';
export interface IAccountListProps extends IAccountHomeProps {
    useClickCreate: () => void;
    useClickUpdate: (value: string) => void;
}

export const AccountListComponent = (props: IAccountListProps) => {
    const users: Array<UserVM> = useSelector((state: RootState) => state.user.array);
    const roles: Array<RoleVM> = useSelector((state: RootState) => state.role.array);
    const [search, setSearch] = useState({ fullname: "", roleId: "" });
    const [change, setChange] = useState(new Date());
    const dispatch = useDispatch();
    const useFilter: () => Array<UserVM> = () => users.filter(user => user.RoleId.includes(search.roleId) && user.FullName.includes(search.fullname));
    const useRemove = (id: string) => {
        Alert.alert('Xác nhận', 'Quyết định xóa', [
            {
                text: 'Xóa', onPress: () => {
                    dispatch(useUserAction().remove(id));
                    setChange(new Date());
                }
            },
            {
                text: 'Hủy', style: "cancel"
            }
        ])
    }
    const useSearch = (value: string, key: string) => {
        setSearch({ ...search, [key]: value })
    }
    useEffect(() => {
        dispatch(useUserAction().getAll());
        dispatch(useRoleAction().getAll());
    }, [change]);

    return <AccountListRender {...props} extra={{ roles }} useRemove={useRemove} useFilter={useFilter} useSearch={useSearch} search={search} />;
}