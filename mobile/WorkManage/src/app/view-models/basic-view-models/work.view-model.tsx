import FormData from 'form-data';
export class WorkCM {
    public Name: string;
    public Content: string;
    public StartTime: Date;
    public EndTime: Date;
    public Status: string;
    public SolveBy: string;
    constructor(model: WorkCM) {
        this.Name = model.Name;
        this.Content = model.Content;
        this.StartTime = model.StartTime;
        this.EndTime = model.EndTime;
        this.Status = model.Status;
        this.SolveBy = model.SolveBy;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class WorkUM {
    public Id: string;
    public Name: string;
    public Content: string;
    public ContentSolve: string;
    public Description: string;
    public Reason: string;
    public Mark: number;
    public EvaluatedTime: Date;
    public StartTime: Date;
    public EndTime: Date;
    public Status: string;
    public SolveBy: string;
    public FileUrl: { data: string; uri: string | undefined; type: string | undefined; name: string | undefined; };
    public IsDelete: boolean;
    constructor(model: WorkUM) {
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
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class WorkVM {
    public Id: string;
    public Name: string;
    public Content: string;
    public ContentSolve: string;
    public Description: string;
    public Reason: string;
    public Mark: number;
    public EvaluatedTime: Date;
    public StartTime: Date;
    public EndTime: Date;
    public Status: string;
    public SolveBy: string;
    public FileUrl: string;
    public IsDelete: boolean;
    constructor(model: WorkVM) {
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
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class WorkState {
    array: Array<WorkVM>;
    constructor() {
        this.array = [];
    }
}