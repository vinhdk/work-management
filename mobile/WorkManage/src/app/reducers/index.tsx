import { combineReducers, Reducer, CombinedState } from "redux";
import { useLoadingReducer } from "./extra-reducers/loading.reducer";
import { useRoleReducer } from './basic-reducers/role.reducer';
import { useWorkReducer } from "./basic-reducers/work.reducer";
import { useUserReducer } from "./basic-reducers/user.reducer";
import { useGroupReducer } from "./basic-reducers/group.reducer";
import { useNotificationReducer } from "./basic-reducers/notification.reducer";
import { useAuthReducer } from './extra-reducers/auth.reducer';
import { LoadingState, GroupState, UserState, WorkState, RoleState, AuthState, NotificationState } from 'src/app/view-models';

export interface RootState {
    loading: LoadingState;
    group: GroupState;
    user: UserState;
    work: WorkState;
    role: RoleState;
    auth: AuthState;
    notification: NotificationState;
}
export const useRootReducer = (): Reducer<CombinedState<RootState>> => {
    return combineReducers<RootState>({
        loading: useLoadingReducer,
        group: useGroupReducer,
        user: useUserReducer,
        work: useWorkReducer,
        role: useRoleReducer,
        auth: useAuthReducer,
        notification: useNotificationReducer,
    })
}