import { useEffect, useState } from "react";
import RowNotFeatured from "../components/RowNotFeatured.jsx";
import service from "../services/config.js";
import "../CSS/RowNotFeatured.css";
import DownloadButton from "./DownloadButton.jsx";

function SectionNotFeatured() {
  const [allNotFeaturedProjects, setAllNotFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Projects"); // Estado para la categoría seleccionada

  useEffect(() => {
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

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = allNotFeaturedProjects.filter((project) => {
    if (selectedCategory === "All Projects") return true;
    return project.category === selectedCategory;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="tabs">

        <button
          className={selectedCategory === "Web Development" ? "active" : ""}
          onClick={() => setSelectedCategory("Web Development")}
        >
          Web Development
        </button>
        <button
          className={selectedCategory === "UX/UI" ? "active" : ""}
          onClick={() => setSelectedCategory("UX/UI")}
        >
          UX/UI
        </button>
        <button
          className={selectedCategory === "All Projects" ? "active" : ""}
          onClick={() => setSelectedCategory("All Projects")}
        >
          All Projects
        </button>
      </div>

      <div className="row-list">
        {filteredProjects.map((eachProject) => (
          <RowNotFeatured key={eachProject._id} {...eachProject} />
        ))}
      </div>
        <p>Want to know more?</p>
      <DownloadButton />
    </div>
  );
}

export default SectionNotFeatured;
