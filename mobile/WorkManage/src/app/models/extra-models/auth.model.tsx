import { AUTHTYPE } from 'src/app/types';
import { ProfileVM, ProfileUM, PasswordVM } from 'src/app/view-models';

export class Auth {
    type: string;
    payload: {
        token: {
            success: {
                data: ProfileVM
            }
        },
        profile: {
            fetch: {
                data: ProfileUM
            },
            success: {
                data: ProfileVM
            }
        },
        password: {
            fetch: {
                data: PasswordVM
            },
        },
        avatar: {
            fetch: {
                data: { data: string, uri: string, name: string, type: string }
            },
            success: {
                data: string
            }
        }

    };
    constructor() {
        this.type = AUTHTYPE.TOKEN.FETCH;
        this.payload = {
            token: {
                success: {
                    data: new ProfileVM({} as any)
                }
            },
            profile: {
                fetch: {
                    data: new ProfileUM({} as any)
                },
                success: {
                    data: new ProfileVM({} as any)
                }
            },
            password: {
                fetch: {
                    data: new PasswordVM({} as any)
                },
            },
            avatar: {
                fetch: {
                    data: { data: "", uri: "", name: "", type: "" }
                },
                success: {
                    data: ""
                }
            }
        }
    }
}