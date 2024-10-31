import { Link } from "react-router-dom";


export function Bar({to,title}){
    return (
        <Link to={to}>
        <div className="p-2 px-4 bg-[#191919] mb-2 rounded-lg shadow-white hover:text-[#00C0E8]">
            <div>{title}</div>
        </div>
        </Link>
    )
}