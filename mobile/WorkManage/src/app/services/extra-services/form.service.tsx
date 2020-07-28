import { useState, useEffect, useCallback } from 'react';

export interface IFormControl {
    [key: string]: { value: any, valid: boolean, fire: boolean }
}

export interface IFormValidation {
    [key: string]: {
        required: boolean, validator?: { pattern?: RegExp, equalTo?: string, number?: { min: number, max: number } }
    }
}

export const useFormService = (initialForm: IFormControl, validation: IFormValidation, submitCallback: (data: any) => void) => {
    const [form, setForm] = useState<IFormControl>(initialForm);
    const [valid, setValid] = useState<boolean>(false);
    const [init, setInit] = useState<boolean>(false);
    const validateForm = useCallback(() => {
        let hasErrorInState = '';
        Object.keys(validation).forEach(key => {
            hasErrorInState += form[key].valid;
        });
        return !hasErrorInState.includes('false');
    }, [form, validation]);
    const useHandleOnChange = useCallback(
        ({ name, value }) => {
            const control = form[name];
            control.value = value;
            control.fire = true;
            control.valid = true;
            const validate = validation[name];
            if (validate.required) {
                if (!control.value || control.value === '') {
                    control.valid = false;
                }
            }

            if (validate.validator) {
                if (validate.validator.pattern) {
                    if (control.value && !validate.validator.pattern.test(control.value)) {
                        control.valid = false
                    }
                }
                if (validate.validator.equalTo) {
                    if (control.value !== form[validate.validator.equalTo].value) {
                        control.valid = false;
                    }
                }
                if(validate.validator.number) {
                    if (control.value < validate.validator.number.min || control.value > validate.validator.number.max) {
                        control.valid = false;
                    }
                }
            }
            setForm(prevForm => ({
                ...prevForm,
                [name]: control,
            }));
            setValid(validateForm());
        },
        [validation]
    );
    const useHandleOnSubmit = useCallback(
        () => {
            if (validateForm()) {
                const data: any = {};
                Object.keys(form).forEach(key => data[key] = form[key].value);
                submitCallback(data);
            }
        },
        [form]
    );
    const useCheckValid = (): boolean => {
        return validateForm();
    }
    const useGetFormControl = (name: string): { value: any; valid: boolean; fire: boolean; } => {
        return form[name];
    }
    const useReset = () => {
        setForm(initialForm);
        setInit(false);
    }
    const useResetByData = (data: IFormControl) => {
        setForm(data);
        setInit(false);
    }
    useEffect(() => {
        if (!init) {
            Object.keys(form).forEach((key, i) => {
                const control = form[key];
                control.valid = true;
                const validate = validation[key];
                if (validate.required) {
                    if (!control.value || control.value === '') {
                        control.valid = false;
                    }
                }

                if (validate.validator) {
                    if (validate.validator.pattern) {
                        if (control.value && !validate.validator.pattern.test(control.value)) {
                            control.valid = false
                        }
                    }
                    if (validate.validator.equalTo) {
                        if (control.value !== form[validate.validator.equalTo].value) {
                            control.valid = false;
                        }
                    }
                }
                setForm(prevForm => ({
                    ...prevForm,
                    [key]: control,
                }));
                setValid(validateForm());
            });
            setInit(true);
        }
    }, [init])
    return { useCheckValid, useHandleOnChange, useHandleOnSubmit, useGetFormControl, useReset, useResetByData };
}