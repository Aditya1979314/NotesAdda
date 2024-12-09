import { useEffect, useState } from "react";
import { Bar } from "../components/Bar";
import { Modal } from "../components/Modal";
import { data } from "../data";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { Dropdown } from "../components/Dropdown";


export function Unitterm(){
    const[data,setdata] = useState([]);
    const [isopen,setisopen] = useState(false);
    const[link,setlink] = useState('');

    useEffect(()=>{
        async function fetchdata() {
            let temparr = [];
            const q = query(collection(db,"pdflinks"),where("contentType","==","Unit test paper"))
            const querysnapshot = await getDocs(q);
            querysnapshot.forEach((doc)=>{
                temparr.push(doc.data());
            })
            setdata(temparr);
        }
        fetchdata();
        
        return ()=>{
            setdata([]);
        }
        },[])

    return (
        <div className="text-white overflow-auto p-8 row-span-7 col-span-5">
            {
            data.map((obj)=>{
                return <Dropdown title={obj.subject} contentType={"Unit test paper"} setlink={setlink} setisopen={setisopen}/>
            })
           }
            {isopen && <Modal link={link} setisopen={setisopen}/>}
        </div>
    )
}