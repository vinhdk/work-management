import React, { useEffect } from "react";
import { IAccountHomeProps } from "../../screens";
import { RenderAccountCreateComponent } from "./account-create.render";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useUserAction, useGroupAction, useRoleAction } from "src/app/actions";
import { RoleVM, GroupVM } from "src/app/view-models";
import { RootState } from "src/app/reducers";

export interface IAccountCreateProps extends IAccountHomeProps {
    useBack: () => void;
}

export const AccountCreateComponent = (props: IAccountCreateProps) => {
    const dispatch = useDispatch();
    const roles: Array<RoleVM> = useSelector((state: RootState) => state.role.array);
    const groups: Array<GroupVM> = useSelector((state: RootState) => state.group.array);
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) ) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() );
        }
    }
    const initialForm: IFormControl = {
        "UserName": {
            value: "",
            valid: false,
            fire: false,
        },
        "FullName": {
            value: "",
            valid: false,
            fire: false,
        },
        "Email": {
            value: "",
            valid: false,
            fire: false,
        },
        "Phone": {
            value: "",
            valid: false,
            fire: false,
        },
        "Gender": {
            value: true,
            valid: true,
            fire: true,
        },
        "BirthDate": {
            value: formatDate(new Date()),
            valid: true,
            fire: true,
        },
        "GroupId": {
            value: undefined,
            valid: true,
            fire: true,
        },
        "RoleId": {
            value: undefined,
            valid: true,
            fire: true,
        },
        "PassWord": {
            value: "",
            valid: true,
            fire: false,
        }
    }
    const validation: IFormValidation = {
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
        "PassWord": {
            required: true,
        }
    }
    const useUpdate = (data: any) => {
        dispatch(useUserAction().create(data));
    }
    useEffect(() => {
        dispatch(useRoleAction().getAll());
        dispatch(useGroupAction().getAll());
    }, []);
    const form = useFormService(initialForm, validation, useUpdate);
    return <RenderAccountCreateComponent {...props} extra={{ roles, groups }} formatDate={formatDate} {...form} />
}