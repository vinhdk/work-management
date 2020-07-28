import { WORKTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { WorkState } from 'src/app/view-models';
import { Work } from 'src/app/models';

export const useWorkReducer: Reducer<WorkState, Work> = (state: WorkState = new WorkState(), action: Work): WorkState => {
    switch (action.type) {
        case WORKTYPE.RESET.FETCH: {
            return {
                ...state,
                array: []
            }
        }
        case WORKTYPE.GETALL.SUCCESS: {
            return {
                ...state,
                array: action.payload.getAll.success.data
            }
        }
        case WORKTYPE.CREATE.SUCCESS: {
            const newArray = state.array;
            newArray.push(action.payload.create.success.data);
            return {
                ...state,
                array: newArray
            }
        }
        case WORKTYPE.UPDATE.SUCCESS: {
            const newArray = state.array;
            newArray[newArray.findIndex(model => model.Id === action.payload.update.success.data.Id)] = action.payload.update.success.data;
            return {
                ...state,
                array: newArray
            }
        }
        case WORKTYPE.REMOVE.SUCCESS: {
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