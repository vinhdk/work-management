import { put, call, takeLatest } from "redux-saga/effects";
import { USERTYPE } from 'src/app/types';
import { useLoadingAction, useUserAction } from "src/app/actions";
import { User } from 'src/app/models';
import { useUserService } from "src/app/services";

export const useUserSaga = () => {
    function* useInit() {
        yield takeLatest(USERTYPE.GETALL.FETCH, useGetAll);
        yield takeLatest(USERTYPE.CREATE.FETCH, useCreate);
        yield takeLatest(USERTYPE.UPDATE.FETCH, useUpdate);
        yield takeLatest(USERTYPE.REMOVE.FETCH, useRemove);
    }
    function* useGetAll() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useUserService().useGetAll);
            yield put(useUserAction().getAllSuccess(data));
        } catch (error) {
            yield put(useUserAction().getAllError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useCreate(action: User) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useUserService().useCreate, action.payload.create.fetch.data);
            yield put(useUserAction().createSuccess(data));
        } catch (error) {
            yield put(useUserAction().createError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdate(action: User) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useUserService().useUpdate, action.payload.update.fetch.data);
            yield put(useUserAction().updateSuccess(data));
        } catch (error) {
            yield put(useUserAction().updateError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useRemove(action: User) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useUserService().useRemove, action.payload.remove.fetch.data);
            yield put(useUserAction().removeSuccess(data));
        } catch (error) {
            yield put(useUserAction().removeError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }

    return { useInit };
}