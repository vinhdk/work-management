import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { WorkVM, WorkCM, WorkUM } from 'src/app/view-models';

export const useWorkService = () => {
    const useGetAll = (): Promise<AxiosResponse<WorkVM[]>> => {
        return useHttp().get<WorkVM[]>(`${environment.apiLink.basic.work.main}`);
    }
    const useCreate = (data: WorkCM): Promise<AxiosResponse<WorkVM>> => {
        return useHttp().post<WorkVM>(`${environment.apiLink.basic.work.main}`, data);
    }
    const useUpdate = (data: WorkUM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.basic.work.main}`, data);
    }
    const useGetById = (id: string): Promise<AxiosResponse<WorkVM>> => {
        return useHttp().get<WorkVM>(`${environment.apiLink.basic.work.main}/${id}`);
    }
    const useRemove = (id: string): Promise<AxiosResponse<any>> => {
        return useHttp().delete<any>(`${environment.apiLink.basic.work.main}/${id}`);
    }
    return { useGetAll, useGetById, useCreate, useUpdate, useRemove };
}