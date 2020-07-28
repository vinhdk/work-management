import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGroupUpdateProps } from "../../group-update.component";
import { RootState } from "src/app/reducers";
import { RenderGroupUpdateMemberComponent } from "./group-update-member.render";
import { RoleVM, UserVM } from "src/app/view-models";
import { useUserAction, useRoleAction, useGroupAction } from "src/app/actions";

export interface IGroupUpdateMemberProps extends IGroupUpdateProps {
    Id: string;
}

export const GroupUpdateMemberComponent = (props: IGroupUpdateMemberProps) => {
    const dispatch = useDispatch();
    const users: Array<UserVM> = useSelector((state: RootState) => state.user.array).filter(e => e.GroupId === props.Id);
    const roles: Array<RoleVM> = useSelector((state: RootState) => state.role.array);
    const accounts: Array<UserVM> = useSelector((state: RootState) => state.user.array).filter(e => !e.GroupId);
    const [change, setChange] = useState(new Date());
    const useGetData: (roleName: "Manager" | "User", type: "search" | "data") => Array<UserVM> = (roleName: "Manager" | "User", type: "search" | "data") => {
        const role = roles.find(e => e.Name === roleName);
        return type === "search" ? accounts.filter((user: UserVM) => user.RoleId.includes(role ? role.Id : "")) : users.filter((user: UserVM) => user.RoleId.includes(role ? role.Id : ""));
    }
    const useChange = () => {
        setChange(new Date());
    }
    useEffect(() => {
        dispatch(useGroupAction().getAll());
        dispatch(useUserAction().getAll());
        dispatch(useRoleAction().getAll());
    }, [change]);
    return <RenderGroupUpdateMemberComponent useGetData={useGetData} useChange={useChange} {...props} />
}