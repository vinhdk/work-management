import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { environment } from 'src/app/../environments/environment';
import { GroupVM, GroupCM, GroupUM } from 'src/app/view-models';

export const useGroupService = () => {
    const useGetAll = (): Promise<AxiosResponse<GroupVM[]>> => {
        return useHttp().get<GroupVM[]>(`${environment.apiLink.basic.group.main}`);
    }
    const useCreate = (data: GroupCM): Promise<AxiosResponse<GroupVM>> => {
        return useHttp().post<GroupVM>(`${environment.apiLink.basic.group.main}`, data);
    }
    const useUpdate = (data: GroupUM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.basic.group.main}`, data);
    }
    const useGetById = (id: string): Promise<AxiosResponse<GroupVM>> => {
        return useHttp().get<GroupVM>(`${environment.apiLink.basic.group.main}/${id}`);
    }
    const useRemove = (id: string): Promise<AxiosResponse<any>> => {
        return useHttp().delete<any>(`${environment.apiLink.basic.group.main}/${id}`);
    }
    return { useGetAll, useGetById, useCreate, useUpdate, useRemove };
}