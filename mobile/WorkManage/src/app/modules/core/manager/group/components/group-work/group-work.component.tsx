import React, { useState, useEffect } from "react";
import { RenderGroupWorkComponent } from "./group-work.render";
import { GroupVM, UserVM } from "src/app/view-models";
import { IGroupHomeProps } from "../../screens";

export interface IGroupWorkProps extends IGroupHomeProps {
    group: GroupVM;
    accounts: UserVM[];
    useLoad: () => void;
}

export const GroupWorkComponent = (props: IGroupWorkProps) => {
    const [type, setType] = useState<"list" | "create" | "update">("list");
    const [id, setId] = useState("");
    const useSetType = (value: "list" | "create" | "update") => {
        setType(value);
    }
    const useSetId = (value: string) => {
        setId(value);
    }
    const useChange = () => {
        props.useLoad();
    }
    useEffect(() => {
        props.useLoad()
    }, [type]);
    return <RenderGroupWorkComponent useSetId={useSetId} useChange={useChange} id={id} useSetType={useSetType} type={type} {...props} />
}