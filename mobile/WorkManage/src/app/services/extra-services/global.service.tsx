import AsyncStorage from '@react-native-community/async-storage';
import { TokenVM } from 'src/app/view-models';
import { CompositeNavigationProp } from '@react-navigation/native';
export const useGlobalService = () => {
    const useSetToken = (UserName: string, token: TokenVM, navigation: CompositeNavigationProp<any, any>): Promise<string[]> => {
        AsyncStorage.setItem("wm-token", JSON.stringify(token.AccessToken));
        AsyncStorage.setItem("wm-username", JSON.stringify(UserName));
        AsyncStorage.setItem("wm-role", JSON.stringify(token.Role));
        navigation.navigate("Auth", { screen: "Navigate", params: {} });
        return AsyncStorage.getAllKeys();
    }
    const useClearToken = (navigation: CompositeNavigationProp<any, any>): Promise<string[]> => {
        AsyncStorage.clear().then(() => {
            navigation.navigate("Auth", { screen: "Navigate", params: {} });
        })
        return AsyncStorage.getAllKeys();
    }

    const useGoToLogin = (navigation: CompositeNavigationProp<any, any>): Promise<string[]> => {
        AsyncStorage.clear().then(() => {
            navigation.navigate("Auth", { screen: "Login", params: {} });
        })
        return AsyncStorage.getAllKeys();
    }

    return { useSetToken, useClearToken, useGoToLogin };
}