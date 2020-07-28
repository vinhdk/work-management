"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_express_1 = require("src/app.express");
const context_1 = require("src/wm-data/context");
const wm_service_1 = require("src/wm-service");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const firebase = new wm_service_1.FirebaseService();
    yield firebase.useInit();
    const context = new context_1.WmContext();
    yield context.connection();
    const app = new app_express_1.App(context.sequelize);
    yield app.listen();
}))();
//# sourceMappingURL=server.deploy.js.map