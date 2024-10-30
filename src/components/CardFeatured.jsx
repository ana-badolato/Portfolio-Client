import { useState, useEffect, useRef } from "react";
import "../CSS/cardFeatured.css";
import arrowLightIcon from "../assets/icons/arrowLight.svg";
import githubImg from "../assets/icons/github.svg";

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

  // Estado para controlar si la imagen es visible
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null); // Referencia para la imagen

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Deja de observar después de hacerlo visible
        }
      },
      {
        threshold: 0.2, // Ajuste de visibilidad (20% de la imagen visible activa el efecto)
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="card-container">
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        <div className="skills-tags">
          {Array.isArray(skills) &&
            skills.map((skill, index) => (
              <span key={index} className="chip">
                {skill}
              </span>
            ))}
        </div>
        <p className="main-text">{description}</p>
        <div className="bottom-links">
          <a href={linkWeb} target="_blank" rel="noopener noreferrer">
            <button className="main-button">
              <p>View Website</p>
              <img src={arrowLightIcon} alt="icon" className="" />
            </button>
          </a>
          <a href={linkGit} className="icon-text-link" target="_blank" rel="noopener noreferrer">
            <img src={githubImg} alt="GitHub Repository" />
            <p className="link-text">Repository</p>
          </a>
        </div>
      </div>

      <div className={`section-img ${isVisible ? "visible" : ""}`}>
        <a href={linkWeb}>
        <img ref={imgRef} src={img} alt="Project Screenshot" />
        </a>
      </div>
    </div>
  );
}

export default CardFeatured;
