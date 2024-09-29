import React from "react";
import Text from "./Text";

type InputTextProps = {
    label: string;
    type?: "text" | "password";
    value: string;
    onChange: (value: string) => void;
};

function InputText({ label, type = "text", value, onChange }: InputTextProps) {
    return (
        <div className="mb-4">
            <Text className="text-sm">{label}</Text>
            <input
                className="font-Noto Sans Thai border rounded-md p-2 w-full"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoComplete="off"
            />
        </div>
    );
}

export default InputText;
