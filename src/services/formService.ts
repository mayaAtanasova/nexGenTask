import IForm from "../Interfaces/IForm";
const formBinURL = 'https://www.toptal.com/developers/postbin/api/bin';
console.log(formBinURL);

export const postForm = async (form: IForm) => {
    try {
        const response = await fetch(formBinURL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(form)
        });
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}