import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useWorkAction } from "src/app/actions";
import { WorkVM } from "src/app/view-models";
import { RootState } from "src/app/reducers";
import { Alert } from "react-native";
import { IGroupWorkProps } from "../../group-work.component";
import { RenderGroupWorkUpdateComponent } from "./group-work-update.render";

export interface IGroupWorkUpdateProps extends IGroupWorkProps {
    useChildBack: () => void;
    WorkId: string;
}

export const GroupWorkUpdateComponent = (props: IGroupWorkUpdateProps) => {
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        }
    }
    const dispatch = useDispatch();
    const work: WorkVM = useSelector((state: RootState) => state.work.array).find(e => e.Id === props.WorkId) || {} as any;
    const [fileUrl, setFileUrl] = useState<string | undefined>(work.FileUrl);
    const [done, setDone] = useState(work.Status !== "1" && work.Status !== "2" ? true : false);
    const solveBy = props.accounts.find(e => e.Id === work.SolveBy) || {} as any;
    const initialData: IFormControl = {
        "Id": {
            value: work.Id,
            valid: true,
            fire: true,
        },
        "Name": {
            value: work.Name,
            valid: true,
            fire: true,
        },
        "Content": {
            value: work.Content,
            valid: true,
            fire: true,
        },
        "ContentSolve": {
            value: work.ContentSolve,
            valid: true,
            fire: true,
        },
        "StartTime": {
            value: formatDate(work.StartTime),
            valid: true,
            fire: true,
        },
        "EndTime": {
            value: formatDate(work.EndTime),
            valid: true,
            fire: true,
        },
        "Status": {
            value: work.Status,
            valid: true,
            fire: true,
        },
        "SolveBy": {
            value: work.SolveBy,
            valid: work.SolveBy ? true : false,
            fire: work.SolveBy ? true : false,
        },
        "Description": {
            value: work.Description,
            valid: work.Description ? true : false,
            fire: work.Description ? true : false,
        },
        "Reason": {
            value: work.Reason,
            valid: work.Reason ? true : false,
            fire: work.Reason ? true : false,
        },
        "Mark": {
            value: work.Mark ? work.Mark + "" : null,
            valid: work.Mark ? true : false,
            fire: work.Mark ? true : false,
        },
        "EvaluatedTime": {
            value: work.EvaluatedTime ? formatDate(work.EvaluatedTime) : undefined,
            valid: true,
            fire: true,
        },
    }
    const validation: IFormValidation = {
        "Id": {
            required: true,
        },
        "Name": {
            required: true,
        },
        "Content": {
            required: true,
        },
        "StartTime": {
            required: true,
        },
        "EndTime": {
            required: true,
        },
        "Status": {
            required: true,
        },
        "SolveBy": {
            required: true,
        },
        "Description": {
            required: false,
        },
        "Reason": {
            required: false,
        },
        "Mark": {
            required: false,
            validator: {
                number: { min: 1, max: 10 }
            }
        },
        "EvaluatedTime": {
            required: false,
        },
        "ContentSolve": {
            required: false,
        },
    }
    const useUpdate = (data: any) => {
        if (work.Status === "0") {
            data.Status = "1";
        }
        if (work.Description !== data.Description || work.Mark !== data.Mark) {
            data.EvaluatedTime = formatDate(new Date());
        }
        dispatch(useWorkAction().update(data));
        props.useChildBack();
    }
    const form = useFormService(initialData, validation, useUpdate);
    const useDoneWork = () => {
        if (work.Status === "1") {
            Alert.alert('Xác nhận', 'Quyết định cập nhật trạng thái trễ hẹn cho công việc này?', [
                {
                    text: 'Đồng ý', onPress: () => {
                        form.useHandleOnChange({ name: "Status", value: "4" });
                        form.useHandleOnSubmit();
                    }
                },
                {
                    text: 'Hủy', style: "cancel"
                }
            ])

        } else {
            setDone(true);
            if (work.Status === "2") {
                form.useHandleOnChange({ name: "Status", value: "3" });

            }
        }
    }
    const useCheckAnother = (): boolean => {
        const a = work.SolveBy;
        const b = form.useGetFormControl("SolveBy").value;
        return a !== b;
    }
    return <RenderGroupWorkUpdateComponent {...props} fileUrl={fileUrl} inititalStatus={work.Status} done={done} useCheckAnother={useCheckAnother} useDoneWork={useDoneWork} extra={{ solveBy }} formatDate={formatDate} {...form} />
}