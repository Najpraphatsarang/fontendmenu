import Link from "next/link";

function Nav(){
    return<div className="w-full flex justify-center items-center gap-4">
        <link href="/">Home</link>
        <link href="/login">Login</link>
    </div>
}
export default Nav;