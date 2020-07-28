import { all } from "redux-saga/effects";
import { useGroupSaga } from './basic-sagas/group.saga';
import { useUserSaga } from './basic-sagas/user.saga';
import { useWorkSaga } from './basic-sagas/work.saga';
import { useRoleSaga } from './basic-sagas/role.saga';
import { useNotificationSaga } from './basic-sagas/notification.saga';
import { useAuthSaga } from './extra-sagas/auth.saga';
export const useRootSaga = () => {
    function* useInit() {
        yield all([
            useGroupSaga().useInit(),
            useUserSaga().useInit(),
            useWorkSaga().useInit(),
            useRoleSaga().useInit(),
            useAuthSaga().useInit(),
            useNotificationSaga().useInit(),
        ]);
    }
    return { useInit };
}