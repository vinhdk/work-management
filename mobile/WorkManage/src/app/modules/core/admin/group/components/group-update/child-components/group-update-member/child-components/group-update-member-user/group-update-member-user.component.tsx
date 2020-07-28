import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGroupUpdateMemberProps } from "../../group-update-member.component";
import { RenderGroupUpdateMemberUserComponent } from "./group-update-member-user.render";
import { UserVM } from "src/app/view-models";
import { Alert } from "react-native";
import { useUserAction } from "src/app/actions";

export interface IGroupUpdateMemberUserProps extends IGroupUpdateMemberProps {
    Id: string;
    accounts: UserVM[];
    data: UserVM[];
    useChange: () => void;
}

export const GroupUpdateMemberUserComponent = (props: IGroupUpdateMemberUserProps) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState({ fullname: "" });
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [openCreate, setOpenCreate] = useState(false);
    const useRemove = (user: UserVM) => {
        if (user.Works.length > 0) {
            Alert.alert('Thông báo', 'Người ngày còn việc chưa hoàn thành! Vui lòng giao cho người khác trước khi xóa', [
                {
                    text: 'Oke', style: "cancel"
                }
            ])
        } else {
            Alert.alert('Xác nhận', 'Quyết định xóa', [
                {
                    text: 'Xóa', onPress: () => {
                        const data: any = user;
                        data.GroupId = null;
                        dispatch(useUserAction().update(user));
                        props.useChange();
                    }
                },
                {
                    text: 'Hủy', style: "cancel"
                }
            ])
        }
    }
    const useSearch = (value: string) => {
        setSearch({ fullname: value })
    }
    const useSelect = (id: string | undefined) => {
        setSelected(id);
    }
    const useFormatName = (name: string) => {
        if (!name) {
            return "";
        }
        const words = name.split(" ");
        if (words.length > 0) {
            let result = "";
            for (let index = 0; index < words.length - 1; index++) {
                const element = words[index];
                result += element.charAt(0) + ".";
            }
            return result + words[words.length - 1];
        } else {
            return name;
        }
    }
    const useToggle = () => {
        setOpenCreate(!openCreate);
    }
    const useCreate = () => {
        dispatch(useUserAction().update({ Id: selected, GroupId: props.Id }));
        setSelected(undefined);
        setOpenCreate(false);
        props.useChange();
    }
    return <RenderGroupUpdateMemberUserComponent useSelect={useSelect} useFormatName={useFormatName} useToggle={useToggle} selected={selected} openCreate={openCreate} useRemove={useRemove} useCreate={useCreate} useSearch={useSearch} search={search} {...props} />
}