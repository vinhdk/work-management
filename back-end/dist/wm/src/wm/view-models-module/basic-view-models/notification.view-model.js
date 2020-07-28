"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationCM {
    constructor(model) {
        this.getData = (UpdateBy, CreateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy, CreateBy });
            delete data.getData;
            return data;
        };
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
    }
}
exports.NotificationCM = NotificationCM;
class NotificationUM {
    constructor(model) {
        this.getData = (UpdateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.IsSeen = model.IsSeen;
        this.UserId = model.UserId;
        this.Data = model.Data;
    }
}
exports.NotificationUM = NotificationUM;
class NotificationVM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.UserId = model.UserId;
        this.Data = model.Data;
        this.IsSeen = model.IsSeen;
        this.CreatedAt = model.CreatedAt;
    }
}
exports.NotificationVM = NotificationVM;
exports.NotificationSwagger = {
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
//# sourceMappingURL=notification.view-model.js.map