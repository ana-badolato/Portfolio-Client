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
    img
  })

  return (
    <div>CardFeatured</div>
  )
}

export default CardFeatured