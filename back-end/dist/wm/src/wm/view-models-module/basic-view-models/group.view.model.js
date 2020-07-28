"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupCM {
    constructor() {
        this.Name = undefined;
    }
    getData() {
        return {
            Name: this.Name,
        };
    }
}
exports.GroupCM = GroupCM;
class GroupUM {
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
exports.GroupUM = GroupUM;
class GroupVM {
    constructor() {
        this.Id = undefined;
        this.Name = undefined;
        this.Users = [];
        this.IsDelete = undefined;
    }
}
exports.GroupVM = GroupVM;
exports.GroupSwagger = {
    definitions: {
        GroupCM: {
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
        GroupUM: {
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
        "/api/Group": {
            get: {
                tags: ["Group"],
                operationId: "Group_Get",
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
                tags: ["Group"],
                operationId: "Group_Post",
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
                            $ref: "#/definitions/GroupCM",
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
                tags: ["Group"],
                operationId: "Group_Put",
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
                            $ref: "#/definitions/GroupUM",
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
        "/api/Group/{id}": {
            get: {
                tags: ["Group"],
                operationId: "Group_GetById",
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
                tags: ["Group"],
                operationId: "Group_Delete",
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
//# sourceMappingURL=group.view.model.js.map