import IFormError from "../Interfaces/IFormError";

export const cleanError: IFormError = {
    firstName: { err: false, message: '' },
    lastName: { err: false, message: '' },
    birth: { err: false, message: '' },
    gender: { err: false, message: '' },
    favColor: { err: false, message: '' },
    bio: { err: false, message: '' },
    website: { err: false, message: '' },
    field: { err: false, message: '' },
    active: { err: false, message: '' },
    phone: { err: false, message: '' },
    email: { err: false, message: '' },
    password: { err: false, message: '' },
    repass: { err: false, message: '' },
    image: { err: false, message: '' },
    toc: { err: false, message: '' },
}