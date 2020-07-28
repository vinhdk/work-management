import React from "react";
import { View, Form, Item, Label, Input, DatePicker, Picker, Button, Text, Tabs, Tab, TabHeading, Icon } from "native-base";
import { IAccountCreateProps } from "./account-create.component";
import { RoleVM, GroupVM } from "src/app/view-models";
import { useStyles } from "./account-create.styles";

export interface IRenderAccountCreateProps extends IAccountCreateProps {
    useCheckValid: () => boolean;
    useGetFormControl: (name: string) => { value: any; valid: boolean; fire: boolean; };
    useHandleOnSubmit: () => void;
    useHandleOnChange: ({ name, value }: any) => void;
    formatDate: (date: Date) => string;
    extra: { roles: RoleVM[], groups: GroupVM[] };
}

export const RenderAccountCreateComponent = (props: IRenderAccountCreateProps) => (
    <Form style={{ flex: 1 }}>
        <Tabs style={{ height: "85%" }}>
            <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="info-circle" type="FontAwesome5" /><Text style={{ color: "#00a8cc" }}>Thông tin</Text></TabHeading>}>
                <View style={useStyles().form}>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("FullName").valid && props.useGetFormControl("FullName").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("FullName").valid && props.useGetFormControl("FullName").fire) ? "red" : "black" }} type="FontAwesome5" name="signature" />
                        <Input placeholder="Họ và tên" value={props.useGetFormControl("FullName").value} onChangeText={value => { props.useHandleOnChange({ name: 'FullName', value }) }} />
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Email").valid && props.useGetFormControl("Email").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("Email").valid && props.useGetFormControl("Email").fire) ? "red" : "black" }} type="FontAwesome5" name="envelope" />
                        <Input placeholder="Thư điện tử" value={props.useGetFormControl("Email").value} onChangeText={value => { props.useHandleOnChange({ name: "Email", value }) }} />
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Phone").valid && props.useGetFormControl("Phone").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("Phone").valid && props.useGetFormControl("Phone").fire) ? "red" : "black" }} type="FontAwesome5" name="phone-volume" />
                        <Input placeholder="Số điện thoại" value={props.useGetFormControl("Phone").value} onChangeText={value => { props.useHandleOnChange({ name: "Phone", value }) }} />
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("BirthDate").valid && props.useGetFormControl("BirthDate").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("BirthDate").valid && props.useGetFormControl("BirthDate").fire) ? "red" : "black" }} type="FontAwesome5" name="gifts" />
                        <Input placeholder="Sinh nhật" value={props.useGetFormControl("BirthDate").value} editable={false} />
                        <DatePicker
                            animationType={"fade"}
                            androidMode="default"
                            placeHolderText="Chọn"
                            formatChosenDate={() => {
                                return "Chọn";
                            }}
                            onDateChange={value => {
                                props.useHandleOnChange({ name: "BirthDate", value: props.formatDate(value) });
                            }}
                            disabled={false}
                        />
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("Gender").valid && props.useGetFormControl("Gender").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("Gender").valid && props.useGetFormControl("Gender").fire) ? "red" : "black" }} type="FontAwesome5" name="venus-mars" />
                        <Input placeholder="Giới tính" editable={false} />
                        <Picker
                            mode="dropdown"
                            selectedValue={props.useGetFormControl("Gender").value}
                            onValueChange={value => {
                                props.useHandleOnChange({ name: "Gender", value });
                            }}
                        >
                            <Picker.Item label="Không" value={undefined} />
                            <Picker.Item label="Nam" value={true} />
                            <Picker.Item label="Nữ" value={false} />
                        </Picker>
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("RoleId").valid && props.useGetFormControl("RoleId").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("RoleId").valid && props.useGetFormControl("RoleId").fire) ? "red" : "black" }} type="FontAwesome5" name="car-battery" />
                        <Input placeholder="Quyền hạn" editable={false} />
                        <Picker
                            mode="dropdown"
                            selectedValue={props.useGetFormControl("RoleId").value}
                            onValueChange={value => {
                                props.useHandleOnChange({ name: "RoleId", value });
                            }} >
                            <Picker.Item label="Không chọn" value={null} />
                            {props.extra.roles.map((e, i) => <Picker.Item label={e.Name} value={e.Id} />)}
                        </Picker>
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("GroupId").valid && props.useGetFormControl("GroupId").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("GroupId").valid && props.useGetFormControl("GroupId").fire) ? "red" : "black" }} type="FontAwesome5" name="campground" />
                        <Input placeholder="Phân nhóm" editable={false} />
                        <Picker
                            mode="dropdown"
                            selectedValue={props.useGetFormControl("GroupId").value}
                            onValueChange={value => {
                                props.useHandleOnChange({ name: "GroupId", value });
                            }}
                        >
                            <Picker.Item label="Không chọn" value={null} />
                            {props.extra.groups.map((e, i) => <Picker.Item label={e.Name} value={e.Id} />)}
                        </Picker>
                    </Item>
                </View >
            </Tab>
            <Tab heading={<TabHeading style={{ backgroundColor: "#BEE" }}><Icon style={{ color: "#00a8cc" }} name="user-circle" type="FontAwesome5" /><Text style={{ color: "#00a8cc" }}>Tải khoản</Text></TabHeading>}>
                <Form style={useStyles().form}>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("UserName").valid && props.useGetFormControl("UserName").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("UserName").valid && props.useGetFormControl("UserName").fire) ? "red" : "black" }} type="FontAwesome5" name="user" />
                        <Input placeholder="Tên tài khoản" value={props.useGetFormControl("UserName").value} onChangeText={value => { props.useHandleOnChange({ name: 'UserName', value }) }} />
                    </Item>
                    <Item regular
                        style={{ ...useStyles().input, borderColor: (!props.useGetFormControl("PassWord").valid && props.useGetFormControl("PassWord").fire) ? "red" : "black" }}>
                        <Icon style={{ color: (!props.useGetFormControl("PassWord").valid && props.useGetFormControl("PassWord").fire) ? "red" : "black" }} type="FontAwesome5" name="key" />
                        <Input placeholder="Mật khẩu" secureTextEntry={true} value={props.useGetFormControl("PassWord").value} onChangeText={value => { props.useHandleOnChange({ name: 'PassWord', value }) }} />
                    </Item>
                </Form>
            </Tab>
        </Tabs>
        <Item style={useStyles().view_button}>
            <Button bordered disabled={!props.useCheckValid()} style={{ ...useStyles().button }} onPress={props.useHandleOnSubmit}>
                <Text style={useStyles().button_text}>Xác nhận</Text>
            </Button>
            <Button bordered style={{ ...useStyles().button }} danger onPress={props.useBack}>
                <Text style={useStyles().button_text}>Quay lại</Text>
            </Button>
        </Item>
    </Form>


)