import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GroupVM } from "src/app/view-models";
import { useGroupAction } from "src/app/actions";
import { RenderGroupInformationComponent } from "./group-information.render";
import { IGroupHomeProps } from "../../screens";

export interface IGroupInformationProps extends IGroupHomeProps {
    group: GroupVM
}

export const GroupInformationComponent = (props: IGroupInformationProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(useGroupAction().getAll());
    }, []);
    return <RenderGroupInformationComponent {...props} />
}