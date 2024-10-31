


export function Upnavbar(){
    return(
        <div className="p-2 border-b border-[#191919] col-span-5 flex items-center justify-between">
            <div className="border border-gray-50 ml-6 top-10 hover:border-[#00C0E8]">
            <select className="hover:text-[#00C0E8] bg-[#191919] text-white border-[#191919] px-5 py-2 cursor-pointer">
                <option className="hover:bg-[#191919] cursor-pointer">First Year</option>
                <option className="hover:bg-[#191919] cursor-pointer">Second Year</option>
                <option className="hover:bg-[#191919] cursor-pointer">Third Year</option>
                <option className="hover:bg-[#191919] cursor-pointer">Fourth Year</option>
            </select>
            </div>
            <div className="text-white mr-7">
                User
            </div>
        </div>
    )
}