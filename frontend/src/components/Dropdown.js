import { useEffect, useState } from "react"
import { Downarrow } from "../assests/Downarrow";
import { Bar } from "./Bar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";




export function Dropdown({title,contentType,setlink,setisopen}){
    const[isopend,setisopend] = useState(false);
    const [data,setdata] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const q = query(collection(db,"pdflinks"),where("subject","==",title),where("contentType","==",contentType));
            const querysnapshot = await getDocs(q);
            let temparr = [];
            querysnapshot.forEach((doc)=>{
                temparr.push(doc.data());
            })
            setdata(temparr);
        }

        fetchdata();

        return ()=>{
            setdata([]);
        }
    },[contentType,title])

    return (
        <>
        <div className="p-2 px-4 bg-[#191919] mb-2 rounded-lg shadow-white hover:text-[#00C0E8] cursor-pointer flex justify-between" onClick={()=>setisopend((prev)=>!prev)}>
          {title}
          <Downarrow/>
        </div>

        {
            isopend && 
            <div>
                {
                    data.map((obj)=>{
                        return <Bar link={obj.url} setlink={setlink} setisopen={setisopen} title={obj.year}/>
                    })
                }
            </div>
        }
        </>
    )
}