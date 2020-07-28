import { AUTHTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { AuthState } from 'src/app/view-models';
import { Auth } from 'src/app/models';

export const useAuthReducer: Reducer<AuthState, Auth> = (state: AuthState = new AuthState(), action: Auth): AuthState => {
    switch (action.type) {
        case AUTHTYPE.RESET.FETCH: {
            return {
                ...state,
                profile: new AuthState().profile
            }
        }
        case AUTHTYPE.TOKEN.SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload.token.success.data
                }
            }
        }
        case AUTHTYPE.PROFILE.SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload.profile.success.data
                }
            }
        }
        case AUTHTYPE.AVATAR.SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload.profile.success.data
                }
            }
        }
        default:
            return {
                ...state
            }
    }
}