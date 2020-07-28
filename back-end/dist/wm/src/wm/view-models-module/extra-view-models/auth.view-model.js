"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginGM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.UserName = model.UserName;
        this.PassWord = model.PassWord;
        this.FirebaseToken = model.FirebaseToken;
    }
}
exports.LoginGM = LoginGM;
class ProfileUM {
    constructor(model) {
        this.getData = (UpdateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.Gender = model.Gender;
        this.BirthDate = model.BirthDate;
    }
}
exports.ProfileUM = ProfileUM;
class ProfileVM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.Gender = model.Gender;
        this.BirthDate = model.BirthDate;
        this.Avatar = model.Avatar;
        this.GroupId = model.GroupId;
        this.Works = model.Works;
        this.Devices = model.Devices;
        this.Notifications = model.Notifications;
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
                    type: "boolean",
                },
                BirthDate: {
                    minLength: 1,
                    title: "BirthDate",
                    type: "string",
                    format: "date",
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
                        "type": "object",
                        "in": "body",
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
//# sourceMappingURL=auth.view-model.js.map