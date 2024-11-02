import { Link } from "react-router-dom";
import { Bar } from "../components/Bar";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { data } from "../data";


export function Endsem(){
const [isopen,setisopen] = useState(false);
const[link,setlink] = useState('');


    return (
        <div className="text-white overflow-auto p-8 row-span-7 col-span-5">
            <div className="text-white font-semibold text-lg mb-4 ml-2">Operating Systems</div>
            {
                data.map((obj)=>{
                    return <Bar link={obj.link} setlink={setlink} title={obj.title} setisopen={setisopen}/>
                })
            }
            {isopen && <Modal link={link} setisopen={setisopen}/>}
        </div>
    )
}