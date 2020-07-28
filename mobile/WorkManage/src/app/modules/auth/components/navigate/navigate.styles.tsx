import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BEE"
    },
    image: {
        width: 100,
        height: 100
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});