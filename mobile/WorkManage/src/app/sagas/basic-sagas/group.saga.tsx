import { put, call, takeLatest } from "redux-saga/effects";
import { GROUPTYPE } from 'src/app/types';
import { useLoadingAction, useGroupAction } from "src/app/actions";
import { Group } from 'src/app/models';
import { useGroupService } from 'src/app/services';

export const useGroupSaga = () => {
    function* useInit() {
        yield takeLatest(GROUPTYPE.GETALL.FETCH, useGetAll);
        yield takeLatest(GROUPTYPE.CREATE.FETCH, useCreate);
        yield takeLatest(GROUPTYPE.UPDATE.FETCH, useUpdate);
        yield takeLatest(GROUPTYPE.REMOVE.FETCH, useRemove);
    }
    function* useGetAll() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useGroupService().useGetAll);
            yield put(useGroupAction().getAllSuccess(data));
        } catch (error) {
            yield put(useGroupAction().getAllError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useCreate(action: Group) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useGroupService().useCreate, action.payload.create.fetch.data);
            yield put(useGroupAction().createSuccess(data));
        } catch (error) {
            yield put(useGroupAction().createError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdate(action: Group) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useGroupService().useUpdate, action.payload.update.fetch.data);
            yield put(useGroupAction().updateSuccess(data));
        } catch (error) {
            yield put(useGroupAction().updateError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useRemove(action: Group) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useGroupService().useRemove, action.payload.remove.fetch.data);
            yield put(useGroupAction().removeSuccess(data));
        } catch (error) {
            yield put(useGroupAction().removeError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }

    return { useInit };
}