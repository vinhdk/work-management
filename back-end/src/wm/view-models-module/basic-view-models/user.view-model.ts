import { WorkVM } from "./work.view-model";
import { DeviceVM } from "./device.view-model";
import { NotificationVM } from "./notification.view-model";

export class UserCM {
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public GroupId: string;
    public BirthDate: Date;
    public Gender: boolean;
    constructor(model: UserCM) {
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
    public getData = (UpdateBy: string, CreateBy: string): any => {
        const data = { ...this, UpdateBy, CreateBy };
        delete data.getData;
        return data;
    }
}
export class UserUM {
    public Id: string;
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public GroupId: string;
    public BirthDate: Date;
    public Gender: boolean;
    constructor(model: UserUM) {
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
    public getData = (UpdateBy: string): any => {
        const data = { ...this, UpdateBy };
        delete data.getData;
        return data;
    }
}
export class UserVM {
    public Id: string;
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Phone: string;
    public PassWord: string;
    public RoleId: string;
    public GroupId: string;
    public Works: WorkVM[];
    public Devices: DeviceVM[];
    public Notifications: NotificationVM[];
    public BirthDate: Date;
    public Gender: boolean;
    public Avatar: string;
    constructor(model: UserVM) {
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
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export const UserSwagger = {
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
