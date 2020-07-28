import { Role } from "src/app/models"
import { ROLETYPE } from "src/app/types"
import { RoleVM } from 'src/app/view-models';
import { ActionCreatorsMapObject } from "redux";

export const useRoleAction = () => {
    const reset = (): Role => {
        return provide(ROLETYPE.RESET.FETCH, {});
    }
    const getAll = (): Role => {
        return provide(ROLETYPE.GETALL.FETCH, {});
    }
    const getAllSuccess = (data: Array<RoleVM>): Role => {
        return provide(ROLETYPE.GETALL.SUCCESS, { getAll: { success: { data: data } } });
    }
    const getAllError = (error: any): Role => {
        console.log(error.response);
        return provide(ROLETYPE.GETALL.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            getAll?: {
                success?: {
                    data: Array<RoleVM>
                }
            }
        }
    ): Role => {
        return {
            type: type,
            payload: {
                getAll: {
                    success: {
                        data: payload.getAll ? payload.getAll.success ? payload.getAll.success.data : new Array<RoleVM>() : new Array<RoleVM>()
                    }
                }
            }
        }
    }
    const actions: ActionCreatorsMapObject<Role> = {
        reset: reset,
        getAll: getAll,
        getAllSuccess: getAllSuccess,
        getAllError: getAllError,
    }
    return actions;
}