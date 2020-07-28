import { Group } from "src/app/models"
import { GROUPTYPE } from "src/app/types"
import { GroupVM, GroupCM, GroupUM } from 'src/app/view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Alert } from "react-native";

export const useGroupAction = () => {
    const reset = (): Group => {
        return provide(GROUPTYPE.RESET.FETCH, {});
    }
    const getAll = (): Group => {
        return provide(GROUPTYPE.GETALL.FETCH, {});
    }
    const getAllSuccess = (data: Array<GroupVM>): Group => {
        return provide(GROUPTYPE.GETALL.SUCCESS, { getAll: { success: { data: data } } });
    }
    const getAllError = (error: any): Group => {
        console.log(error.response);
        return provide(GROUPTYPE.GETALL.ERROR, {});
    }
    const create = (data: GroupCM): Group => {
        return provide(GROUPTYPE.CREATE.FETCH, { create: { fetch: { data: data } } });
    }
    const createSuccess = (data: GroupVM): Group => {
        Alert.alert('Thông báo', 'Tạo mới thành công');
        return provide(GROUPTYPE.CREATE.SUCCESS, { create: { success: { data: data } } });
    }
    const createError = (error: any): Group => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(GROUPTYPE.CREATE.ERROR, {});
    }
    const update = (data: GroupUM): Group => {
        return provide(GROUPTYPE.UPDATE.FETCH, { update: { fetch: { data: data } } });
    }
    const updateSuccess = (data: GroupVM): Group => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(GROUPTYPE.UPDATE.SUCCESS, { update: { success: { data: data } } });
    }
    const updateError = (error: any): Group => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(GROUPTYPE.UPDATE.ERROR, {});
    }
    const remove = (data: string): Group => {
        return provide(GROUPTYPE.REMOVE.FETCH, { remove: { fetch: { data: data } } });
    }
    const removeSuccess = (data: string): Group => {
        Alert.alert('Thông báo', 'Xóa thành công');
        return provide(GROUPTYPE.REMOVE.SUCCESS, { remove: { success: { data: data } } });
    }
    const removeError = (error: any): Group => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(GROUPTYPE.REMOVE.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            getAll?: {
                success?: {
                    data: Array<GroupVM>
                }
            },
            create?: {
                fetch?: {
                    data: GroupCM
                },
                success?: {
                    data: GroupVM
                }
            },
            update?: {
                fetch?: {
                    data: GroupUM
                },
                success?: {
                    data: GroupVM
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
    ): Group => {
        return {
            type: type,
            payload: {
                getAll: {
                    success: {
                        data: payload.getAll ? payload.getAll.success ? payload.getAll.success.data : new Array<GroupVM>() : new Array<GroupVM>()
                    }
                },
                create: {
                    fetch: {
                        data: payload.create ? payload.create.fetch ? payload.create.fetch.data : new GroupCM({} as any) : new GroupCM({} as any)
                    },
                    success: {
                        data: payload.create ? payload.create.success ? payload.create.success.data : new GroupVM({} as any) : new GroupVM({} as any)
                    }
                },
                update: {
                    fetch: {
                        data: payload.update ? payload.update.fetch ? payload.update.fetch.data : new GroupUM({} as any) : new GroupUM({} as any)
                    },
                    success: {
                        data: payload.update ? payload.update.success ? payload.update.success.data : new GroupVM({} as any) : new GroupVM({} as any)
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
    const actions: ActionCreatorsMapObject<Group> = {
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