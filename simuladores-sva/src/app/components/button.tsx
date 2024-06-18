import React, { useState } from "react";

interface ButtonsProps {
    text: string;
}

const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {
    return (
        <button className="bg-[#C9D200] hover:bg-[#DBE202] text-white font-bold py-2 px-4 border-b-4 border-[#8C9100] hover:border-[#7D8201] rounded">{props.text}</button>
    )
}

export default Buttons;