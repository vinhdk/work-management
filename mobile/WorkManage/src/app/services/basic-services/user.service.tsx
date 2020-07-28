import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { UserVM, UserCM, UserUM } from 'src/app/view-models';

export const useUserService = () => {
    const useGetAll = (): Promise<AxiosResponse<UserVM[]>> => {
        return useHttp().get<UserVM[]>(`${environment.apiLink.basic.user.main}`);
    }
    const useCreate = (data: UserCM): Promise<AxiosResponse<UserVM>> => {
        return useHttp().post<UserVM>(`${environment.apiLink.basic.user.main}`, data);
    }
    const useUpdate = (data: UserUM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.basic.user.main}`, data);
    }
    const useGetById = (id: string): Promise<AxiosResponse<UserVM>> => {
        return useHttp().get<UserVM>(`${environment.apiLink.basic.user.main}/${id}`);
    }
    const useRemove = (id: string): Promise<AxiosResponse<any>> => {
        return useHttp().delete<any>(`${environment.apiLink.basic.user.main}/${id}`);
    }
    return { useGetAll, useGetById, useCreate, useUpdate, useRemove };
}