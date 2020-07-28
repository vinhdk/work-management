import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    input: {
        width: width * 0.8,
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