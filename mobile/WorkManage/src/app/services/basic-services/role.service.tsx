import { useHttp } from 'src/app/share/services';
import { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { RoleVM } from 'src/app/view-models';

export const useRoleService = () => {
    const useGetAll = (): Promise<AxiosResponse<RoleVM[]>> => {
        return useHttp().get<RoleVM[]>(`${environment.apiLink.basic.role.main}`);
    }
    const useGetById = (id: string): Promise<AxiosResponse<RoleVM>> => {
        return useHttp().get<RoleVM>(`${environment.apiLink.basic.role.main}/${id}`);
    }
    return { useGetAll, useGetById };
}