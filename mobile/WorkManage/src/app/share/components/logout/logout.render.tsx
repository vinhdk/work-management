import React from 'react';
import { useStyles } from './logout.styles';
import { View, Text, Button } from 'native-base';
import { ILogoutProps } from './logout.component';
interface IRenderLogoutProps extends ILogoutProps {
    useLogout: () => void;
}
export const LogoutRender = (props: IRenderLogoutProps) => (
    <Button block rounded bordered onPress={props.useLogout} style={useStyles().button}>
        <Text>Đăng xuất</Text>
    </Button>
)