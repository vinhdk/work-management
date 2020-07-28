import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { WorkStack } from 'src/app/types/naviagtion-types/core/user/work/work.type';
import { WorkNavigationProps } from '../../work.routing';
import { WorkHomeRender } from './work-home.render';
import { WorkListComponent, WorkCreateComponent, WorkUpdateComponent } from '../../components';
import { useDispatch } from 'react-redux';
import { useWorkAction } from 'src/app/actions';
export type WorkHomeNavigationProps = CompositeNavigationProp<StackNavigationProp<WorkStack, 'WorkHome'>, WorkNavigationProps>;
export type WorkHomeRouteProps = RouteProp<WorkStack, 'WorkHome'>;
export interface IWorkHomeProps {
    navigation: WorkHomeNavigationProps;
    route: WorkHomeRouteProps;
}
export const WorkHomeComponent = (props: IWorkHomeProps) => {
    const dispatch = useDispatch();
    const [change, setChange] = useState(new Date());
    const useTitle = () => "Công việc";
    const useType = () => "main";
    const useName: () => "Admin" | "User" | "Manager" = () => "User";
    const [type, setType] = useState<"list" | "create" | "update">("list");
    const [id, setId] = useState("");
    const useContent = () => {
        return type === "list" ?
            <WorkListComponent useReload={() => setChange(new Date())} useClickCreate={() => setType("create")} useClickUpdate={(value) => { setType("update"); setId(value); }} {...props} /> :
            (type === "create" ?
                <WorkCreateComponent useChildBack={() => setType("list")} {...props} /> :
                <WorkUpdateComponent WorkId={id} useChildBack={() => setType("list")} {...props} {...props} />)
    }
    useEffect(() => {
        dispatch(useWorkAction().getAll());
    }, [type, change]);
    return <WorkHomeRender useName={useName} {...props} useTitle={useTitle} useType={useType} useContent={useContent} />;
}