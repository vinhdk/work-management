"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleCM {
    constructor() {
        this.Name = undefined;
    }
    getData() {
        return {
            Name: this.Name,
        };
    }
}
exports.RoleCM = RoleCM;
class RoleUM {
    constructor() {
        this.Id = undefined;
        this.Name = undefined;
    }
    getData() {
        return {
            Name: this.Name,
            id: this.Id,
        };
    }
}
exports.RoleUM = RoleUM;
class RoleVM {
    constructor() {
        this.Id = undefined;
        this.Name = undefined;
        this.IsDelete = undefined;
        this.Users = [];
    }
}
exports.RoleVM = RoleVM;
exports.RoleSwagger = {
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
//# sourceMappingURL=role.view.model.js.map