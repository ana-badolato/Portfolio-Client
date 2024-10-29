import { Routes, Route } from "react-router-dom";
import { useRef } from "react"; 

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from "./pages/Index";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import SectionHero from "./components/SectionHero";

function App() {
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);

  return (
    <div>
      <Navbar projectsRef={projectsRef} aboutMeRef={aboutMeRef} />  
      <SectionHero /> 
      <Routes>
        <Route path="/" element={<Index projectsRef={projectsRef} aboutMeRef={aboutMeRef} />} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
