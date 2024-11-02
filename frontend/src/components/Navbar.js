import { Collegelogo } from "./Collegelogo";
import { Navbarlink } from "./Navbarlink";
import {Subjectsvg} from '../assests/Subjectsvg'
import { Linksvg } from "../assests/Linksvg";
import { Notesvg } from "../assests/Notesvg";
import { useLocation } from "react-router-dom";


export function Navbar(){
const location = useLocation();

const isactive = (path)=> location.pathname === path;

    return (
        <div className=" row-span-8 grid grid-rows-8 border-r border-[#191919]">
            <Collegelogo/>
            <div className="flex flex-col justify-between row-start-3 row-span-4 p-4">
                <Navbarlink to={'/subjects'} Logo={Subjectsvg} label={'Subjects'} isactive={isactive('/subjects')}/>
                <Navbarlink to={'/unit'} Logo={Linksvg} label={'Unit test papers'} isactive={isactive('/unit')}/>
                <Navbarlink to={'/midterm'} Logo={Linksvg} label={'Mid term papers'} isactive={isactive('/midterm')}/>
                <Navbarlink to={'/endsem'} Logo={Linksvg} label={'End Sem papers'} isactive={isactive('/endsem')}/>
                <Navbarlink to={'/notes'} Logo={Notesvg} label={'Notes'} isactive={isactive('/notes')}/>
            </div>
        </div>
    )
}