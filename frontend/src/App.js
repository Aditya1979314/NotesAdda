import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Upnavbar } from "./components/Upnavbar";
import { Subject } from "./Pages/Subject";
import { Unitterm } from "./Pages/Unitterm";
import { Midterm } from "./Pages/Midterm";
import { Endsem } from "./Pages/Endsem";
import { Notes } from "./Pages/Notes";
import { NotesTopics } from "./Pages/NotesTopics";
import { SubjectTopics } from "./Pages/SubjectsTopic";
import { SubjectVideo } from "./Pages/SubjectVideo";
import { Otherroutes } from "./components/Otherroutes";
import { useEffect, useState } from "react";
import { Hamburgericon } from "./components/Hamburgericon";



function App() {
const[navbaropen,setnavbaropen] = useState(false);
const[screenwidth,setscreenwidth] = useState();

useEffect(()=>{
function resizehandler(){
setscreenwidth(window.innerWidth);
}

window.addEventListener('resize',resizehandler);

return ()=>window.removeEventListener('resize',resizehandler);

},[])

  return (
    <div className="bg-[#0F0F0F] h-screen grid grid-cols-6 grid-rows-8 font-sans">
      <BrowserRouter>
      <Hamburgericon setnavbaropen={setnavbaropen}/>
      { (navbaropen || screenwidth >= 1024) && <Navbar navbaropen={navbaropen}/>}
      <Upnavbar/>
      <Outlet/>
      <Routes>
        <Route path="*" element={<Otherroutes/>}/>
        <Route path="/subjects" element={<Subject/>}></Route>
        <Route path="/unit" element={<Unitterm/>}/>
        <Route path="/midterm" element={<Midterm/>}/>
        <Route path="/endsem" element={<Endsem/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/notes/:id" element={<NotesTopics/>}/>
        <Route path="/subjects/:id" element={<SubjectTopics/>}/>
        <Route path="/subjects/:subjectid/:id" element={<SubjectVideo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
