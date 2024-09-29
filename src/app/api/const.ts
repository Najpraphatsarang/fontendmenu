const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const post = async (url: string, body: any, token :string="") => {
    const res = await fetch(API_URL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    return res;
};

export const get = async (url: string, token: string =""): Promise<Response> =>{
    const res = await fetch(API_URL + url,{
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization": token,
        },
    });
    return res;
}