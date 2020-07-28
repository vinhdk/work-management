import { json, urlencoded } from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import { readFileSync } from "fs";
import { serve, setup } from "swagger-ui-express";
import { environment } from "src/environment/environment";
import { ROUTERS } from "src/wm-router";
import { SWAGGERS } from "src/wm/view-models-module";
import { Sequelize } from "sequelize-typescript";
const open = require("open");
export class App {
    private app: Application;
    private sequelize: Sequelize;
    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.createSwagger();
    }

    public listen = async (): Promise<void> => {
        await this.app.listen(this.app.get("port"));
    }

    private settings = () => {
        this.app.use(urlencoded({ limit: "50mb", extended: false }));
        this.app.use(json({ limit: "50mb" }));
        this.app.set("port", process.env.PORT || 8888);
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,authorization");
            next();
        });
    }

    private middlewares = () => {
        // this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes = () => {
        ROUTERS.forEach((route) => route(this.app, this.sequelize));
    }

    private createSwagger = () => {
        const swaggerJSON = JSON.parse(readFileSync("src/swagger.json").toString());
        SWAGGERS.forEach((swaggerModel: any) => {
            for (const key in swaggerModel.paths) {
                if (swaggerModel.paths.hasOwnProperty(key)) {
                    const element = swaggerModel.paths[key];
                    swaggerJSON.paths[key] = element;
                }
            }
            for (const key in swaggerModel.definitions) {
                if (swaggerModel.definitions.hasOwnProperty(key)) {
                    const element = swaggerModel.definitions[key];
                    swaggerJSON.definitions[key] = element;
                }
            }
        });
        const options = {
            customCss: ".swagger-ui table tbody tr td:first-of-type {max-width : 30%} .swagger-ui .parameters-col_description {width:70%}",
            explorer: true,
        };
        this.app.get("/", (req: Request, res: Response) => {
            res.status(301).redirect("/swagger");
        });
        this.app.get("/swagger/v1/swagger.json", (req: Request, res: Response) => {
            res.json(require("./swagger.json"));

        });
        this.app.use("/swagger", serve, setup(swaggerJSON, options));
        open(environment.apiLink.endPoint);
    }

}
