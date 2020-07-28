import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export const useStyles = () => StyleSheet.create({
    form: {
        alignItems: "center",
        marginTop: 10
    },
});