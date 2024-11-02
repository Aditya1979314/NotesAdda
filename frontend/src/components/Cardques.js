import { Link } from "react-router-dom";




export function Cardques({title,to}){
    return (
        <div className="bg-[#191919] p-4 flex flex-col justify-between h-96 rounded-lg shadow-sm shadow-gray-50 ">
            <div>
                {title}
            </div>
            <Link className="hover:text-[#00C0E8]">Solution →</Link>
        </div>
    )
}