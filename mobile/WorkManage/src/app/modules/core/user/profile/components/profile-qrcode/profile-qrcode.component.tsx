import React from 'react';
import { IProfileHomeProps } from "../../screens";
import { useDispatch, useSelector } from 'react-redux';
import { IFormControl, IFormValidation, useFormService } from 'src/app/services';
import { useAuthAction } from 'src/app/actions';
import { ProfileQrCodeRender } from './profile-qrcode.render';
import { ProfileVM } from 'src/app/view-models';
import { RootState } from 'src/app/reducers';

export interface IProfileQrCodeProps extends IProfileHomeProps {
}
export const ProfileQrCodeComponent = (props: IProfileQrCodeProps) => {
    const profile: ProfileVM = useSelector((state: RootState) => (state.auth.profile));
    return <ProfileQrCodeRender {...props} profile={profile}  />;

}