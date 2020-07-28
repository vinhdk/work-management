import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGroupUpdateProps } from "../../group-update.component";
import { RootState } from "src/app/reducers";
import { GroupVM } from "src/app/view-models";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useGroupAction } from "src/app/actions";
import { RenderGroupUpdateInformationComponent } from "./group-update-information.render";

export interface IGroupUpdateInformationProps extends IGroupUpdateProps {
    Id: string;
}

export const GroupUpdateInformationComponent = (props: IGroupUpdateInformationProps) => {
    const group = useSelector((state: RootState) => state.group.array).find(e => e.Id === props.Id);
    const [change, setChange] = useState(new Date());
    const dispatch = useDispatch();
    const initialForm: IFormControl = {
        "Id": {
            value: group ? group.Id : props.Id,
            valid: true,
            fire: true,
        },
        "Name": {
            value: group ? group.Name : "",
            valid: true,
            fire: true,
        },
    }
    const validation: IFormValidation = {
        "Id": {
            required: true
        },
        "Name": {
            required: true
        },
    }
    const useUpdate = (data: any) => {
        dispatch(useGroupAction().update(data));
        setChange(new Date());
    }
    const formService = useFormService(initialForm, validation, useUpdate);
    useEffect(() => {
        dispatch(useGroupAction().getAll());
    }, [change]);
    return <RenderGroupUpdateInformationComponent {...props} {...formService} />
}