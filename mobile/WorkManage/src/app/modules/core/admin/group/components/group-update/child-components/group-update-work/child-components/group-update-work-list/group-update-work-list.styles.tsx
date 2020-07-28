import { StyleSheet } from "react-native";
export const useStyles = () => StyleSheet.create({
    rowFront: {
        backgroundColor: '#ffffff',
        height: 50,
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    container: {
        flex: 1
    },
    list: {
        marginTop: 15,
    }
});