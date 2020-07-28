import { put, call, takeLatest } from "redux-saga/effects";
import { AUTHTYPE } from 'src/app/types';
import { useLoadingAction, useAuthAction } from "src/app/actions";
import { Auth } from 'src/app/models';
import { useAuthService } from 'src/app/services';

export const useAuthSaga = () => {
    function* useInit() {
        yield takeLatest(AUTHTYPE.TOKEN.FETCH, useCheckToken);
        yield takeLatest(AUTHTYPE.PROFILE.FETCH, useUpdate);
        yield takeLatest(AUTHTYPE.PASSWORD.FETCH, useUpdatePassWord);
        yield takeLatest(AUTHTYPE.AVATAR.FETCH, useUpdateAvatar);
    }
    function* useCheckToken() {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useAuthService().useCheckToken);
            yield put(useAuthAction().getTokenSuccess(data));
        } catch (error) {
            yield put(useAuthAction().getTokenError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdate(action: Auth) {
        yield put(useLoadingAction().showLoader());
        try {
            yield call(useAuthService().useUpdate, action.payload.profile.fetch.data);
            yield put(useAuthAction().updateProfileSuccess(action.payload.profile.fetch.data));
        } catch (error) {
            yield put(useAuthAction().updateProfileError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdatePassWord(action: Auth) {
        yield put(useLoadingAction().showLoader());
        try {
            yield call(useAuthService().useUpdatePassWord, action.payload.password.fetch.data);
            yield put(useAuthAction().updatePassWordSuccess());
        } catch (error) {
            yield put(useAuthAction().updatePassWordError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    function* useUpdateAvatar(action: Auth) {
        yield put(useLoadingAction().showLoader());
        try {
            const { data } = yield call(useAuthService().useUpdateAvatar, action.payload.avatar.fetch.data);
            yield put(useAuthAction().updateAvatarSuccess(data));
        } catch (error) {
            yield put(useAuthAction().updateAvatarError(error));
        }
        yield put(useLoadingAction().hideLoader());
    }
    return { useInit };
}