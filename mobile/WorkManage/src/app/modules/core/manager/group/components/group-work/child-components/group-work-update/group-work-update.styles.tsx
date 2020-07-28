import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    form: {
        alignItems: "center",
        marginTop: 10
    },
    input: {
        width: width * 0.8,
        backgroundColor: 'transparent',
        marginBottom: 15,
        marginLeft: 0
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
        width: "50%"
    },
    button_text: {
        fontSize: 15
    },
    rowFront: {
        backgroundColor: '#ffffff',
        height: 50,
        alignItems: "center",
        borderColor: '#f1f1f1',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: width * 0.8,
        height: height * 0.3,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10
    }
});