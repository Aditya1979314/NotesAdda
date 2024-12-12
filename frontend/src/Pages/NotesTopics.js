import { useEffect, useState } from "react";
import { Bar } from "../components/Bar";
import { data } from "../data";
import { Modal } from "../components/Modal";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";




export function NotesTopics(){
    const [data,setdata] = useState([]);
    const [isopen,setisopen] = useState(false);
    const[link,setlink] = useState('');
    const{id} = useParams();

    useEffect(()=>{
        async function fetchdata(){
            try{
                let temparr = [];
                const q = query(collection(db,"pdflinks"),where("subject",'==',id));
                const querysnapshot = await getDocs(q);
                querysnapshot.forEach((doc)=>{
                    temparr.push(doc.data());
                });
                setdata(temparr);
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
     <div className="text-white overflow-auto p-8 row-span-7 col-span-6 lg:col-span-5">
        <div className="text-white font-semibold text-lg mb-4 ml-2">{id}</div>
        {
            data.map((obj)=>{
                return <Bar link={obj.url} setlink={setlink} title={obj.year} setisopen={setisopen}/>
            })
        }
        {isopen && <Modal link={link} setisopen={setisopen}/>}
    </div>
    )
}