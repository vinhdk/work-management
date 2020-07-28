import { GROUPTYPE } from 'src/app/types';
import { GroupVM, GroupCM, GroupUM } from 'src/app/view-models';
export class Group {
    type: string;
    payload: {
        getAll: {
            success: {
                data: Array<GroupVM>
            }
        },
        create: {
            fetch: {
                data: GroupCM
            },
            success: {
                data: GroupVM
            }
        },
        update: {
            fetch: {
                data: GroupUM
            },
            success: {
                data: GroupVM
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
        this.type = GROUPTYPE.GETALL.FETCH;
        this.payload = {
            getAll: {
                success: {
                    data: []
                }
            },
            create: {
                fetch: {
                    data: new GroupCM({} as any)
                },
                success: {
                    data: new GroupVM({} as any)
                }
            },
            update: {
                fetch: {
                    data: new GroupUM({} as any)
                },
                success: {
                    data: new GroupVM({} as any)
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