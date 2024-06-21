import React, { useState } from "react";
import { useRouter } from 'next/navigation';

interface ButtonsProps {
    text: string;
    route: string
}

const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
        router.push(props.route);
    };

    return (
        <button id="btn" onClick={handleClick}
        className={`self-center w-[200px] lg:w-[600px] bg-[#C9D200] hover:bg-[#DBE202] text-white font-bold py-2 px-4 border-[#8C9100] hover:border-[#7D8201] rounded ${isClicked ? 'border-b-0 mt-10' : 'mt-9 border-b-4'}`}>{props.text}</button>
    )
}

export default Buttons;