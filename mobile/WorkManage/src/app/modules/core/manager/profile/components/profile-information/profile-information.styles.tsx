import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    input: {
        width: width * 0.8,
        backgroundColor: 'transparent',
        marginBottom: 15,
        marginLeft: 0
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    button_text: {
        fontSize: 15
    }
});