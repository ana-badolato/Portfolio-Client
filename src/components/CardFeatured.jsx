import { useState } from "react";

function CardFeatured(props) {
  const {
    _id,
    title,
    resume,
    description,
    category,
    skills,
    linkWeb,
    linkGit,
    img,
  } = props;

  const [projectData, setProjectData] = useState({
    title,
    resume,
    description,
    category,
    skills,
    linkWeb,
    linkGit,
    img,
  });

  return (
    <div>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        <div className="skills-tags">
          {skills.map((skill, index) => (
            <span key={index} className="chip">
              {skill}
            </span>
          ))}
        </div>
        <p className="main-text">{description}</p>
        <div className="bottom-links">
          <a href={linkWeb}>
            <button className="icon-text">
              <p>View Website</p>
              <img src="your-image-url" alt="icon" />
            </button>
          </a>
          <a href={linkGit} className="icon-text">
            <img src="" alt="" />
            <p>Repository</p>
          </a>
        </div>
      </div>

      <div className="section-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default CardFeatured;
