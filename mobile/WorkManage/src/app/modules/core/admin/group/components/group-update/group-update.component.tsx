import React, { useEffect, useState } from "react";
import { IGroupHomeProps } from "../../screens";
import { RenderGroupUpdateComponent } from "./group-update.render";

export interface IGroupUpdateProps extends IGroupHomeProps {
    useBack: () => void;
    Id: string;
}

export const GroupUpdateComponent = (props: IGroupUpdateProps) => {
    return <RenderGroupUpdateComponent {...props} Id={props.Id} />
}