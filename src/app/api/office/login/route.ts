import {NextResponse, type NextRequest } from "next/server";
import {post} from "../../const";

export async function  POST(req: NextRequest) {
    const body = await req.json();

    const res = await post("/api/auth/login",body);

    const data = await res.json();

    if(res.status !== 200){
        return new NextResponse(JSON.stringify(data),{status:res.status});
    }

    const response = new NextResponse(JSON.stringify(data),{
        headers:{
            "Content-Type":"application/json",
        },
    });

    const option: any ={
        httpOnly: true,
        path:"/",
        sameSite:"lax",
    };

    response.cookies.set("token",data.token, option);

    return response;
}