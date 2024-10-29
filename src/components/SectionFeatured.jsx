import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardFeatured from "../components/CardFeatured.jsx"
import service from "../services/config.js";
import "../CSS/CardFeatured.css"

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
      const response = await service.get("/project/featured");
      setAllFeaturedProjects(response.data || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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