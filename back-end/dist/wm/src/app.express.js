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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const swagger_ui_express_1 = require("swagger-ui-express");
const environment_1 = require("src/environment/environment");
const wm_router_1 = require("src/wm-router");
const view_models_module_1 = require("src/wm/view-models-module");
const open = require("open");
class App {
    constructor(sequelize) {
        this.listen = () => __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port"));
        });
        this.settings = () => {
            this.app.use(body_parser_1.urlencoded({ limit: "50mb", extended: false }));
            this.app.use(body_parser_1.json({ limit: "50mb" }));
            this.app.set("port", process.env.PORT || 8888);
            this.app.use((req, res, next) => {
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,authorization");
                next();
            });
        };
        this.middlewares = () => {
            // this.app.use(morgan('dev'));
            this.app.use(express_1.default.json());
        };
        this.routes = () => {
            wm_router_1.ROUTERS.forEach((route) => route(this.app, this.sequelize));
        };
        this.createSwagger = () => {
            const swaggerJSON = JSON.parse(fs_1.readFileSync("src/swagger.json").toString());
            view_models_module_1.SWAGGERS.forEach((swaggerModel) => {
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
            this.app.get("/", (req, res) => {
                res.status(301).redirect("/swagger");
            });
            this.app.get("/swagger/v1/swagger.json", (req, res) => {
                res.json(require("./swagger.json"));
            });
            this.app.use("/swagger", swagger_ui_express_1.serve, swagger_ui_express_1.setup(swaggerJSON, options));
            open(environment_1.environment.apiLink.endPoint);
        };
        this.sequelize = sequelize;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
        this.createSwagger();
    }
}
exports.App = App;
//# sourceMappingURL=app.express.js.map