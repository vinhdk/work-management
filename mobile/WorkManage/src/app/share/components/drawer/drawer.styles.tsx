import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    active: {
        backgroundColor: 'antiquewhite',
    },
    item: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    item_icon: {
        width: 25
    },
    item_text: {
        textAlign: "left",
        marginLeft: 20 
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BEE"
    },
    person: {
        padding: 10,
        alignItems: "center",
    },
    personName: {
        fontWeight: "bold",
        fontFamily: "aria",
        fontStyle: "italic",
        fontSize: 20,
        color: "#00a8cc",
        marginRight: 5
    },
    image: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 150
    },
    button_img: {
        position: "absolute",
        top: width * 0.23,
        right: width * 0.02,
        borderRadius: width * 0.03,
        width: width * 0.06,
        height: width * 0.06,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
    },
    button_img_icon: {
        fontSize: 10,
        color: "black",
    },
});