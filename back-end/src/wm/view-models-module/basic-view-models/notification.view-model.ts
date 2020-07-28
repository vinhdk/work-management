export class NotificationCM {
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    constructor(model: NotificationCM) {
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
    }
    public getData = (UpdateBy: string, CreateBy: string): any => {
        const data = { ...this, UpdateBy, CreateBy };
        delete data.getData;
        return data;
    }
}

export class NotificationUM {
    public Id: string;
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    constructor(model: NotificationUM) {
        this.Id = model.Id;
        this.IsSeen = model.IsSeen;
        this.UserId = model.UserId;
        this.Data = model.Data;
    }
    public getData = (UpdateBy: string): any => {
        const data = { ...this, UpdateBy };
        delete data.getData;
        return data;
    }
}

export class NotificationVM {
    public Id: string;
    public UserId: string;
    public Data: string;
    public IsSeen: boolean;
    public CreatedAt: Date;
    constructor(model: NotificationVM) {
        this.Id = model.Id;
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
        this.CreatedAt = model.CreatedAt;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export const NotificationSwagger = {
    definitions: {
        NotificationCM: {
            additionalProperties: false,
            properties: {
                Data: {
                    minLength: 1,
                    title: "Data",
                    type: "string",
                },
                UserId: {
                    minLength: 1,
                    title: "UserId",
                    type: "string",
                },
                IsSeen: {
                    minLength: 1,
                    title: "IsSeen",
                    type: "boolean",
                },
            },
            required: ["Data", "UserId", "IsSeen"],
            type: "object",
        },
        NotificationUM: {
            additionalProperties: false,
            properties: {
                Data: {
                    minLength: 1,
                    title: "Data",
                    type: "string",
                },
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
                UserId: {
                    minLength: 1,
                    title: "UserId",
                    type: "string",
                },
                IsSeen: {
                    minLength: 1,
                    title: "IsSeen",
                    type: "boolean",
                },
            },
            required: ["Data", "Id", "UserId", "IsSeen"],
            type: "object",
        },
    },
    paths: {
        "/api/Notification": {
            get: {
                tags: ["Notification"],
                operationId: "Notification_Get",
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
                tags: ["Notification"],
                operationId: "Notification_Post",
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
                        $ref: "#/definitions/NotificationCM",
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
                tags: ["Notification"],
                operationId: "Notification_Put",
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
                        $ref: "#/definitions/NotificationUM",
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
        "/api/Notification/{id}": {
            get: {
                tags: ["Notification"],
                operationId: "Notification_GetById",
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
                tags: ["Notification"],
                operationId: "Notification_Delete",
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
