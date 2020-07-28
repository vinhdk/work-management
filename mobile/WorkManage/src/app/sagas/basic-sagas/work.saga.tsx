import { put, call, takeLatest } from "redux-saga/effects";
import { WORKTYPE } from 'src/app/types';
import { useLoadingAction, useWorkAction } from "src/app/actions";
import { Work } from 'src/app/models';
import { useWorkService } from "src/app/services";

export const useWorkSaga = () => {
    function* useInit() {
        yield takeLatest(WORKTYPE.GETALL.FETCH, useGetAll);
        yield takeLatest(WORKTYPE.CREATE.FETCH, useCreate);
        yield takeLatest(WORKTYPE.UPDATE.FETCH, useUpdate);
        yield takeLatest(WORKTYPE.REMOVE.FETCH, useRemove);
    }
    function* useGetAll() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useWorkService().useGetAll);
            yield put(useWorkAction().getAllSuccess(data));
        } catch (error) {
            yield put(useWorkAction().getAllError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useCreate(action: Work) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useWorkService().useCreate, action.payload.create.fetch.data);
            yield put(useWorkAction().createSuccess(data));
        } catch (error) {
            yield put(useWorkAction().createError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdate(action: Work) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useWorkService().useUpdate, action.payload.update.fetch.data);
            yield put(useWorkAction().updateSuccess(data));
        } catch (error) {
            yield put(useWorkAction().updateError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useRemove(action: Work) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useWorkService().useRemove, action.payload.remove.fetch.data);
            yield put(useWorkAction().removeSuccess(data));
        } catch (error) {
            yield put(useWorkAction().removeError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }

    return { useInit };
}