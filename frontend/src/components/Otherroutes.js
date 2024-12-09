import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export function Otherroutes(){
    const navigate = useNavigate();
   
   useEffect(()=>{
      navigate('/subjects'); 
   },[])

    return <>
    </>
}