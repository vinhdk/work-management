import React from "react";
import { ILoginProps } from "./login.component";
import { View, Image, ImageBackground } from 'react-native';
import { styles } from './login.styles';
import { Form, Item, Input, Button, Text, Icon } from 'native-base';
interface IRenderLoginProps extends ILoginProps {
    useCheckValid: () => boolean,
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; }
    useHandleOnChange: ({ name, value }: any) => void,
    useHandleOnSubmit: () => void,
}
export const LoginRender = (props: IRenderLoginProps) => (
    <ImageBackground source={require("../../../../../assets/bg.jpeg")} style={styles.container}>
        <View style={styles.header}>
            <Image source={require("../../../../../assets/navigate.png")} style={{ opacity: 0.5 }} />
            <Text style={styles.header_text}>Quản lý công việc</Text>
        </View>
        <View style={styles.footer}>
            <Form>
                <Item rounded last
                    style={{ ...styles.input, borderColor: (!props.useGetFormControl("UserName").valid && props.useGetFormControl("UserName").fire) ? "#bf5346" : "#f2f2f2" }}>
                    <Icon active name='person' style={{ color: "#201f1b" }} />
                    <Input
                        placeholder="Tên đăng nhập"
                        onChangeText={value => { props.useHandleOnChange({ name: 'UserName', value }) }} />
                </Item>
                <Item rounded last
                    style={{ ...styles.input, borderColor: (!props.useGetFormControl("PassWord").valid && props.useGetFormControl("PassWord").fire) ? "#bf5346" : "#f2f2f2" }}>
                    <Icon active name='key' style={{ color: "#201f1b" }} />
                    <Input
                        secureTextEntry={true}
                        placeholder="Mật khẩu"
                        onChangeText={value => { props.useHandleOnChange({ name: "PassWord", value }) }} />
                </Item>
                <Button rounded disabled={!props.useCheckValid()} large style={{ ...styles.button, backgroundColor: props.useCheckValid() ? "#bf5346" : "#c6cdd7" }} onPress={props.useHandleOnSubmit}>
                    <Text style={styles.button_text}>Đăng nhập</Text>
                </Button>
            </Form>
        </View>
    </ImageBackground>

);