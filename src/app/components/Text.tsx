import { PropsWithChildren } from "react";

type Props = {
    className?: string;
};

function Text({ children, className }: PropsWithChildren<Props>) {
    return <p className={`font-Noto Sans Thai ${className}`}>{children}</p>; // ใช้ backticks (``) แทน
}

export default Text;
