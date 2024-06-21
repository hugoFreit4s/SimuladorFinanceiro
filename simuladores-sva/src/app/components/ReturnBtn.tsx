'use client';
import { useRouter } from "next/navigation";

export default function ReturnBtn(){
    const router = useRouter();
    return(
        <div className="w-full">
            <button className="text-[40px] ml-0 mt-0" onClick={() => {router.push('../')}}>&#x21E6;</button>
        </div>
    )
}