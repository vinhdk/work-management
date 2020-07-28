import React, { useEffect } from 'react';
import { IProfileHomeProps } from "../../screens";
import { useDispatch, useSelector } from 'react-redux';
import { IFormControl, IFormValidation, useFormService } from 'src/app/services';
import { useAuthAction } from 'src/app/actions';
import { ProfileInformationRender } from './profile-information.render';
import { ProfileVM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers';
import Moment from 'moment';

export interface IProfileInformationProps extends IProfileHomeProps {
}
export const ProfileInformationComponent = (props: IProfileInformationProps) => {
    const dispatch = useDispatch();
    const profile: ProfileVM = useSelector((state: RootState) => (state.auth.profile));
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            const times = date.toLocaleString("en-US").split(",")[0].split("/");
            return times[2] + "-" + (parseInt(times[0]) < 10 ? "0" + times[0] : times[0]) + "-" + (parseInt(times[1]) < 10 ? "0" + times[1] : times[1]);
        }
    }
    const initialForm: IFormControl = {
        "Id": {
            value: profile.Id,
            valid: true,
            fire: true,
        },
        "FullName": {
            value: profile.FullName,
            valid: false,
            fire: false,
        },
        "Email": {
            value: profile.Email,
            valid: false,
            fire: false,
        },
        "Phone": {
            value: profile.Phone,
            valid: false,
            fire: false,
        },
        "Gender": {
            value: profile.Gender,
            valid: true,
            fire: false,
        },
        "BirthDate": {
            value: profile.BirthDate ? formatDate(profile.BirthDate) : undefined,
            valid: profile.BirthDate ? true : false,
            fire: false,
        }
    }
    const validation: IFormValidation = {
        "Id": {
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
        }
    }
    const useUpdate = (data: any) => {
        dispatch(useAuthAction().updateProfile(data));
    }
    const { useHandleOnChange, useHandleOnSubmit, useCheckValid, useGetFormControl } = useFormService(initialForm, validation, useUpdate);
    useEffect(() => {
        dispatch(useAuthAction().getToken());
    }, []);
    return <ProfileInformationRender {...props} formatDate={formatDate} useCheckValid={useCheckValid} useGetFormControl={useGetFormControl} useHandleOnSubmit={useHandleOnSubmit} useHandleOnChange={useHandleOnChange} />;

}