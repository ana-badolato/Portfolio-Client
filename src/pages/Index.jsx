import React, { useRef } from "react";

import SectionAboutMe from "../components/SectionAboutMe.jsx"
import SectionFeatured from "../components/SectionFeatured.jsx"
import SectionNotFeatured from "../components/SectionNotFeatured.jsx"
import SectionSkills from "../components/SectionSkills.jsx"

import arrowTopIcon from "../assets/icons/arrowTop.svg"

function Index({ projectsRef, aboutMeRef }) {

  const scrollToTop = () => {
    console.log("Scroll to top button clicked");
    // Hacer scroll hasta "Projects" usando projectsRef
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-container">
      <div className="content">
      
      <div ref={projectsRef}>
          <SectionFeatured />
        </div>
      <SectionSkills />
      <SectionNotFeatured />
      <div ref={aboutMeRef}>
          <SectionAboutMe />
        </div>
      </div>
      {/* Botón de scroll hacia arriba */}
{/* Botón de scroll hacia arriba */}
<button onClick={scrollToTop} className="scroll-to-top">
        <img src={arrowTopIcon} alt="Go to top" />
      </button>
    </div>
  )
}

export default Index