import React from 'react';
import { useStyles } from './profile-qrcode.styles';
import { Text, Form, Item, Input, Button, Label, View } from 'native-base';
import { IProfileQrCodeProps } from "./profile-qrcode.component";
import { ProfileVM } from 'src/app/view-models';
import QRCode from 'react-native-qrcode-svg';

export interface IRenderProfileQrCodeProps extends IProfileQrCodeProps {
    profile: ProfileVM;
}
export const ProfileQrCodeRender = (props: IRenderProfileQrCodeProps) => (
    <View style={{justifyContent: "center", alignItems: 'center', width: "100%", height: "100%"}}>
        <QRCode
            size={200}
            logo={require("src/assets/logo.png")}
            logoSize={38}
            logoBackgroundColor='transparent'
            value={props.profile.Id}
        />
    </View>
)