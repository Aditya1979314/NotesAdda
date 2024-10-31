import { Link } from "react-router-dom";




export function Navbarlink({to,Logo,label}){
    return (
        <Link to={to} className="text-white flex gap-1 items-center hover:bg-[#191919] hover:text-white px-4 py-2 cursor-pointer">
            <Logo/>
            <p className="text-[15px] font-medium ml-2">{label}</p>
        </Link>
    )
}