import { Auth } from "src/app/models"
import { AUTHTYPE } from "src/app/types"
import { ProfileUM, PasswordVM, ProfileVM } from "src/app/view-models"
import { ActionCreatorsMapObject } from "redux";
import { Alert } from 'react-native';

export const useAuthAction = () => {
    const reset = (): Auth => {
        return provide(AUTHTYPE.RESET.FETCH, {});
    }
    const getToken = (): Auth => {
        return provide(AUTHTYPE.TOKEN.FETCH, {});
    }
    const getTokenSuccess = (data: ProfileVM): Auth => {
        return provide(AUTHTYPE.TOKEN.SUCCESS, { token: { success: { data: data } } });
    }
    const getTokenError = (error: any): Auth => {
        console.log(error.response);
        return provide(AUTHTYPE.TOKEN.ERROR, {});
    }
    const updateProfile = (data: ProfileUM): Auth => {
        return provide(AUTHTYPE.PROFILE.FETCH, { profile: { fetch: { data: data } } });
    }
    const updateProfileSuccess = (data: ProfileVM): Auth => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(AUTHTYPE.PROFILE.SUCCESS, { profile: { success: { data: data } } });
    }
    const updateProfileError = (error: any): Auth => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(AUTHTYPE.PROFILE.ERROR, {});
    }
    const updatePassWord = (data: PasswordVM): Auth => {
        return provide(AUTHTYPE.PASSWORD.FETCH, { password: { fetch: { data: data } } });
    }
    const updatePassWordSuccess = (): Auth => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(AUTHTYPE.PASSWORD.SUCCESS, {});
    }
    const updatePassWordError = (error: any): Auth => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(AUTHTYPE.PASSWORD.ERROR, {});
    }

    const updateAvatar = (data: { data: string, uri: string, name: string, type: string }): Auth => {
        return provide(AUTHTYPE.AVATAR.FETCH, { avatar: { fetch: { data: data } } });
    }
    const updateAvatarSuccess = (data: ProfileVM): Auth => {
        Alert.alert('Thông báo', 'Cập nhật thành công');
        return provide(AUTHTYPE.AVATAR.SUCCESS, { profile: { success: { data: data } } });
    }
    const updateAvatarError = (error: any): Auth => {
        console.log(error.response);
        Alert.alert('Thông báo', error.response.data.message);
        return provide(AUTHTYPE.AVATAR.ERROR, {});
    }
    const provide = (
        type: string,
        payload: {
            token?: {
                success?: {
                    data: ProfileVM
                }
            },
            profile?: {
                fetch?: {
                    data: ProfileUM
                },
                success?: {
                    data: ProfileVM
                }
            },
            password?: {
                fetch?: {
                    data: PasswordVM
                },
            },
            avatar?: {
                fetch?: {
                    data: { data: string, uri: string, name: string, type: string }
                },
                success?: {
                    data: string
                }
            }
        }
    ): Auth => {
        return {
            type: type,
            payload: {
                token: {
                    success: {
                        data: payload.token ? payload.token.success ? payload.token.success.data : new ProfileVM({} as any) : new ProfileVM({} as any)
                    }
                },
                profile: {
                    fetch: {
                        data: payload.profile ? payload.profile.fetch ? payload.profile.fetch.data : new ProfileUM({} as any) : new ProfileUM({} as any)
                    },
                    success: {
                        data: payload.profile ? payload.profile.success ? payload.profile.success.data : new ProfileVM({} as any) : new ProfileVM({} as any)
                    }
                },
                password: {
                    fetch: {
                        data: payload.password ? payload.password.fetch ? payload.password.fetch.data : new PasswordVM({} as any) : new PasswordVM({} as any)
                    },
                },
                avatar: {
                    fetch: {
                        data: payload.avatar ? payload.avatar.fetch ? payload.avatar.fetch.data : { data: "", uri: "", name: "", type: "" } : { data: "", uri: "", name: "", type: "" }
                    },
                    success: {
                        data: payload.avatar ? payload.avatar.success ? payload.avatar.success.data : "" : ""
                    }
                }
            }
        }
    }
    const actions: ActionCreatorsMapObject<Auth> = {
        reset: reset,
        getToken: getToken,
        getTokenSuccess: getTokenSuccess,
        getTokenError: getTokenError,
        updateProfile: updateProfile,
        updateProfileSuccess: updateProfileSuccess,
        updateProfileError: updateProfileError,
        updatePassWord: updatePassWord,
        updatePassWordSuccess: updatePassWordSuccess,
        updatePassWordError: updatePassWordError,
        updateAvatar: updateAvatar,
        updateAvatarSuccess: updateAvatarSuccess,
        updateAvatarError: updateAvatarError
    }
    return actions;
}