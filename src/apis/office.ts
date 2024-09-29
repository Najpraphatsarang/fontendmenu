import axios from "axios";

export const login = async(username: string, password: string)=>{
    const res = await axios.post("/api/office/login",{
        username,
        password,
    });

    return res.data;
};

export const logout =  async () =>{
    const res =await axios.post("/api/office/logout");
    return res.data;
}