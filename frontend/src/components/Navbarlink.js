import { Link } from "react-router-dom";




export function Navbarlink({to,Logo,label,isactive}){
    return (
        <Link to={to} className={`${isactive ? 'text-[#00C0E8]' : 'text-white'} text-white flex gap-1 items-center hover:bg-[#191919] px-4 py-2 cursor-pointer`}>
            <Logo isactive={isactive}/>
            <p className={`text-[15px] font-medium ml-2 ${isactive ? 'text-[#00C0E8]' : 'text-white'}`}>{label}</p>
        </Link>
    )
}