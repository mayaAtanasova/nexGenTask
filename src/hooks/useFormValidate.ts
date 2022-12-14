import { useState } from "react";
import IForm from "../Interfaces/IForm";
import IFormError from "../Interfaces/IFormError";
import {
    textValidator,
    websiteValidator,
    phoneValidator,
    emailValidator,
    passwordValidator,
    confrimPasswordValidator,
    tocValidator
} from '../validators/validators';
import { cleanError } from '../helpers/emptyError'

const validatorsDict: {
    [key: string]: Function,
} = ({
    'firstName': textValidator,
    'lastName': textValidator,
    'birth': textValidator,
    'gender': textValidator,
    'favColor': textValidator,
    'bio': textValidator,
    'website': websiteValidator,
    'field': textValidator,
    'active': textValidator,
    'phone': phoneValidator,
    'email': emailValidator,
    'password': passwordValidator,
    'repass': confrimPasswordValidator,
    'image': textValidator,
    'toc': tocValidator
});

const useFormValidate = (form: IForm) => {

    const fields = Object.entries(form);

    const initialState: IFormError = cleanError;

    const [error, setError] = useState(initialState);

    const validateForm = (form: IForm) => {

        let nextErrors: IFormError = JSON.parse(JSON.stringify(error));

        const formArr = Object.entries(form);

        formArr.forEach((field) => {
            const fieldName = field[0];
            const fieldValue = field[1];
            const errorMessage = validatorsDict[fieldName](fieldValue, form.password);
            nextErrors[fieldName as keyof typeof nextErrors].err = !!errorMessage;
            nextErrors[fieldName as keyof typeof nextErrors].message = errorMessage;
        });

        const formErrors = Object.values(nextErrors);
        const isFormValid = formErrors.every(field => !field.err);
        setError(nextErrors);

        return {
            isFormValid,
        }
    }

    return {
        validateForm,
        error
    }
}

export default useFormValidate;