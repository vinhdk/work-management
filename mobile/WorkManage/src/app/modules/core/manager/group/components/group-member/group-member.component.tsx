import React, { useState } from "react";
import { RenderGroupMemberComponent } from "./group-member.render";
import { GroupVM, UserVM } from "src/app/view-models";
import { IGroupHomeProps } from "../../screens";
import { Alert } from "react-native";

export interface IGroupMemberProps extends IGroupHomeProps {
    group: GroupVM;
    accounts: UserVM[];
}

export const GroupMemberComponent = (props: IGroupMemberProps) => {
    const [account, setAccount] = useState<UserVM>(new UserVM({} as any))
    const [search, setSearch] = useState({ fullname: "" });
    const [openQr, setOpenQr] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const useSearch = (value: string) => {
        setSearch({ fullname: value })
    }
    const useTogglenQr = (value: boolean) => {
        setOpenQr(value);
    }
    const useRead = (e: any) => {
        const account = props.accounts.find(acc => acc.Id === e.data);
        if (!account) {
            Alert.alert('Thông báo', "Người này không phải là thành viên trong nhóm");
        } else {
            setAccount(account);
            setOpenDetail(true);
        }
        setOpenQr(false);
    }
    const useOpenDetail = (value: boolean) => {
        setOpenDetail(value);
    }
    return <RenderGroupMemberComponent account={account} useOpenDetail={useOpenDetail} useRead={useRead} useSearch={useSearch} useTogglenQr={useTogglenQr} openDetail={openDetail} search={search} {...props} openQr={openQr} />
}