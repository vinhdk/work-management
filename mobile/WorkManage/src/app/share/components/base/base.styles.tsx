import { StyleSheet } from "react-native";
export const useStyles = () => StyleSheet.create({
    show: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#00000033',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hide: {
        position: 'absolute',
        width: '0%',
        height: '0%',
        backgroundColor: '#ffffff',
    }
});