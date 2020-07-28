import { Work } from "src/app/models"
import { WORKTYPE } from "src/app/types"
import { WorkVM, WorkCM, WorkUM } from 'src/app/view-models';
import { ActionCreatorsMapObject } from "redux";
import { Alert } from "react-native";

export const useWorkAction = () => {
    const reset = (): Work => {
        return provide(WORKTYPE.RESET.FETCH, {});
    }
    const getAll = (): Work => {
        return provide(WORKTYPE.GETALL.FETCH, {});
    }
    const getAllSuccess = (data: Array<WorkVM>): Work => {
        return provide(WORKTYPE.GETALL.SUCCESS, { getAll: { success: { data: data } } });
    }
    const getAllError = (error: any): Work => {
        console.log(error.response);
        return provide(WORKTYPE.GETALL.ERROR, {});
    }
    const create = (data: WorkCM): Work => {
        return provide(WORKTYPE.CREATE.FETCH, { create: { fetch: { data: data } } });
    }
    const createSuccess = (data: WorkVM): Work => {
        Alert.alert('Thông báo', 'Tạo mới thành công');
        return provide(WORKTYPE.CREATE.SUCCESS, { create: { success: { data: data } } });
    }
    const createError = (error: any): Work => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(WORKTYPE.CREATE.ERROR, {});
    }
    const update = (data: WorkUM): Work => {
        return provide(WORKTYPE.UPDATE.FETCH, { update: { fetch: { data: data } } });
    }
    const updateSuccess = (data: WorkVM): Work => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(WORKTYPE.UPDATE.SUCCESS, { update: { success: { data: data } } });
    }
    const updateError = (error: any): Work => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(WORKTYPE.UPDATE.ERROR, {});
    }
    const remove = (data: string): Work => {
        return provide(WORKTYPE.REMOVE.FETCH, { remove: { fetch: { data: data } } });
    }
    const removeSuccess = (data: string): Work => {
        Alert.alert('Thông báo', 'Xóa thành công');
        return provide(WORKTYPE.REMOVE.SUCCESS, { remove: { success: { data: data } } });
    }
    const removeError = (error: any): Work => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(WORKTYPE.REMOVE.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            getAll?: {
                success?: {
                    data: Array<WorkVM>
                }
            },
            create?: {
                fetch?: {
                    data: WorkCM
                },
                success?: {
                    data: WorkVM
                }
            },
            update?: {
                fetch?: {
                    data: WorkUM
                },
                success?: {
                    data: WorkVM
                }
            },
            remove?: {
                fetch?: {
                    data: string
                },
                success?: {
                    data: string
                }
            }
        }
    ): Work => {
        return {
            type: type,
            payload: {
                getAll: {
                    success: {
                        data: payload.getAll ? payload.getAll.success ? payload.getAll.success.data : new Array<WorkVM>() : new Array<WorkVM>()
                    }
                },
                create: {
                    fetch: {
                        data: payload.create ? payload.create.fetch ? payload.create.fetch.data : new WorkCM({} as any) : new WorkCM({} as any)
                    },
                    success: {
                        data: payload.create ? payload.create.success ? payload.create.success.data : new WorkVM({} as any) : new WorkVM({} as any)
                    }
                },
                update: {
                    fetch: {
                        data: payload.update ? payload.update.fetch ? payload.update.fetch.data : new WorkUM({} as any) : new WorkUM({} as any)
                    },
                    success: {
                        data: payload.update ? payload.update.success ? payload.update.success.data : new WorkVM({} as any) : new WorkVM({} as any)
                    }
                },
                remove: {
                    fetch: {
                        data: payload.remove ? payload.remove.fetch ? payload.remove.fetch.data : "" : ""
                    },
                    success: {
                        data: payload.remove ? payload.remove.success ? payload.remove.success.data : "" : ""
                    }
                }
            }
        }
    }
    const actions: ActionCreatorsMapObject<Work> = {
        reset: reset,
        getAll: getAll,
        getAllSuccess: getAllSuccess,
        getAllError: getAllError,
        create: create,
        createSuccess: createSuccess,
        createError: createError,
        update: update,
        updateSuccess: updateSuccess,
        updateError: updateError,
        remove: remove,
        removeSuccess: removeSuccess,
        removeError: removeError
    }
    return actions;
}