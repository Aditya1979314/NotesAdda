import { Collegelogo } from "./Collegelogo";



export function Upnavbar(){
    return(
        <div className="p-1 lg:p-2 border-b border-[#191919] col-span-6 lg:col-span-5 flex items-center justify-end">
            <div className="mr-2">
            <Collegelogo/>
            </div>
        </div>
    )
}