import { App } from "src/app.express";
import { WmContext } from "src/wm-data/context";
import { IFirebaseService, FirebaseService } from "src/wm-service";
(async () => {
    const firebase: IFirebaseService = new FirebaseService();
    await firebase.useInit();
    const context: WmContext = new WmContext();
    await context.connection();
    const app = new App(context.sequelize);
    await app.listen();
})();
