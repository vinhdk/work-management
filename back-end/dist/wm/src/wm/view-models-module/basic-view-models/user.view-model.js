"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserCM {
    constructor(model) {
        this.getData = (UpdateBy, CreateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy, CreateBy });
            delete data.getData;
            return data;
        };
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
    }
}
exports.UserCM = UserCM;
class UserUM {
    constructor(model) {
        this.getData = (UpdateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
    }
}
exports.UserUM = UserUM;
class UserVM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.FullName = model.FullName;
        this.Email = model.Email;
        this.Phone = model.Phone;
        this.PassWord = model.PassWord;
        this.RoleId = model.RoleId;
        this.GroupId = model.GroupId;
        this.Works = model.Works;
        this.Devices = model.Devices;
        this.Notifications = model.Notifications;
        this.BirthDate = model.BirthDate;
        this.Gender = model.Gender;
        this.Avatar = model.Avatar;
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
                GroupId: {
                    minLength: 1,
                    title: "GroupId",
                    type: "string",
                },
                BirthDate: {
                    minLength: 1,
                    title: "BirthDate",
                    type: "string",
                    format: "date",
                },
                Gender: {
                    minLength: 1,
                    title: "Gender",
                    type: "boolean",
                },
            },
            required: ["UserName", "FullName", "Email", "PassWord", "Phone", "RoleId", "GroupId", "BirthDate", "Gender"],
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
                GroupId: {
                    minLength: 1,
                    title: "GroupId",
                    type: "string",
                },
                BirthDate: {
                    minLength: 1,
                    title: "BirthDate",
                    type: "string",
                    format: "date",
                },
                Gender: {
                    minLength: 1,
                    title: "Gender",
                    type: "boolean",
                },
            },
            required: ["Id", "FullName", "Email", "Phone", "RoleId", "GroupId", "BirthDate", "Gender"],
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
//# sourceMappingURL=user.view-model.js.map