export default function Footer() {
    return (
        <div className="inline-flex items-center justify-center w-full lg:my-56 my-10 order-last">
            <hr className="w-full h-1 my-0 bg-black-200 border-0 rounded dark:bg-white" />
            <div className="flex justify-center items-center absolute -translate-x-1/2 bg-white left-1/2 h-[50px] lg:h-[100px] dark:bg-[#003641] rounded-md w-[40%]">
                <img src="Logo All White.png" alt="" className="h-[60px] lg:h-[200px] text-red-500 mx-auto" />
            </div>
        </div>
    )
}