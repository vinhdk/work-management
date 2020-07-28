import React, { useEffect } from "react";
import { IAccountHomeProps } from "../../screens";
import { RenderAccountUpdateComponent } from "./account-update.render";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useUserAction, useGroupAction, useRoleAction } from "src/app/actions";
import { RoleVM, GroupVM, UserVM } from "src/app/view-models";
import { RootState } from "src/app/reducers";

export interface IAccountUpdateProps extends IAccountHomeProps {
    useBack: () => void;
    Id: string;
}

export const AccountUpdateComponent = (props: IAccountUpdateProps) => {
    const dispatch = useDispatch();
    const roles: Array<RoleVM> = useSelector((state: RootState) => state.role.array);
    const groups: Array<GroupVM> = useSelector((state: RootState) => state.group.array);
    const users: Array<UserVM> = useSelector((state: RootState) => state.user.array);
    const user = users.find(e => e.Id === props.Id);
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) ) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() );
        }
    }
    const initialForm: IFormControl = {
        "Id": {
            value: user ? user.Id : "",
            valid: true,
            fire: true,
        },
        "UserName": {
            value: user ? user.UserName : "",
            valid: true,
            fire: true,
        },
        "FullName": {
            value: user ? user.FullName : "",
            valid: false,
            fire: false,
        },
        "Email": {
            value: user ? user.Email : "",
            valid: false,
            fire: false,
        },
        "Phone": {
            value: user ? user.Phone : "",
            valid: false,
            fire: false,
        },
        "Gender": {
            value: user ? user.Gender : undefined,
            valid: true,
            fire: true,
        },
        "BirthDate": {
            value: formatDate(user ? user.BirthDate ? user.BirthDate : new Date() : new Date()),
            valid: true,
            fire: true,
        },
        "GroupId": {
            value: user?.GroupId,
            valid: true,
            fire: true,
        },
        "RoleId": {
            value: user?.RoleId,
            valid: true,
            fire: true,
        },
    }
    const validation: IFormValidation = {
        "Id": {
            required: true
        },
        "UserName": {
            required: true
        },
        "FullName": {
            required: true
        },
        "Email": {
            required: true,
            validator: {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            }
        },
        "Phone": {
            required: true,
            validator: {
                pattern: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
            }
        },
        "Gender": {
            required: false
        },
        "BirthDate": {
            required: false
        },
        "GroupId": {
            required: false,
        },
        "RoleId": {
            required: false,
        },
    }
    const useUpdate = (data: any) => {
        dispatch(useUserAction().update(data));
    }
    useEffect(() => {
        dispatch(useRoleAction().getAll());
        dispatch(useGroupAction().getAll());
        dispatch(useUserAction().getAll());
    }, []);
    const form= useFormService(initialForm, validation, useUpdate);
    return <RenderAccountUpdateComponent {...props} extra={{ roles, groups }} formatDate={formatDate} {...form} />
}