import { UserVM } from "./user.view-model";
export class RoleCM {

    public Name: string;
    constructor(model: RoleCM) {
        this.Name = model.Name;
    }
    public getData = (UpdateBy: string, CreateBy: string): any => {
        const data = { ...this, UpdateBy, CreateBy };
        delete data.getData;
        return data;
    }
}
export class RoleUM {
    public Id: string;
    public Name: string;
    constructor(model: RoleUM) {
        this.Id = model.Id;
        this.Name = model.Name;
    }
    public getData = (UpdateBy: string): any => {
        const data = { ...this, UpdateBy };
        delete data.getData;
        return data;
    }
}
export class RoleVM {
    public Id: string;
    public Name: string;
    public Users: UserVM[];
    public IsDelete: boolean;
    constructor(model: RoleVM) {
        this.Id = model.Id;
        this.Name = model.Name;
        this.Users = model.Users;
        this.IsDelete = model.IsDelete;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export const RoleSwagger = {
    definitions: {
        RoleCM: {
            additionalProperties: false,
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
            },
            required: ["Name"],
            type: "object",
        },
        RoleUM: {
            additionalProperties: false,
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
            },
            required: ["Name", "Id"],
            type: "object",
        },
    },
    paths: {
        "/api/Role": {
            get: {
                tags: ["Role"],
                operationId: "Role_Get",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            post: {
                tags: ["Role"],
                operationId: "Role_Post",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "model",
                    "in": "body",
                    "required": true,
                    "schema": {
                        $ref: "#/definitions/RoleCM",
                    },
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            put: {
                tags: ["Role"],
                operationId: "Role_Put",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "model",
                    "in": "body",
                    "required": true,
                    "schema": {
                        $ref: "#/definitions/RoleUM",
                    },
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
        },
        "/api/Role/{id}": {
            get: {
                tags: ["Role"],
                operationId: "Role_GetById",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "id",
                    "in": "path",
                    "type": "string",
                    "format": "uuid",
                    "required": true,
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            delete: {
                tags: ["Role"],
                operationId: "Role_Delete",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "id",
                    "in": "path",
                    "type": "string",
                    "format": "uuid",
                    "required": true,
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
        },
    },
};
