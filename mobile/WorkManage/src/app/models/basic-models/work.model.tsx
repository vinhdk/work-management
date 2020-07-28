import { WORKTYPE } from 'src/app/types';
import { WorkVM, WorkCM, WorkUM } from 'src/app/view-models';

export class Work {
    type: string;
    payload: {
        getAll: {
            success: {
                data: Array<WorkVM>
            }
        },
        create: {
            fetch: {
                data: WorkCM
            },
            success: {
                data: WorkVM
            }
        },
        update: {
            fetch: {
                data: WorkUM
            },
            success: {
                data: WorkVM
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
        this.type = WORKTYPE.GETALL.FETCH;
        this.payload = {
            getAll: {
                success: {
                    data: []
                }
            },
            create: {
                fetch: {
                    data: new WorkCM({} as any)
                },
                success: {
                    data: new WorkVM({} as any)
                }
            },
            update: {
                fetch: {
                    data: new WorkUM({} as any)
                },
                success: {
                    data: new WorkVM({} as any)
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