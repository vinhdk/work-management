import { Loading } from "src/app/models"
import { LOADINGTYPE } from "src/app/types"

export const useLoadingAction = () => {

    const showLoader = (): Loading => {
        return provide(LOADINGTYPE.SHOW, true);
    }
    const hideLoader = (): Loading => {
        return provide(LOADINGTYPE.HIDE, false);
    }
    const provide = (
        type: string,
        payload: boolean
    ): Loading => {
        return {
            type: type,
            payload: payload
        }
    }
    return { showLoader, hideLoader };
}