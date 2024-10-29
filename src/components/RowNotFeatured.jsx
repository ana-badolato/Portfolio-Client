

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
      <div className="row-content">
      <hr />
      <h2 className="table-title">{title}</h2>
      <p className="table-text">{resume}</p>
      <div className="skills-tags">
      {Array.isArray(skills) && skills.map((skill, index) => (
            <span key={index} className="chip">
              {skill}
            </span>
          ))}
        </div>
      <a href={linkGit} className="icon-text">
        <img src="" alt="" />
        <p>Repository</p>
      </a>
      <a href={linkWeb} className="icon-text">
        <img src="" alt="" />
        <p>Web</p>
      </a>
      </div>
    </div>
  )
}

export default RowNotFeatured