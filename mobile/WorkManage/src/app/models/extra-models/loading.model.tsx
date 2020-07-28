import { LOADINGTYPE } from 'src/app/types';
export class Loading {
    type: string;
    payload: boolean;
    constructor() {
        this.type = LOADINGTYPE.HIDE;
        this.payload = false;
    }
}