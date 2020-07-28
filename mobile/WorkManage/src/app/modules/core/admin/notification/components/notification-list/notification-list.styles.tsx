import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const useStyles = () => StyleSheet.create({
    rowFront: {
        backgroundColor: '#ffffff',
        borderColor: '#f1f1f1',
        borderWidth: 2,
        padding: 20,
        flexDirection: "row",

    },
    container: {
    },
    list: {
    },
    title: {
        fontSize: 18
    },
    subTitle: {
        fontSize: 10
    },
    notseen: {
        backgroundColor: "#f6f6f6",
    },
    image: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 100,
    },
    noti: {
        marginLeft: 10

    },
});