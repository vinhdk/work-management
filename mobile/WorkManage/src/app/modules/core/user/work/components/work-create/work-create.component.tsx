import React, { useEffect } from "react";
import { RenderWorkCreateComponent } from "./work-create.render";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useWorkAction } from "src/app/actions";
import { RootState } from "src/app/reducers";
import { IWorkHomeProps } from "../../screens";

export interface IWorkCreateProps extends IWorkHomeProps {
    useChildBack: () => void;
}

export const WorkCreateComponent = (props: IWorkCreateProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.profile);
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) ) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() );
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
            value: "0",
            valid: true,
            fire: true,
        },
        "SolveBy": {
            value: profile.Id,
            valid: true,
            fire: true,
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
    const useUpdate = (data: any) => {
        dispatch(useWorkAction().create(data));
        props.useChildBack();
    }
    const form = useFormService(initialForm, validation, useUpdate);
    useEffect(() => {
        form.useReset();
    }, []);
    return <RenderWorkCreateComponent {...props} formatDate={formatDate} {...form} />
}