import { StyleSheet } from "react-native";
export const useStyles = () => StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        height: 50,
        borderColor: '#f1f1f1',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    container: {
        paddingVertical: 10
    },
    list: {
        marginTop: 10
    }
});