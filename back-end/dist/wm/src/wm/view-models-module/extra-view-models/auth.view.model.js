"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginVM {
    constructor() {
        this.UserName = undefined;
        this.PassWord = undefined;
        this.FirebaseToken = undefined;
    }
}
exports.LoginVM = LoginVM;
class ProfileUM {
    constructor() {
        this.Id = undefined;
        this.FullName = undefined;
        this.Email = undefined;
        this.Phone = undefined;
        this.Gender = undefined;
        this.BirthDate = undefined;
    }
    getData() {
        return {
            Email: this.Email,
            FullName: this.FullName,
            id: this.Id,
            Phone: this.Phone,
            Gender: this.Gender,
            BirthDate: this.BirthDate,
        };
    }
}
exports.ProfileUM = ProfileUM;
class ProfileVM {
    constructor() {
        this.Id = undefined;
        this.FullName = undefined;
        this.Email = undefined;
        this.Phone = undefined;
        this.Gender = undefined;
        this.BirthDate = undefined;
        this.Avatar = undefined;
    }
}
exports.ProfileVM = ProfileVM;
exports.AuthSwagger = {
    definitions: {
        LoginVM: {
            type: "object",
            additionalProperties: false,
            required: [
                "UserName",
                "PassWord",
                "FirebaseToken",
            ],
            properties: {
                UserName: {
                    title: "UserName",
                    type: "string",
                    minLength: 1,
                },
                PassWord: {
                    title: "PassWord",
                    type: "string",
                    minLength: 1,
                },
                FirebaseToken: {
                    title: "UserName",
                    type: "string",
                    minLength: 1,
                },
            },
        },
        PassWordUM: {
            type: "object",
            additionalProperties: false,
            required: [
                "NewPassWord",
                "OldPassWord",
            ],
            properties: {
                NewPassWord: {
                    title: "NewPassWord",
                    type: "string",
                    minLength: 1,
                },
                OldPassWord: {
                    title: "OldPassWord",
                    type: "string",
                    minLength: 1,
                },
            },
        },
        ProfileUM: {
            additionalProperties: false,
            properties: {
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
                Gender: {
                    minLength: 1,
                    title: "Gender",
                    type: "string",
                },
                BirthDate: {
                    minLength: 1,
                    title: "BirthDate",
                    type: "string",
                },
            },
            required: [],
            type: "object",
        },
    },
    paths: {
        "/api/Auth": {
            get: {
                tags: ["Auth"],
                operationId: "Auth_Get",
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
                security: [
                    {
                        JWT: [],
                    },
                ],
            },
            put: {
                tags: ["Auth"],
                operationId: "Auth_PutProfile",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [
                    {
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/ProfileUM",
                        },
                        "x-nullable": false,
                    },
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
        },
        "/api/Auth/Token": {
            post: {
                tags: ["Auth"],
                operationId: "Auth_Token",
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
                            $ref: "#/definitions/LoginVM",
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
        "/api/Auth/PassWord": {
            put: {
                tags: ["Auth"],
                operationId: "Auth_PassWord",
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
                            $ref: "#/definitions/PassWordUM",
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
        "/api/Auth/Avatar": {
            put: {
                tags: ["Auth"],
                operationId: "Auth_PutAvatar",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "avatar",
                        "type": "file",
                        "in": "formData",
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
//# sourceMappingURL=auth.view.model.js.map