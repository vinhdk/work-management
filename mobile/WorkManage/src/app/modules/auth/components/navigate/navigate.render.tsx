import React from "react";
import { INavigateProps } from "./navigate.component";
import { View, Image, ActivityIndicator } from 'react-native';
import { styles } from './navigate.styles';
interface IRenderNavigateProps extends INavigateProps {

}
export const NavigateRender = (props: IRenderNavigateProps) => (
    <View style={styles.container}>
        <Image source={require("../../../../../assets/navigate.png")} style={styles.image} />
        <View style={styles.horizontal}>
            <ActivityIndicator size="large" color="#ffffff" />
            <ActivityIndicator size="large" color="#ffffff" />
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    </View>
);