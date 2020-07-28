import { USERTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { UserState } from 'src/app/view-models';
import { User } from 'src/app/models';

export const useUserReducer: Reducer<UserState, User> = (state: UserState = new UserState(), action: User): UserState => {
    switch (action.type) {
        case USERTYPE.RESET.FETCH: {
            return {
                ...state,
                array: []
            }
        }
        case USERTYPE.GETALL.SUCCESS: {
            return {
                ...state,
                array: action.payload.getAll.success.data
            }
        }
        case USERTYPE.CREATE.SUCCESS: {
            const newArray = state.array;
            newArray.push(action.payload.create.success.data);
            return {
                ...state,
                array: newArray
            }
        }
        case USERTYPE.UPDATE.SUCCESS: {
            const newArray = state.array;
            newArray[newArray.findIndex(model => model.Id === action.payload.update.success.data.Id)] = action.payload.update.success.data;
            return {
                ...state,
                array: newArray
            }
        }
        case USERTYPE.REMOVE.SUCCESS: {
            const newArray = state.array.filter(model => model.Id !== action.payload.remove.success.data);
            return {
                ...state,
                array: newArray
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}