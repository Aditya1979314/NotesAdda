import { Cardques } from "../components/Cardques";
import { Videoyt } from "../components/Videoyt";



export function SubjectVideo(){
    return (
        <div className="text-white row-span-7 col-span-5 overflow-auto p-8">
            <div className="flex flex-col items-center h-4/5">
           <Videoyt/>
            </div>
           <div className="text-white font-bold text-xl mt-8 ml-12">
            Questions 
           </div>
            <div className="p-12 flex flex-col gap-5">
            <Cardques/>
            <Cardques/>   
            <Cardques/> 
            <Cardques/>
            <Cardques/>
            <Cardques/>  
            </div>
        </div>
    )
}