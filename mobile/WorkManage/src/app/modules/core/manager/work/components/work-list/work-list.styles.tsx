import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
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
    },
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
    image: {
        width: width * 0.8,
        height: height * 0.3,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10
    }
});