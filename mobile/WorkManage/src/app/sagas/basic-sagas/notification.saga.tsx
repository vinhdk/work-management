import { put, call, takeLatest } from "redux-saga/effects";
import { NOTIFICATIONTYPE } from 'src/app/types';
import { useLoadingAction, useNotificationAction } from "src/app/actions";
import { Notification } from 'src/app/models';
import { useNotificationService } from "src/app/services";

export const useNotificationSaga = () => {
    function* useInit() {
        yield takeLatest(NOTIFICATIONTYPE.GETALL.FETCH, useGetAll);
        yield takeLatest(NOTIFICATIONTYPE.CREATE.FETCH, useCreate);
        yield takeLatest(NOTIFICATIONTYPE.UPDATE.FETCH, useUpdate);
        yield takeLatest(NOTIFICATIONTYPE.REMOVE.FETCH, useRemove);
    }
    function* useGetAll() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useNotificationService().useGetAll);
            yield put(useNotificationAction().getAllSuccess(data));
        } catch (error) {
            yield put(useNotificationAction().getAllError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useCreate(action: Notification) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useNotificationService().useCreate, action.payload.create.fetch.data);
            yield put(useNotificationAction().createSuccess(data));
        } catch (error) {
            yield put(useNotificationAction().createError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdate(action: Notification) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useNotificationService().useUpdate, action.payload.update.fetch.data);
            yield put(useNotificationAction().updateSuccess(data));
        } catch (error) {
            yield put(useNotificationAction().updateError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useRemove(action: Notification) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useNotificationService().useRemove, action.payload.remove.fetch.data);
            yield put(useNotificationAction().removeSuccess(data));
        } catch (error) {
            yield put(useNotificationAction().removeError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }

    return { useInit };
}