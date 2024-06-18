interface InfoChartProps {
    title: string;
    chartData: number;
    disabled: boolean;
}

const InfoChart: React.FC<InfoChartProps> = (props: InfoChartProps) => {
    return (
        <div className="w-full my-2">
            <h1 className="text-base text-[#FFFFFF]">{props.title}</h1>
            <div className={`flex justify-center items-center w-full h-10 rounded-md ${props.disabled ? 'text-black bg-[#a6b5b3]' : 'bg-[#00A091]'}`}>
                <p>{props.chartData}%</p>
            </div>
        </div>
    )
}

export default InfoChart;