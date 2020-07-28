import { LOADINGTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { LoadingState } from 'src/app/view-models';
import { Loading } from 'src/app/models';

export const useLoadingReducer: Reducer<LoadingState, Loading> = (state: LoadingState = new LoadingState(), action: Loading): LoadingState => {
    switch (action.type) {
        case LOADINGTYPE.SHOW: {
            return {
                ...state,
                status: action.payload
            }
        }
        case LOADINGTYPE.HIDE: {
            return {
                ...state,
                status: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}