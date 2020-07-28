import { NOTIFICATIONTYPE } from 'src/app/types'
import { Reducer } from 'redux';
import { NotificationState } from 'src/app/view-models';
import { Notification } from 'src/app/models';

export const useNotificationReducer: Reducer<NotificationState, Notification> = (state: NotificationState = new NotificationState(), action: Notification): NotificationState => {
    switch (action.type) {
        case NOTIFICATIONTYPE.RESET.FETCH: {
            return {
                ...state,
                array: []
            }
        }
        case NOTIFICATIONTYPE.GETALL.SUCCESS: {
            return {
                ...state,
                array: action.payload.getAll.success.data
            }
        }
        case NOTIFICATIONTYPE.CREATE.SUCCESS: {
            const newArray = state.array;
            newArray.push(action.payload.create.success.data);
            return {
                ...state,
                array: newArray
            }
        }
        case NOTIFICATIONTYPE.UPDATE.SUCCESS: {
            const newArray = state.array;
            newArray[newArray.findIndex(model => model.Id === action.payload.update.success.data.Id)] = action.payload.update.success.data;
            return {
                ...state,
                array: newArray
            }
        }
        case NOTIFICATIONTYPE.REMOVE.SUCCESS: {
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