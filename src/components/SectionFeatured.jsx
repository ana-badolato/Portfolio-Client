import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardFeatured from "../components/CardFeatured.jsx"
import service from "../services/config.js";
import "../CSS/cardFeatured.css"

function SectionFeatured() {

  const [allFeaturedProjects, setAllFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    getData();
  }, []);


  const getData = async () => {
    try {
      setIsLoading(true);
      // Cargar el archivo JSON en lugar de hacer una solicitud a un backend
      const response = await fetch("/data.json");
      const data = await response.json();
      // Filtrar solo los proyectos destacados
      const featuredProjects = data.filter((project) => project.featured);
      setAllFeaturedProjects(featuredProjects);
      setIsLoading(false);
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <div className="cards-list">
      {allFeaturedProjects.map((eachProject) => {
              return (
                <CardFeatured
                  key={eachProject._id}
                  allFeaturedProjects={allFeaturedProjects}
                  {...eachProject}
                />
              );
            })}

      </div>
    </div>
  )
}

export default SectionFeatured