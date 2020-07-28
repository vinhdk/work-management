import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const useStyles = () => StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderColor: '#f1f1f1',
        borderWidth: 0,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    container: {
    },
    list: {
        marginTop: 15
    },
    row: {
        width: width,
        backgroundColor: 'transparent',
        marginBottom: 15,
        marginLeft: 0
    },
});