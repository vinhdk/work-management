import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    rowFront: {
        backgroundColor: '#ffffff',
        alignItems: "center",
        borderColor: '#f1f1f1',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container: {
        flex: 1
    },
    icon: {
        paddingRight: 10
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    button_text: {
        fontSize: 15
    },
    selected: {
        backgroundColor: "#f2f2f2"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});