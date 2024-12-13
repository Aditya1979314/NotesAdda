import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig";





export function Subject(){
const[subjects,setsubjects] = useState([]);

useEffect(()=>{
async function fetchdata(){
    const temparr = [];
    const documents = await getDocs(collection(db,'subjects'));
    documents.forEach((obj)=>{
        temparr.push({id:obj.id,subject:obj.data().subject});
    })

    setsubjects(temparr);
}

fetchdata();

return ()=>setsubjects([]);

},[])


    return (
        <div className="text-white row-span-7 col-span-6 lg:col-span-5 overflow-auto p-8 ">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12 md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-3">
              {
                subjects.map((subject)=>{
                    return <Card to={`/subjects/${subject.id}`} title={subject.subject}/>
                })
              }
            </div>
        </div>
    )
}