import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    form: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    input: {
        width: width * 0.8,
        backgroundColor: 'transparent',
        marginBottom: 15,
        marginLeft: 0,
        paddingHorizontal: 10
    },
    view_button: {
        width: width * 0.8,
        borderColor: "#ffffff",
        alignSelf: "center",
        marginLeft: 0
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    button_text: {
        fontSize: 15
    },
});