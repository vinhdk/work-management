import React from "react";
import { IGroupWorkProps } from "./group-work.component";
import { useStyles } from "./group-work.styles";
import { GroupWorkListComponent, GroupWorkCreateComponent, GroupWorkUpdateComponent } from "./child-components";

export interface IRenderGroupWorkProps extends IGroupWorkProps {
    type: "list" | "create" | "update";
    id: string;
    useSetType: (value: "list" | "create" | "update") => void;
    useSetId: (value: string) => void;
    useChange: () => void;
}
export const RenderGroupWorkComponent = (props: IRenderGroupWorkProps) => (
    props.type === "list"
        ? <GroupWorkListComponent useReload={() => props.useChange()} useClickCreate={() => props.useSetType("create")} useClickUpdate={(value) => { props.useSetType("update"); props.useSetId(value) }} {...props} /> :
        props.type === "create"
            ? <GroupWorkCreateComponent useChildBack={() => { props.useSetType("list") }} {...props} />
            : <GroupWorkUpdateComponent WorkId={props.id} useChildBack={() => { props.useSetType("list") }} {...props} />
);