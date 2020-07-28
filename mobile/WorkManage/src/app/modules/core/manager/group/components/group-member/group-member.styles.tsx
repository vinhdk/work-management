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
        justifyContent: "center",
        marginBottom: 15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    input: {
        width: width * 0.8,
        backgroundColor: 'transparent',
        marginBottom: 15,
        marginLeft: 0
    },
});