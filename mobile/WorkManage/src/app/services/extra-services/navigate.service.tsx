import { CompositeNavigationProp } from '@react-navigation/native';
export const useNavigateService = () => {
    const useOpen = (navigation: CompositeNavigationProp<any, any>, key: string, name: string, params: object | undefined) => {
        navigation.navigate(key, { screen: name, params: params });
    }
    return { useOpen };
}