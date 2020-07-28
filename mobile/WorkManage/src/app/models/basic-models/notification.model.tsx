import { NOTIFICATIONTYPE } from 'src/app/types';
import { NotificationVM, NotificationCM, NotificationUM } from 'src/app/view-models';
export class Notification {
    type: string;
    payload: {
        getAll: {
            success: {
                data: Array<NotificationVM>
            }
        },
        create: {
            fetch: {
                data: NotificationCM
            },
            success: {
                data: NotificationVM
            }
        },
        update: {
            fetch: {
                data: NotificationUM
            },
            success: {
                data: NotificationVM
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
        this.type = NOTIFICATIONTYPE.GETALL.FETCH;
        this.payload = {
            getAll: {
                success: {
                    data: []
                }
            },
            create: {
                fetch: {
                    data: new NotificationCM({} as any)
                },
                success: {
                    data: new NotificationVM({} as any)
                }
            },
            update: {
                fetch: {
                    data: new NotificationUM({} as any)
                },
                success: {
                    data: new NotificationVM({} as any)
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