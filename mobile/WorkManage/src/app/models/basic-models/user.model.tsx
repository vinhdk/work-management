import { USERTYPE } from 'src/app/types';
import { UserVM, UserCM, UserUM } from 'src/app/view-models';
export class User {
    type: string;
    payload: {
        getAll: {
            success: {
                data: Array<UserVM>
            }
        },
        create: {
            fetch: {
                data: UserCM
            },
            success: {
                data: UserVM
            }
        },
        update: {
            fetch: {
                data: UserUM
            },
            success: {
                data: UserVM
            }
        },
        remove: {
            fetch: {
                data: string
            },
            success: {
                data: string
            }
        }
    };
    constructor() {
        this.type = USERTYPE.GETALL.FETCH;
        this.payload = {
            getAll: {
                success: {
                    data: []
                }
            },
            create: {
                fetch: {
                    data: new UserCM({} as any)
                },
                success: {
                    data: new UserVM({} as any)
                }
            },
            update: {
                fetch: {
                    data: new UserUM({} as any)
                },
                success: {
                    data: new UserVM({} as any)
                }
            },
            remove: {
                fetch: {
                    data: ""
                },
                success: {
                    data: ""
                }
            }
        }
    }
}