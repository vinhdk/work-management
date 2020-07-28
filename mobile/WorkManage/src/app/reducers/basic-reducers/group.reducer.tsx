import { GROUPTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { GroupState } from 'src/app/view-models';
import { Group } from 'src/app/models';

export const useGroupReducer: Reducer<GroupState, Group> = (state: GroupState = new GroupState(), action: Group): GroupState => {
    switch (action.type) {
        case GROUPTYPE.RESET.FETCH: {
            return {
                ...state,
                array: []
            }
        }
        case GROUPTYPE.GETALL.SUCCESS: {
            return {
                ...state,
                array: action.payload.getAll.success.data
            }
        }
        case GROUPTYPE.CREATE.SUCCESS: {
            const newArray = state.array;
            newArray.push(action.payload.create.success.data);
            return {
                ...state,
                array: newArray
            }
        }
        case GROUPTYPE.UPDATE.SUCCESS: {
            const newArray = state.array;
            newArray[newArray.findIndex(model => model.Id === action.payload.update.success.data.Id)] = action.payload.update.success.data;
            return {
                ...state,
                array: newArray
            }
        }
        case GROUPTYPE.REMOVE.SUCCESS: {
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