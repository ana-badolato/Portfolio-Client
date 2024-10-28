import SectionAboutMe from "../components/SectionAboutMe.jsx"
import SectionFeatured from "../components/SectionFeatured.jsx"
import SectionNotFeatured from "../components/SectionNotFeatured.jsx"
import SectionSkills from "../components/SectionSkills.jsx"

function Index() {
  return (
    <div className="main-container">
      <div className="content">
      <SectionFeatured />
      <SectionSkills />
      <SectionNotFeatured />
      <SectionAboutMe />
      </div>
    </div>
  )
}

export default Index