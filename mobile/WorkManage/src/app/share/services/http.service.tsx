import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import AsyncStorage from '@react-native-community/async-storage';

export const useHttp = () => {
    const instance: AxiosInstance = axios.create({
        baseURL: `${environment.apiLink.endPoint}`,
    });
    instance.interceptors.request.use(async (value): Promise<AxiosRequestConfig> => {
        await AsyncStorage.getItem("wm-token").then(res => {
            value.headers.common['authorization'] = res ? JSON.parse(res) : "";
        });
        return Promise.resolve(value);
    });
    instance.interceptors.response.use((value): Promise<AxiosResponse> => {
        return Promise.resolve(value);
    });
    return instance;
}