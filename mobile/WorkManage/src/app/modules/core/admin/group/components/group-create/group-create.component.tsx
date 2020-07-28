import React from "react";
import { IGroupHomeProps } from "../../screens";
import { RenderGroupCreateComponent } from "./group-create.render";
import { useDispatch } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useGroupAction } from "src/app/actions";

export interface IGroupCreateProps extends IGroupHomeProps {
    useBack: () => void;
}

export const GroupCreateComponent = (props: IGroupCreateProps) => {
    const dispatch = useDispatch();
    const initialForm: IFormControl = {
        "Name": {
            value: "",
            valid: false,
            fire: false,
        },
    }
    const validation: IFormValidation = {
        "Name": {
            required: true
        },
    }
    const useUpdate = (data: any) => {
        dispatch(useGroupAction().create(data));
    }
    const { useHandleOnChange, useHandleOnSubmit, useCheckValid, useGetFormControl } = useFormService(initialForm, validation, useUpdate);
    return <RenderGroupCreateComponent {...props} useCheckValid={useCheckValid} useGetFormControl={useGetFormControl} useHandleOnSubmit={useHandleOnSubmit} useHandleOnChange={useHandleOnChange} />
}