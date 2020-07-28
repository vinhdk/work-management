"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilService {
    constructor() { }
    adapt(from, to) {
        for (const key in from) {
            if (from.hasOwnProperty(key)) {
                const element = from[key];
                if (to.hasOwnProperty(key)) {
                    to[key] = element ? element : to[key];
                }
            }
        }
        return to;
    }
}
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map