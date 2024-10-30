import { useEffect, useState } from "react";
import RowNotFeatured from "../components/RowNotFeatured.jsx";
import service from "../services/config.js";
import "../CSS/rowNotFeatured.css";
import DownloadButton from "./DownloadButton.jsx";

function SectionNotFeatured() {
  const [allNotFeaturedProjects, setAllNotFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Web Development"); // Estado para la categoría seleccionada

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
    <div className="section-not-featured">
      <div className="top-section-table">

          <h2 className="title-table">Other Projects</h2>

        <div className="tabs-table">
          <button
            className={`web-dev-btn ${
              selectedCategory === "Web Development" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("Web Development")}
          >
            Web Development
          </button>
          <button
            className={`ux-ui-btn ${
              selectedCategory === "UX/UI" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("UX/UI")}
          >
            UX/UI
          </button>
          <button
            className={`all-projects-btn ${
              selectedCategory === "All Projects" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("All Projects")}
          >
            All Projects
          </button>
        </div>
      </div>

      <div className="row-list">
        {filteredProjects.map((eachProject) => (
          <RowNotFeatured key={eachProject._id} {...eachProject} />
        ))}
      </div>
      <div className="not-featured-bottom">

      <p>Want to know more?</p>
      <DownloadButton />
      </div>
    </div>
  );
}

export default SectionNotFeatured;
