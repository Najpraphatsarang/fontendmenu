"use client";

import React, { useEffect, useState } from "react";
import InputText from "@/app/components/InputText";
import Text from "@/app/components/Text";
import {login} from "@/apis/office";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/zustand";

function Login() {

  const router = useRouter();
  const{id} = useUserStore();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () =>{
    try{
      const res = await login(username, password);
      router.push("/office");
    }catch(error){
      console.error(error);
    }
  }
  useEffect(() =>{
    if(id){
      router.push("/office");
    }
  },[]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 gb-2">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <InputText label="Username" value={username} onChange={setUsername}/>
      <InputText label="Password" type="password" value={password} onChange={setPassword}/>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition duration-200"
      type="button"
      onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
