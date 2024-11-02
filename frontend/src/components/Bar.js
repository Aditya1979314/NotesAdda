import { Link } from "react-router-dom";


export function Bar({link,setlink,title,setisopen}){
    return (
        <button onClick={()=>{setisopen(true); setlink(link)}} className="block w-full text-start">
        <div className="p-2 px-4 bg-[#191919] mb-2 rounded-lg shadow-white hover:text-[#00C0E8]">
            <div>{title}</div>
        </div>
        </button>
    )
}