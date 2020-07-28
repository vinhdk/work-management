import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useUserAction, useWorkAction } from "src/app/actions";
import { UserVM } from "src/app/view-models";
import { RootState } from "src/app/reducers";
import { RenderGroupWorkCreateComponent } from "./group-work-create.render";
import { IGroupWorkProps } from "../../group-work.component";

export interface IGroupWorkCreateProps extends IGroupWorkProps {
    useChildBack: () => void;
}

export const GroupWorkCreateComponent = (props: IGroupWorkCreateProps) => {
    const dispatch = useDispatch();
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        }
    }
    const initialForm: IFormControl = {
        "Name": {
            value: "",
            valid: false,
            fire: false,
        },
        "Content": {
            value: "",
            valid: false,
            fire: false,
        },
        "StartTime": {
            value: null,
            valid: false,
            fire: false,
        },
        "EndTime": {
            value: null,
            valid: false,
            fire: false,
        },
        "Status": {
            value: "1",
            valid: true,
            fire: true,
        },
        "SolveBy": {
            value: "",
            valid: false,
            fire: false,
        }
    }
    const validation: IFormValidation = {
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
        }
    }
    const useCreate = (data: any) => {
        dispatch(useWorkAction().create(data));
        props.useChildBack();
    }
    const form = useFormService(initialForm, validation, useCreate);
    return <RenderGroupWorkCreateComponent {...props} formatDate={formatDate} {...form} />
}