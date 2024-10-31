import { Link } from "react-router-dom";




export function Card({title,descp,to}){
    return (
        <Link to={to} className="bg-[#191919] p-4 flex flex-col justify-between h-44 rounded-lg shadow-sm shadow-gray-50 transition ease-in-out hover:text-[#00C0E8] hover:scale-110 hover:border-[#00C0E8] hover:border hover:shadow group">
            <div>
            <div className="text-2xl font-semibold">{title}</div>
            <div className="text-sm text-gray-500 group-hover:text-[#00C0E8]">{descp}</div>
            </div>
            <div>View all →</div> 
        </Link>
    )
}