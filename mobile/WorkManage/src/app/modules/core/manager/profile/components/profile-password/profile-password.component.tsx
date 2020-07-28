import React from 'react';
import { IProfileHomeProps } from "../../screens";
import { useDispatch } from 'react-redux';
import { IFormControl, IFormValidation, useFormService } from 'src/app/services';
import { useAuthAction } from 'src/app/actions';
import { ProfilePassWordRender } from './profile-password.render';

export interface IProfilePassWordProps extends IProfileHomeProps {
}
export const ProfilePassWordComponent = (props: IProfilePassWordProps) => {
    const dispatch = useDispatch();
    const initialForm: IFormControl = {
        "OldPassWord": {
            value: "",
            valid: false,
            fire: false,
        },
        "NewPassWord": {
            value: "",
            valid: false,
            fire: false,
        },
        "ConfirmPassWord": {
            value: "",
            valid: false,
            fire: false,
        }
    }
    const validation: IFormValidation = {
        "OldPassWord": {
            required: true
        },
        "NewPassWord": {
            required: true,

        },
        "ConfirmPassWord": {
            required: true,
            validator: {
                equalTo: "NewPassWord"
            }
        }
    }
    const useUpdate = (data: any) => {
        delete data.ConfirmPassWord;
        dispatch(useAuthAction().updatePassWord(data));
    }
    const { useHandleOnChange, useHandleOnSubmit, useCheckValid, useGetFormControl } = useFormService(initialForm, validation, useUpdate);

    return <ProfilePassWordRender {...props} useCheckValid={useCheckValid} useGetFormControl={useGetFormControl} useHandleOnSubmit={useHandleOnSubmit} useHandleOnChange={useHandleOnChange} />;

}