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


function App() {
  return (
    <div className="bg-[#0F0F0F] h-screen grid grid-cols-6 grid-rows-8 font-sans">
      <BrowserRouter>
      <Navbar/>
      <Upnavbar/>
      <Outlet/>
      <Routes>
        <Route path="/subjects" element={<Subject/>}></Route>
        <Route path="/unit" element={<Unitterm/>}/>
        <Route path="/midterm" element={<Midterm/>}/>
        <Route path="/endsem" element={<Endsem/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/notes/:id" element={<NotesTopics/>}/>
        <Route path="/subjects/:id" element={<SubjectTopics/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
