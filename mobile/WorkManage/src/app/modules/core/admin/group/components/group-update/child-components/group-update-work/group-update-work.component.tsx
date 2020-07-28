import React, { useState, useEffect } from "react";
import { IGroupUpdateProps } from "../../group-update.component";
import { RenderGroupUpdateWorkComponent } from "./group-update-work.render";
import { useDispatch, useSelector } from "react-redux";
import { useUserAction, useWorkAction } from "src/app/actions";
export interface IGroupUpdateWorkProps extends IGroupUpdateProps {
    Id: string;
}

export const GroupUpdateWorkComponent = (props: IGroupUpdateWorkProps) => {
    const dispatch = useDispatch();
    const [type, setType] = useState<"list" | "create" | "update">("list");
    const [id, setId] = useState("");
    const [change, setChange] = useState(new Date());
    const useSetType = (value: "list" | "create" | "update") => {
        setType(value);
    }
    const useSetId = (value: string) => {
        setId(value);
    }
    const useChange = () => {
        setChange(new Date());
    }
    useEffect(() => {
        dispatch(useUserAction().getAll());
        dispatch(useWorkAction().getAll());
    }, [type, change]);
    return <RenderGroupUpdateWorkComponent useSetId={useSetId} useChange={useChange} id={id} useSetType={useSetType} type={type} {...props} />
}