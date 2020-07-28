import { ROLETYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { RoleState } from 'src/app/view-models';
import { Role } from 'src/app/models';

export const useRoleReducer: Reducer<RoleState, Role> = (state: RoleState = new RoleState(), action: Role): RoleState => {
    switch (action.type) {
        case ROLETYPE.RESET.FETCH: {
            return {
                ...state,
                array: []
            }
        }
        case ROLETYPE.GETALL.SUCCESS: {
            return {
                ...state,
                array: action.payload.getAll.success.data
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}