import { collection, getDocs, query, where } from "firebase/firestore";
import { Card } from "../components/Card";
import { db } from "../firebaseconfig";
import { useEffect, useState } from "react";
import { Subjectsvg } from "../assests/Subjectsvg";


export function Notes(){
const [data,setdata] = useState([]);

 useEffect(()=>{
     async function fetchdata(){
        try{
            const tempdata = [];
             const q = query(collection(db, "pdflinks"), where("contentType", "==", "Notes"));
            const docsnapshot = await getDocs(q);
            docsnapshot.forEach((doc)=>{
                const obj = doc.data();
                tempdata.push(obj.subject);
            })
            const dataset = new Set(tempdata);
            const finaldata = Array.from(dataset);
            setdata(finaldata);
            console.log(finaldata);
        }catch(err){
            console.log("some error occured");
        }
     }

     fetchdata();

     return ()=>{
        setdata([])
     }
 },[])   

    return (
        <div className="text-white row-span-7 col-span-6 lg:col-span-5 overflow-auto p-8">
        <div className="grid grid-cols-3 gap-12">
        {
                data.map((obj)=>{
                    return <Card to={`/notes/${obj}`} title={obj}/>
                })
              }
        </div>
    </div>
    )
}