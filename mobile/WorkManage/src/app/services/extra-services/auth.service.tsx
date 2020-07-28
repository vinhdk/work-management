import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { ProfileUM, ProfileVM, LoginGM, TokenVM, PasswordVM } from 'src/app/view-models';
import { environment } from 'src/environments/environment';

export const useAuthService = () => {
    const useCheckToken = (): Promise<AxiosResponse<ProfileVM>> => {
        return useHttp().get<ProfileVM>(`${environment.apiLink.extra.auth.main}`);
    }
    const useUpdate = (data: ProfileUM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.extra.auth.main}`, data);
    }
    const useUpdatePassWord = (data: PasswordVM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.extra.auth.password}`, data);
    }
    const useLogin = (data: LoginGM): Promise<AxiosResponse<TokenVM>> => {
        return useHttp().post<TokenVM>(`${environment.apiLink.extra.auth.token}`, data);
    }
    const useUpdateAvatar = (data: { data: string, uri: string, name: string, type: string }): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.extra.auth.avatar}`, data);
    }
    return { useCheckToken, useUpdate, useUpdatePassWord, useLogin, useUpdateAvatar };
}