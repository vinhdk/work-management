"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkCM {
    constructor() {
        this.Name = undefined;
        this.Origin = undefined;
        this.Content = undefined;
        this.ContentSolve = undefined;
        this.Description = undefined;
        this.Mask = undefined;
        this.EvaluatedTime = undefined;
        this.StartTime = undefined;
        this.EndTime = undefined;
        this.Status = undefined;
        this.UserId = undefined;
        this.SolveBy = undefined;
    }
    getData() {
        return {
            Name: this.Name,
            Origin: this.Origin,
            Content: this.Content,
            ContentSolve: this.ContentSolve,
            Description: this.Description,
            Mask: this.Mask,
            EvaluatedTime: this.EvaluatedTime,
            StartTime: this.StartTime,
            EndTime: this.EndTime,
            Status: this.Status,
            UserId: this.UserId,
            SolveBy: this.SolveBy,
        };
    }
}
exports.WorkCM = WorkCM;
class WorkUM {
    constructor() {
        this.Id = undefined;
        this.Name = undefined;
        this.Origin = undefined;
        this.Content = undefined;
        this.ContentSolve = undefined;
        this.Description = undefined;
        this.Mask = undefined;
        this.EvaluatedTime = undefined;
        this.StartTime = undefined;
        this.EndTime = undefined;
        this.Status = undefined;
        this.UserId = undefined;
        this.SolveBy = undefined;
        this.FileUrl = undefined;
    }
    getData() {
        return {
            Name: this.Name,
            id: this.Id,
            Origin: this.Origin,
            Content: this.Content,
            ContentSolve: this.ContentSolve,
            Description: this.Description,
            Mask: this.Mask,
            EvaluatedTime: this.EvaluatedTime,
            StartTime: this.StartTime,
            EndTime: this.EndTime,
            Status: this.Status,
            UserId: this.UserId,
            SolveBy: this.SolveBy,
            FileUrl: this.FileUrl,
        };
    }
}
exports.WorkUM = WorkUM;
class WorkVM {
    constructor() {
        this.Id = undefined;
        this.Name = undefined;
        this.Origin = undefined;
        this.Content = undefined;
        this.ContentSolve = undefined;
        this.Description = undefined;
        this.Mask = undefined;
        this.EvaluatedTime = undefined;
        this.StartTime = undefined;
        this.EndTime = undefined;
        this.Status = undefined;
        this.UserId = undefined;
        this.IsDelete = undefined;
        this.SolveBy = undefined;
    }
}
exports.WorkVM = WorkVM;
exports.WorkSwagger = {
    definitions: {
        WorkCM: {
            additionalProperties: false,
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Origin: {
                    minlength: 1,
                    titile: "Origin",
                    type: "string",
                },
                Content: {
                    minlength: 1,
                    titile: "Content",
                    type: "string",
                },
                ContentSolve: {
                    minlength: 1,
                    titile: "ContentSolve",
                    type: "string",
                },
                Description: {
                    minlength: 1,
                    titile: "Description",
                    type: "string",
                },
                Mask: {
                    minlength: 1,
                    titile: "Mask",
                    type: "integer",
                    format: "int64",
                },
                EvaluatedTime: {
                    minlength: 1,
                    titile: "EvaluatedTime",
                    type: "string",
                    format: "date",
                },
                StartTime: {
                    minlength: 1,
                    titile: "StartTime",
                    type: "string",
                    format: "date",
                },
                EndTime: {
                    minlength: 1,
                    titile: "EndTime",
                    type: "string",
                    format: "date",
                },
                Status: {
                    minlength: 1,
                    titile: "Status",
                    type: "string",
                },
                UserId: {
                    minlength: 1,
                    titile: "UserId",
                    type: "string",
                },
                SolveBy: {
                    minlength: 1,
                    titile: "SolveBy",
                    type: "string",
                },
            },
            required: [
                "Name",
                "Origin",
                "Content",
                "ContentSolve",
                "Mask",
                "EvaluatedTime",
                "StartTime",
                "EndTime",
                "Status",
                "UserId",
                "SolveBy",
            ],
            type: "object",
        },
        WorkUM: {
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
                Origin: {
                    minlength: 1,
                    titile: "Origin",
                    type: "string",
                },
                Content: {
                    minlength: 1,
                    titile: "Content",
                    type: "string",
                },
                ContentSolve: {
                    minlength: 1,
                    titile: "ContentSolve",
                    type: "string",
                },
                Description: {
                    minlength: 1,
                    titile: "Description",
                    type: "string",
                },
                Mask: {
                    minlength: 1,
                    titile: "Mask",
                    type: "integer",
                    format: "int64",
                },
                EvaluatedTime: {
                    minlength: 1,
                    titile: "EvaluatedTime",
                    type: "string",
                    format: "date",
                },
                StartTime: {
                    minlength: 1,
                    titile: "StartTime",
                    type: "string",
                    format: "date",
                },
                EndTime: {
                    minlength: 1,
                    titile: "EndTime",
                    type: "string",
                    format: "date",
                },
                Status: {
                    minlength: 1,
                    titile: "Status",
                    type: "string",
                },
                UserId: {
                    minlength: 1,
                    titile: "UserId",
                    type: "string",
                },
                SolveBy: {
                    minlength: 1,
                    titile: "SolveBy",
                    type: "string",
                },
                FileUrl: {
                    minlength: 1,
                    titile: "FileUrl",
                    type: "string",
                },
            },
            required: [
                "Id",
                "Name",
                "Origin",
                "Content",
                "ContentSolve",
                "Mask",
                "EvaluatedTime",
                "StartTime",
                "EndTime",
                "Status",
                "UserId",
                "SolveBy",
            ],
            type: "object",
        },
    },
    paths: {
        "/api/Work": {
            get: {
                tags: ["Work"],
                operationId: "Work_Get",
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
                tags: ["Work"],
                operationId: "Work_Post",
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
                            $ref: "#/definitions/WorkCM",
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
                tags: ["Work"],
                operationId: "Work_Put",
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
                            $ref: "#/definitions/WorkUM",
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
        "/api/Work/{id}": {
            get: {
                tags: ["Work"],
                operationId: "Work_GetById",
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
                tags: ["Work"],
                operationId: "Work_Delete",
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
//# sourceMappingURL=work.view.model.js.map