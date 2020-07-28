import React, { useState, useEffect } from 'react';
import { useStyles } from './drawer.styles';
import { View, Icon, Body, Text, Right, List, ListItem, Grid, Col, Left } from 'native-base';
import { useNavigateService } from 'src/app/services';
import { CompositeNavigationProp, RouteProp, useNavigationState } from '@react-navigation/native';
import { DrawerRender } from './drawer.render';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/app/reducers';
import { useAuthAction } from 'src/app/actions';
import { Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { environment } from 'src/environments/environment';


export interface IDrawerProps {
    navigation: CompositeNavigationProp<any, any>;
    route: RouteProp<any, string>;
    useName: () => "Admin" | "User" | "Manager";
}
export const DrawerComponent = (props: IDrawerProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.profile);
    const [index, setIndex] = useState(0);
    const [change, setChange] = useState(new Date());
    const useSelectPhoto = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            title: 'Chọn 1 ảnh',
            chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
            takePhotoButtonTitle: 'Chụp ảnh',
            cancelButtonTitle: 'Hủy chọn',
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                Alert.alert("Cập nhật ảnh đại diện", "Quyết định thay đổi?", [{
                    text: "Xác nhận",
                    onPress: async () => {
                        dispatch(useAuthAction().updateAvatar({
                            data: response.data,
                            uri: response.uri,
                            name: response.fileName,
                            type: response.type
                        }));
                        setChange(new Date());
                    }
                },
                {
                    text: "Hủy",
                    style: "cancel"
                }
                ])
            }
        });
    }
    const useRender = () => {
        const list = new Array<JSX.Element>();
        const items = environment.router["App"].routes["Core"].routes[props.useName()];
        const routes: { [key: string]: { title: string, icon: string } } = items.routes;
        items.routeNames.forEach((key, i) => {
            const item = routes[key];
            list.push(
                <ListItem noBorder last key={i} style={[useStyles().item, i === index && useStyles().active]} onPress={() => {
                    useNavigateService().useOpen(props.navigation, props.useName(), key, {});
                    setIndex(i);
                }}>
                    <Left>
                        <Icon style={[useStyles().item_icon, i === index && { color: '#e1a451' }]} type="FontAwesome5" name={item.icon} />
                        <Text style={[useStyles().item_text, i === index && { color: '#e1a451' }]}>{item.title}</Text>
                    </Left>

                </ListItem>
            )
        });
        return list;
    }
    const useFormatName = (name: string) => {
        if (!name) {
            return "";
        }
        const words = name.split(" ");
        if (words.length > 0) {
            let result = "";
            for (let index = 0; index < words.length - 1; index++) {
                const element = words[index];
                result += element.charAt(0) + ".";
            }
            return result + words[words.length - 1];
        } else {
            return name;
        }
    }
    const usePerson = () => {
        const avatar = (
            <View>
                <Image source={profile ? profile.Avatar ? { uri: profile.Avatar } : require("src/assets/none.jpg") : require("src/assets/none.jpg")} style={useStyles().image} />
                <TouchableOpacity style={useStyles().button_img} onPress={useSelectPhoto}>
                    <Icon type="FontAwesome5" name="camera" style={useStyles().button_img_icon} />
                </TouchableOpacity>
            </View>
        )
        return (
            <View style={useStyles().person}>
                {avatar}
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                    useNavigateService().useOpen(props.navigation, props.useName(), 'Profile', {});
                    setIndex(-1);
                }}>
                    <Text style={useStyles().personName}>{useFormatName(profile.FullName)}</Text>
                    <Icon style={{ color: '#00a8cc' }} name="edit" type="FontAwesome5"></Icon>
                </TouchableOpacity>
            </View>
        )
    }
    useEffect(() => {
        dispatch(useAuthAction().getToken());
    }, [change]);
    return <DrawerRender {...props} useRender={useRender} usePerson={usePerson} />;
}