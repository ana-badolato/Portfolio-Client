import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from "./pages/Index";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import SectionHero from "./components/SectionHero";

function App() {

  return (
    <div>
      <Navbar />   
      <SectionHero /> 
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
