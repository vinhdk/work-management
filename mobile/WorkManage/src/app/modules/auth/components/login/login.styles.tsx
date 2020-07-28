import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        height: '40%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    header_text: {
        fontWeight: "bold",
        fontFamily: "sans-serif-light",
        color: "#74b7c7",
        fontSize: 30
    },
    footer: {
        height: '60%',
        width: '100%',
        alignItems: "center",
    },
    input: {
        width: width * 0.8,
        paddingHorizontal: 7.5,
        paddingVertical: 7.5,
        backgroundColor: 'transparent',
        marginBottom: 15,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    button_text: {
        fontSize: 15
    }
});