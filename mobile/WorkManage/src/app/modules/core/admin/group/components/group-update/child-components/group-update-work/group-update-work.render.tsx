import React from "react";
import { IGroupUpdateWorkProps } from "./group-update-work.component";
import { useStyles } from "./group-update-work.styles";
import { GroupUpdateWorkListComponent, GroupUpdateWorkCreateComponent, GroupUpdateWorkUpdateComponent } from "./child-components";

export interface IRenderGroupUpdateWorkProps extends IGroupUpdateWorkProps {
    type: "list" | "create" | "update";
    id: string;
    useSetType: (value: "list" | "create" | "update") => void;
    useSetId: (value: string) => void;
    useChange: () => void;
}
export const RenderGroupUpdateWorkComponent = (props: IRenderGroupUpdateWorkProps) => (
    props.type === "list"
        ? <GroupUpdateWorkListComponent useReload={() => props.useChange()} useClickCreate={() => props.useSetType("create")} useClickUpdate={(value) => { props.useSetType("update"); props.useSetId(value) }} {...props} /> :
        props.type === "create"
            ? <GroupUpdateWorkCreateComponent useChildBack={() => { props.useSetType("list") }} {...props} />
            : <GroupUpdateWorkUpdateComponent WorkId={props.id} useChildBack={() => { props.useSetType("list") }} {...props} />
);