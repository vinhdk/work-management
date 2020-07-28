import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/reducers";
import { useUserAction, useWorkAction } from "src/app/actions";
import { WorkVM } from 'src/app/view-models';
import { Alert } from "react-native";
import { RenderGroupUpdateWorkListComponent } from "./group-update-work-list.render";
import { IGroupUpdateWorkProps } from "../../group-update-work.component";

export interface IGroupUpdateWorkListProps extends IGroupUpdateWorkProps {
    Id: string;
    type: "list" | "create" | "update";
    useClickCreate: () => void;
    useReload: () => void;
    useClickUpdate: (value: string) => void;
}

export const GroupUpdateWorkListComponent = (props: IGroupUpdateWorkListProps) => {
    const users = useSelector((state: RootState) => state.user.array, (left, right) => {
        return false;
    }).filter(e => e.GroupId === props.Id);
    const works: WorkVM[] = useSelector((state: RootState) => state.work.array, (left, right) => {
        return false;
    }).filter(e => users.findIndex(u => u.Id === e.SolveBy) > -1);
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        }
    }
    const listStatus = [
        {
            label: "Chờ duyệt thực hiện",
            value: "0",
            color: "#6a737c"
        },
        {
            label: "Đang thực hiện",
            value: "1",
            color: "#379fef"
        },
        {
            label: "Chờ duyệt kết thúc",
            value: "2",
            color: "#5eba7d"
        },
        {
            label: "Kết thúc",
            value: "3",
            color: "#bd5c00"
        },
        {
            label: "Trễ hạn",
            value: "4",
            color: "#f2720c"
        },
        {
            label: "Không thể thực hiện",
            value: "5",
            color: "#f7aa6d"
        }
    ];
    const compareDate = (from: string | undefined, to: string | undefined, start: string | undefined, end: string | undefined) => {
        if (start && end) {
            if (from && to) {
                return new Date(start).getTime() >= new Date(from).getTime() && new Date(end).getTime() <= new Date(to).getTime();
            } else if (from) {
                return new Date(start).getTime() >= new Date(from).getTime();
            } else if (to) {
                return new Date(end).getTime() <= new Date(to).getTime();
            } else {
                return true;
            }
        } else if (start) {
            if (from) {
                return new Date(start).getTime() >= new Date(from).getTime();
            } else {
                return true;
            }
        } else if (end) {
            if (to) {
                return new Date(end).getTime() <= new Date(to).getTime();
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    const [search, setSearch] = useState<{ name: string, from: string | undefined, to: string | undefined, user: string, status: string }>({ name: "", from: undefined, to: undefined, user: "", status: "" });
    const dispatch = useDispatch();
    const useFilter: () => Array<WorkVM> = () => works.filter(work => work.Name.includes(search.name) && work.Status.includes(search.status) && work.SolveBy.includes(search.user) && compareDate(search.from, search.to, formatDate(work.StartTime), formatDate(work.EndTime)));
    const useRemove = (id: string) => {
        Alert.alert('Xác nhận', 'Quyết định xóa', [
            {
                text: 'Xóa', onPress: () => {
                    dispatch(useWorkAction().remove(id));
                    props.useReload();
                }
            },
            {
                text: 'Hủy', style: "cancel"
            }
        ])
    }
    const useSearch = (search: { name: string, from: string | undefined, to: string | undefined, user: string, status: string }) => {
        setSearch({ ...search })
    }
    return <RenderGroupUpdateWorkListComponent listStatus={listStatus} formatDate={formatDate} {...props} extra={{ users }} useFilter={useFilter} useSearch={useSearch} useRemove={useRemove} search={search} />
}