interface InputChartProps {
    title: string;
    id: string;
    disabled: boolean;
}


const InputChart: React.FC<InputChartProps> = (props: InputChartProps) => {
    return(
        <div className="w-full my-2">
            <h1 className="text-base text-[#FFFFFF]">{props.title}</h1>
            <input type="number" id={props.id} disabled={props.disabled} className={`flex text-center w-full h-10 bg-[#00A099] rounded-md h-10 ${props.disabled ? 'text-black bg-[#a6b5b3]' : 'bg-[#00A091]'}`}/>
        </div>
    )
}

export default InputChart;