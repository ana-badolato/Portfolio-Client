import SectionAboutMe from "../components/SectionAboutMe.jsx"
import SectionFeatured from "../components/SectionFeatured.jsx"
import SectionNotFeatured from "../components/SectionNotFeatured.jsx"
import SectionSkills from "../components/SectionSkills.jsx"

function Index() {
  return (
    <div>
      <SectionFeatured />
      <SectionSkills />
      <SectionNotFeatured />
      <SectionAboutMe />
    </div>
  )
}

export default Index