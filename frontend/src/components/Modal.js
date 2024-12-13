import { Link } from "react-router-dom";


export function Modal({setisopen,link}){
    return (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">

            <div className="absolute top-0 left-0 w-full h-full bg-[#111318] opacity-50 " onClick={()=>setisopen(false)}></div>

                    <div className="bg-[#191919] text-black h-1/2 w-5/6 lg:h-3/4 lg:w-1/2 rounded-lg z-10">
                            <div className="border-b border-gray-50 p-4 flex justify-end gap-2">
                            <a className="bg-[#7F00FC] px-2 py-1 lg:px-4 lg:py-2 text-white rounded hover:opacity-50]" href={link} target="_blank">Open in new tab</a>
                            <Link className="bg-red-600 px-2 py-1 lg:px-4 lg:py-2 text-white hover:bg-red-500 rounded" onClick={()=>setisopen(false)}>Close</Link>
                            </div>
                            <div className=" mt-2 h-4/5 p-4">
                             <iframe src={link}
                             className="h-full w-full"
                             />
                            </div>
                    </div>
            </div>
    )
}