import { Notification } from "src/app/models"
import { NOTIFICATIONTYPE } from "src/app/types"
import { NotificationVM, NotificationCM, NotificationUM } from 'src/app/view-models';
import { ActionCreatorsMapObject } from "redux";

export const useNotificationAction = () => {
    const reset = (): Notification => {
        return provide(NOTIFICATIONTYPE.RESET.FETCH, {});
    }
    const getAll = (): Notification => {
        return provide(NOTIFICATIONTYPE.GETALL.FETCH, {});
    }
    const getAllSuccess = (data: Array<NotificationVM>): Notification => {
        return provide(NOTIFICATIONTYPE.GETALL.SUCCESS, { getAll: { success: { data: data } } });
    }
    const getAllError = (error: any): Notification => {
        console.log(error.response);
        return provide(NOTIFICATIONTYPE.GETALL.ERROR, {});
    }
    const create = (data: NotificationCM): Notification => {
        return provide(NOTIFICATIONTYPE.CREATE.FETCH, { create: { fetch: { data: data } } });
    }
    const createSuccess = (data: NotificationVM): Notification => {
        return provide(NOTIFICATIONTYPE.CREATE.SUCCESS, { create: { success: { data: data } } });
    }
    const createError = (error: any): Notification => {
        console.log(error.response);
        return provide(NOTIFICATIONTYPE.CREATE.ERROR, {});
    }
    const update = (data: NotificationUM): Notification => {
        return provide(NOTIFICATIONTYPE.UPDATE.FETCH, { update: { fetch: { data: data } } });
    }
    const updateSuccess = (data: NotificationVM): Notification => {
        return provide(NOTIFICATIONTYPE.UPDATE.SUCCESS, { update: { success: { data: data } } });
    }
    const updateError = (error: any): Notification => {
        console.log(error.response);
        return provide(NOTIFICATIONTYPE.UPDATE.ERROR, {});
    }
    const remove = (data: string): Notification => {
        return provide(NOTIFICATIONTYPE.REMOVE.FETCH, { remove: { fetch: { data: data } } });
    }
    const removeSuccess = (data: string): Notification => {
        return provide(NOTIFICATIONTYPE.REMOVE.SUCCESS, { remove: { success: { data: data } } });
    }
    const removeError = (error: any): Notification => {
        console.log(error.response);
        return provide(NOTIFICATIONTYPE.REMOVE.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            getAll?: {
                success?: {
                    data: Array<NotificationVM>
                }
            },
            create?: {
                fetch?: {
                    data: NotificationCM
                },
                success?: {
                    data: NotificationVM
                }
            },
            update?: {
                fetch?: {
                    data: NotificationUM
                },
                success?: {
                    data: NotificationVM
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
    ): Notification => {
        return {
            type: type,
            payload: {
                getAll: {
                    success: {
                        data: payload.getAll ? payload.getAll.success ? payload.getAll.success.data : new Array<NotificationVM>() : new Array<NotificationVM>()
                    }
                },
                create: {
                    fetch: {
                        data: payload.create ? payload.create.fetch ? payload.create.fetch.data : new NotificationCM({} as any) : new NotificationCM({} as any)
                    },
                    success: {
                        data: payload.create ? payload.create.success ? payload.create.success.data : new NotificationVM({} as any) : new NotificationVM({} as any)
                    }
                },
                update: {
                    fetch: {
                        data: payload.update ? payload.update.fetch ? payload.update.fetch.data : new NotificationUM({} as any) : new NotificationUM({} as any)
                    },
                    success: {
                        data: payload.update ? payload.update.success ? payload.update.success.data : new NotificationVM({} as any) : new NotificationVM({} as any)
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
    const actions: ActionCreatorsMapObject<Notification> = {
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