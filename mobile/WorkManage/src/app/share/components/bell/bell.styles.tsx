import { StyleSheet } from "react-native";
export const useStyles = () => StyleSheet.create({
    icon: {
        fontSize: 30,
        color: '#00a8cc',
        marginRight: 15
    },
    bell_count: {
        position: "absolute",
        backgroundColor: "red",
        width: 20,
        height: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        top: -1,
        right: 5,
        zIndex: 100

    },
    bell_text: {
        color: "white",
        fontSize: 10
    }
});