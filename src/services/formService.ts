import IForm from "../Interfaces/IForm";
const formBinURL = 'https://www.toptal.com/developers/postbin/1664534379040-9028647961094';

export const postForm = async (form: IForm) => {

    try {
        const response = await fetch(formBinURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
        return response;
    } catch (err) {
        console.error(err);
    }

}