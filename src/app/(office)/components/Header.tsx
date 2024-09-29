"use client";

import React from "react";
import { useState, useEffect } from "react";
import { logout } from "@/apis/office";
import { me } from "@/apis/users";
import { useUserStore } from "@/store/zustand";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text";

function Header() {
  const router = useRouter();

  const { username, setUser, clearUser } = useUserStore();
  useEffect(() => {
    if (!username) {
      me()
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          router.push("/office/login");
        });
    }
    // me().then((data)=> {
    //     setUser(data);
    // });
  }, []);

  const handelelogout = async ()=>{
    clearUser();
    await logout();
    router.push("/office/login");
  }

  return (
    <div className="w-full h-20 p-2 bg-orange-300 flex items-center">
      <div onClick={handelelogout}>
        <Text className="text-xl">{username}</Text>
      </div>
    </div>
  );
}
export default Header;
