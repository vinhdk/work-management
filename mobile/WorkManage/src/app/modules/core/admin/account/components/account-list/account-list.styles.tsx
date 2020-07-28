import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const useStyles = () => StyleSheet.create({
    rowFront: {
        backgroundColor: '#ffffff',
        borderColor: '#f1f1f1',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        padding: 10
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    container: {
        height: height * 0.9
    },
    list: {
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});