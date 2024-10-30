import arrowIcon from "../assets/icons/arrow.svg"
import githubIcon from "../assets/icons/github.svg"

function RowNotFeatured(props) {
  const {
    _id,
    title,
    resume,
    category,
    skills,
    linkWeb,
    linkGit,
  } = props;

  return (
    <div className="row-container">
      <h2 className="row-title column1">{title}</h2> {/* Columna 1 */}
      <p className="table-text column2">{resume}</p> {/* Columna 2 */}
      <div className="skills-tags-table column3"> {/* Columna 3 */}
        {Array.isArray(skills) && skills.map((skill, index) => (
          <span key={index} className="chip">
            {skill}
          </span>
        ))}
      </div>

      {linkGit &&  ( /* Condicional para mostrar solo si linkGit tiene un valor */
        <a href={linkGit} className="icon-text column4">
          <img src={githubIcon} alt="" />
          <p>Repository</p>
        </a>
      )}
      <a href={linkWeb} className="icon-text column5"> {/* Columna 5 */}
        <img src={arrowIcon} alt="" />
        <p>Web</p>
      </a>
    </div>
  );
}

export default RowNotFeatured;
