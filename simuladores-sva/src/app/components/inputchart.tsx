import React from "react";

interface InputChartProps {
    title: string;
    id: string;
    disabled: boolean;
}


const InputChart: React.FC<InputChartProps> = (props: InputChartProps) => {
    return (
        <div className="w-full my-4">
            <h1 className="text-xs lg:text-base text-[#FFFFFF]">{props.title}*</h1>
            <input type="number" placeholder="Insira o valor" min={0} max={100} id={props.id} disabled={props.disabled} className={`flex text-center w-full h-10 placeholder-black bg-[#00A099] rounded-md h-10 ${props.disabled ? 'text-black bg-[#a6b5b3]' : 'bg-[#00A091]'}`} />
        </div>
    )
}

export default InputChart;