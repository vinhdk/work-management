import { put, call, takeLatest } from "redux-saga/effects";
import { ROLETYPE } from 'src/app/types';
import { useLoadingAction, useRoleAction } from "src/app/actions";
import { useRoleService } from "src/app/services";
export const useRoleSaga = () => {
    function* useInit() {
        yield takeLatest(ROLETYPE.GETALL.FETCH, useGetAll);
    }
    function* useGetAll() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useRoleService().useGetAll);
            yield put(useRoleAction().getAllSuccess(data));
        } catch (error) {
            yield put(useRoleAction().getAllError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }

    return { useInit };
}