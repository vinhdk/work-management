"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserCM {
    constructor() {
        this.UserName = undefined;
        this.FullName = undefined;
        this.Email = undefined;
        this.Phone = undefined;
        this.PassWord = undefined;
        this.RoleId = undefined;
    }
    getData() {
        return {
            Email: this.Email,
            FullName: this.FullName,
            UserName: this.UserName,
            Phone: this.Phone,
            PassWord: this.PassWord,
            RoleId: this.RoleId,
        };
    }
}
exports.UserCM = UserCM;
class UserUM {
    constructor() {
        this.Id = undefined;
        this.UserName = undefined;
        this.FullName = undefined;
        this.Email = undefined;
        this.Phone = undefined;
        this.PassWord = undefined;
        this.RoleId = undefined;
    }
    getData() {
        return {
            Email: this.Email,
            FullName: this.FullName,
            UserName: this.UserName,
            id: this.Id,
            Phone: this.Phone,
            PassWord: this.PassWord,
            RoleId: this.RoleId,
        };
    }
}
exports.UserUM = UserUM;
class UserVM {
    constructor() {
        this.Id = undefined;
        this.UserName = undefined;
        this.FullName = undefined;
        this.Email = undefined;
        this.Phone = undefined;
        this.RoleId = undefined;
        this.Works = [];
        this.IsDelete = undefined;
    }
}
exports.UserVM = UserVM;
exports.UserSwagger = {
    definitions: {
        UserCM: {
            additionalProperties: false,
            properties: {
                UserName: {
                    minLength: 1,
                    title: "UserName",
                    type: "string",
                },
                PassWord: {
                    minLength: 1,
                    title: "PassWord",
                    type: "string",
                },
                FullName: {
                    minLength: 1,
                    title: "FullName",
                    type: "string",
                },
                Email: {
                    minLength: 1,
                    title: "Email",
                    type: "string",
                },
                Phone: {
                    minLength: 1,
                    title: "Phone",
                    type: "string",
                },
                RoleId: {
                    minLength: 1,
                    title: "RoleId",
                    type: "string",
                },
            },
            required: ["UserName", "FullName", "Email", "PassWord", "Phone", "RoleId"],
            type: "object",
        },
        UserUM: {
            additionalProperties: false,
            properties: {
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
                FullName: {
                    minLength: 1,
                    title: "FullName",
                    type: "string",
                },
                Email: {
                    minLength: 1,
                    title: "Email",
                    type: "string",
                },
                Phone: {
                    minLength: 1,
                    title: "Phone",
                    type: "string",
                },
                RoleId: {
                    minLength: 1,
                    title: "RoleId",
                    type: "string",
                },
            },
            required: ["Id", "FullName", "Email", "Phone", "RoleId"],
            type: "object",
        },
    },
    paths: {
        "/api/User": {
            get: {
                tags: ["User"],
                operationId: "User_Get",
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
                tags: ["User"],
                operationId: "User_Post",
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
                            $ref: "#/definitions/UserCM",
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
                tags: ["User"],
                operationId: "User_Put",
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
                            $ref: "#/definitions/UserUM",
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
        "/api/User/{id}": {
            get: {
                tags: ["User"],
                operationId: "User_GetById",
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
                tags: ["User"],
                operationId: "User_Delete",
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
//# sourceMappingURL=user.view.model.js.map