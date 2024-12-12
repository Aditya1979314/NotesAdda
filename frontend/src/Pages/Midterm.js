import { useEffect, useState } from "react";
import { Bar } from "../components/Bar";
import { Modal } from "../components/Modal";
import { data } from "../data";
import { Dropdown } from "../components/Dropdown";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";



export function Midterm(){
const[data,setdata] = useState([]);
const [isopen,setisopen] = useState(false);
const[link,setlink] = useState('');

useEffect(()=>{
    async function fetchdata() {
        let temparr = [];
        const q = query(collection(db,"pdflinks"),where("contentType","==","Mid term paper"))
        const querysnapshot = await getDocs(q);
        querysnapshot.forEach((doc)=>{
            const obj = doc.data();
            temparr.push(obj.subject);
        })
        const dataset = new Set(temparr);
        const finaldata = Array.from(dataset);
        setdata(finaldata);
    }
    fetchdata();
    
    return ()=>{
        setdata([]);
    }
    },[])

    return (
        <div className="text-white overflow-auto p-8 row-span-7 col-span-6 lg:col-span-5">
            {
            data.map((obj)=>{
                return <Dropdown title={obj} contentType={"Mid term paper"} setlink={setlink} setisopen={setisopen}/>
            })
           }
            {isopen && <Modal link={link} setisopen={setisopen}/>}
        </div>
    )
}