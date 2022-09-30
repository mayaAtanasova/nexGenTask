
export const textValidator = (text: string): string => {
    if (!text) {
        return 'is required';
    }
    return '';
};

export const websiteValidator = (text: string): string => {
    if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(text)) {
        return "Enter an URL in the format http(s)://www.example.com"
    }
    return '';
}

export const phoneValidator = (value: string): string => {
    if (value === ''){
        return 'The field is required'
    } else if (isNaN(Number(value))) {
        return "Please enter only digits"
    }
    return '';
}

export const emailValidator = (email: string): string => {
    if (!email) {
        return 'Email is required';
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
        return 'Email is invalid';
    }
    return '';
};

export const passwordValidator = (password: string): string => {
    if (!password) {
        return 'Password is required';
    } else if (password.length < 8) {
        return 'Password must be at least 8 characters';
    }
    return '';
};

export const confrimPasswordValidator = (confirmPassword: string, password: string): string => {
    if (!confirmPassword) {
        return 'Confirm Password is required';
    } else if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return '';
};

export const tocValidator = (isChecked:boolean): string => {
    return isChecked ? '' : 'You have to accept the terms and conditions'
}