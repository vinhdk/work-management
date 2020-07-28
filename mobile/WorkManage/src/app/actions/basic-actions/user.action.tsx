import { User } from "src/app/models"
import { USERTYPE } from "src/app/types"
import { UserVM, UserCM, UserUM } from 'src/app/view-models';
import { ActionCreatorsMapObject } from "redux";
import { Alert } from "react-native";

export const useUserAction = () => {
    const reset = (): User => {
        return provide(USERTYPE.RESET.FETCH, {});
    }
    const getAll = (): User => {
        return provide(USERTYPE.GETALL.FETCH, {});
    }
    const getAllSuccess = (data: Array<UserVM>): User => {
        return provide(USERTYPE.GETALL.SUCCESS, { getAll: { success: { data: data } } });
    }
    const getAllError = (error: any): User => {
        console.log(error.response);
        return provide(USERTYPE.GETALL.ERROR, {});
    }
    const create = (data: UserCM): User => {
        return provide(USERTYPE.CREATE.FETCH, { create: { fetch: { data: data } } });
    }
    const createSuccess = (data: UserVM): User => {
        Alert.alert('Thông báo', 'Tạo mới thành công');
        return provide(USERTYPE.CREATE.SUCCESS, { create: { success: { data: data } } });
    }
    const createError = (error: any): User => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(USERTYPE.CREATE.ERROR, {});
    }
    const update = (data: UserUM): User => {
        return provide(USERTYPE.UPDATE.FETCH, { update: { fetch: { data: data } } });
    }
    const updateSuccess = (data: UserVM): User => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(USERTYPE.UPDATE.SUCCESS, { update: { success: { data: data } } });
    }
    const updateError = (error: any): User => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(USERTYPE.UPDATE.ERROR, {});
    }
    const remove = (data: string): User => {
        return provide(USERTYPE.REMOVE.FETCH, { remove: { fetch: { data: data } } });
    }
    const removeSuccess = (data: string): User => {
        Alert.alert('Thông báo', 'Xóa thành công');
        return provide(USERTYPE.REMOVE.SUCCESS, { remove: { success: { data: data } } });
    }
    const removeError = (error: any): User => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(USERTYPE.REMOVE.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            getAll?: {
                success?: {
                    data: Array<UserVM>
                }
            },
            create?: {
                fetch?: {
                    data: UserCM
                },
                success?: {
                    data: UserVM
                }
            },
            update?: {
                fetch?: {
                    data: UserUM
                },
                success?: {
                    data: UserVM
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
    ): User => {
        return {
            type: type,
            payload: {
                getAll: {
                    success: {
                        data: payload.getAll ? payload.getAll.success ? payload.getAll.success.data : new Array<UserVM>() : new Array<UserVM>()
                    }
                },
                create: {
                    fetch: {
                        data: payload.create ? payload.create.fetch ? payload.create.fetch.data : new UserCM({} as any) : new UserCM({} as any)
                    },
                    success: {
                        data: payload.create ? payload.create.success ? payload.create.success.data : new UserVM({} as any) : new UserVM({} as any)
                    }
                },
                update: {
                    fetch: {
                        data: payload.update ? payload.update.fetch ? payload.update.fetch.data : new UserUM({} as any) : new UserUM({} as any)
                    },
                    success: {
                        data: payload.update ? payload.update.success ? payload.update.success.data : new UserVM({} as any) : new UserVM({} as any)
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
    const actions: ActionCreatorsMapObject<User> = {
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