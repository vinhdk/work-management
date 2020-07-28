import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { NotificationVM, NotificationCM, NotificationUM } from 'src/app/view-models';

export const useNotificationService = () => {
    const useGetAll = (): Promise<AxiosResponse<NotificationVM[]>> => {
        return useHttp().get<NotificationVM[]>(`${environment.apiLink.basic.notification.main}`);
    }
    const useCreate = (data: NotificationCM): Promise<AxiosResponse<NotificationVM>> => {
        return useHttp().post<NotificationVM>(`${environment.apiLink.basic.notification.main}`, data);
    }
    const useUpdate = (data: NotificationUM): Promise<AxiosResponse<any>> => {
        return useHttp().put<any>(`${environment.apiLink.basic.notification.main}`, data);
    }
    const useGetById = (id: string): Promise<AxiosResponse<NotificationVM>> => {
        return useHttp().get<NotificationVM>(`${environment.apiLink.basic.notification.main}/${id}`);
    }
    const useRemove = (id: string): Promise<AxiosResponse<any>> => {
        return useHttp().delete<any>(`${environment.apiLink.basic.notification.main}/${id}`);
    }
    return { useGetAll, useGetById, useCreate, useUpdate, useRemove };
}