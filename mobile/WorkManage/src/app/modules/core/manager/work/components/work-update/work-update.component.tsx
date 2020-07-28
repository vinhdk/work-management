import React, {useState} from "react";
import { RenderWorkUpdateComponent } from "./work-update.render";
import { useDispatch, useSelector } from "react-redux";
import { IFormControl, IFormValidation, useFormService } from "src/app/services";
import { useWorkAction } from "src/app/actions";
import { WorkVM } from "src/app/view-models";
import { RootState } from "src/app/reducers";
import { IWorkHomeProps } from "../../screens";
import ImagePicker from 'react-native-image-picker';

export interface IWorkUpdateProps extends IWorkHomeProps {
    useChildBack: () => void;
    WorkId: string;
}

export const WorkUpdateComponent = (props: IWorkUpdateProps) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.auth.profile);
    let work = useSelector((state: RootState) => state.work.array).filter((e) => e.SolveBy === profile.Id).find(e => e.Id === props.WorkId) || {} as any;
    const formatDate = (date: Date | string): string => {
        if (typeof date === "string") {
            return date.split("T")[0];
        } else {
            return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) ) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate() );
        }
    }
    const [fileUrl, setFileUrl] = useState<string | undefined>(work.FileUrl);
    const initialData = {
        "Id": {
            value: work.Id,
            valid: true,
            fire: true,
        },
        "Name": {
            value: work.Name,
            valid: true,
            fire: true,
        },
        "Content": {
            value: work.Content,
            valid: true,
            fire: true,
        },
        "ContentSolve": {
            value: work.ContentSolve,
            valid: true,
            fire: true,
        },
        "Reason": {
            value: work.Reason,
            valid: true,
            fire: true,
        },
        "StartTime": {
            value: formatDate(work.StartTime),
            valid: true,
            fire: true,
        },
        "EndTime": {
            value: formatDate(work.EndTime),
            valid: true,
            fire: true,
        },
        "Status": {
            value: work.Status,
            valid: true,
            fire: true,
        },
        "SolveBy": {
            value: work.SolveBy,
            valid: work.SolveBy ? true : false,
            fire: work.SolveBy ? true : false,
        },
        "EvaluatedTime": {
            value: work.EvaluatedTime ? formatDate(work.EvaluatedTime) : undefined,
            valid: true,
            fire: true,
        },
        "FileUrl": {
            value: work.FileUrl ? { data: "", uri: work.FileUrl, type: "", name: "" } : undefined,
            valid: true,
            fire: true
        }
    }
    const validation = {
        "Id": {
            required: true,
        },
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
        },
        "ContentSolve": {
            required: false,
        },
        "Reason": {
            required: false,
        },
        "EvaluatedTime": {
            required: false,
        },
        "FileUrl": {
            required: false,
        }
    }
    const useSelectPhoto = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            title: 'Chọn 1 ảnh',
            chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
            takePhotoButtonTitle: 'Chụp ảnh',
            cancelButtonTitle: 'Hủy chọn',
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setFileUrl(response.uri);
                form.useHandleOnChange({ name: "FileUrl", value: { data: response.data, uri: response.uri, type: response.type, name: response.fileName } })
            }
        });
    }
    const useSetFileUrl = (data: string | undefined) => {
        setFileUrl(data);
    }
    const useUpdate = (data: any) => {
        if (data.Status === "3") {
            data.Status = "2";
        }
        dispatch(useWorkAction().update(data));
        props.useChildBack();
    }
    const form = useFormService(initialData, validation, useUpdate);
    return <RenderWorkUpdateComponent {...props} status={work.Status} useSetFileUrl={useSetFileUrl} fileUrl={fileUrl} useSelectPhoto={useSelectPhoto} formatDate={formatDate} {...form} />
}