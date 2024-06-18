interface InfoChartProps {
    title: string;
    id: string;
    chartData: number;
    disabled: boolean;
}

const InfoChart: React.FC<InfoChartProps> = (props: InfoChartProps) => {
    return (
        <div className="w-full my-4">
            <h1 className="text-xs lg:text-base text-[#FFFFFF]">{props.title}</h1>
            <div className={`flex justify-center items-center w-full h-10 rounded-md ${props.disabled ? 'text-transparent bg-[#a6b5b3]' : 'bg-[#00A091]'}`}>
                <p id={props.id}>{props.chartData}%</p>
            </div>
        </div>
    )
}

export default InfoChart;