"use client";

import Header from "./components/Header";
import { PropsWithChildren, ReactNode } from "react";

function Layout({children}:PropsWithChildren){
    return<div className="w-full min-h-screen flex flex-col">
        <Header/>
        {children}
    </div>
}

export default Layout;