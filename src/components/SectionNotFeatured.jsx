import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RowNotFeatured from "../components/RowNotFeatured.jsx"
import service from "../services/config.js";
import "../CSS/RowNotFeatured.css"

function SectionNotFeatured() {
  const [allNotFeaturedProjects, setAllNotFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getData();
  }, []);


  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await service.get("/project/not-featured");
      setAllNotFeaturedProjects(response.data || []);
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
      <div className="row-list">
      {allNotFeaturedProjects.map((eachProject) => {
              return (
                <RowNotFeatured
                  key={eachProject._id}
                  allNotFeaturedProjects={allNotFeaturedProjects}
                  {...eachProject}
                />
              );
            })}

      </div>
    </div>
  )
}

export default SectionNotFeatured