import { ROLETYPE } from 'src/app/types';
import { RoleVM } from 'src/app/view-models';
export class Role {
    type: string;
    payload: {
        getAll: {
            success: {
                data: Array<RoleVM>
            }
        },
    };
    constructor() {
        this.type = ROLETYPE.GETALL.FETCH;
        this.payload = {
            getAll: {
                success: {
                    data: []
                }
            },
        }
    }
}