"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkCM {
    constructor(model) {
        this.getData = (UpdateBy, CreateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy, CreateBy });
            delete data.getData;
            return data;
        };
        this.Name = model.Name;
        this.Content = model.Content;
        this.StartTime = model.StartTime;
        this.EndTime = model.EndTime;
        this.Status = model.Status;
        this.SolveBy = model.SolveBy;
    }
}
exports.WorkCM = WorkCM;
class WorkUM {
    constructor(model) {
        this.getData = (UpdateBy) => {
            const data = Object.assign(Object.assign({}, this), { UpdateBy });
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.Name = model.Name;
        this.Content = model.Content;
        this.ContentSolve = model.ContentSolve;
        this.Description = model.Description;
        this.Reason = model.Reason;
        this.Mark = model.Mark;
        this.EvaluatedTime = model.EvaluatedTime;
        this.StartTime = model.StartTime;
        this.EndTime = model.EndTime;
        this.Status = model.Status;
        this.SolveBy = model.SolveBy;
        this.FileUrl = model.FileUrl;
        this.IsDelete = model.IsDelete;
    }
}
exports.WorkUM = WorkUM;
class WorkVM {
    constructor(model) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = model.Id;
        this.Name = model.Name;
        this.Content = model.Content;
        this.ContentSolve = model.ContentSolve;
        this.Description = model.Description;
        this.Reason = model.Reason;
        this.Mark = model.Mark;
        this.EvaluatedTime = model.EvaluatedTime;
        this.StartTime = model.StartTime;
        this.EndTime = model.EndTime;
        this.Status = model.Status;
        this.SolveBy = model.SolveBy;
        this.FileUrl = model.FileUrl;
        this.IsDelete = model.IsDelete;
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
                Content: {
                    minlength: 1,
                    titile: "Content",
                    type: "string",
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
                SolveBy: {
                    minlength: 1,
                    titile: "SolveBy",
                    type: "string",
                },
            },
            required: [
                "Name",
                "Content",
                "StartTime",
                "EndTime",
                "Status",
                "SolveBy",
            ],
            type: "object",
        },
        WorkUM: {
            additionalProperties: false,
            properties: {
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
                Name: {
                    minLength: 1,
                    title: "Name",
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
                StartTime: {
                    minlength: 1,
                    titile: "StartTime",
                    type: "string",
                    format: "date",
                },
                EvaluatedTime: {
                    minlength: 1,
                    titile: "EvaluatedTime",
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
                SolveBy: {
                    minlength: 1,
                    titile: "SolveBy",
                    type: "string",
                },
                Reason: {
                    minlength: 1,
                    titile: "Reason",
                    type: "string",
                },
                FileUrl: {
                    minlength: 1,
                    titile: "FileUrl",
                    type: "object",
                },
            },
            required: [
                "Id",
                "Name",
                "Content",
                "StartTime",
                "EndTime",
                "Status",
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
//# sourceMappingURL=work.view-model.js.map