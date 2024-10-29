import linkedinImg from "../assets/icons/linkedin.svg";
import githubImg from "../assets/icons/github.svg";
import behanceImg from "../assets/icons/behance.svg";
import "../CSS/navbarFooter.css";

function Navbar({ projectsRef, aboutMeRef }) {

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="section-navbar">
      <div className="main-nav-container">
        <div className="navbar-left">
          <p className="logo">Ana Badolato</p>
        </div>

        <div className="navbar-right">
          <p onClick={() => scrollToSection(projectsRef)} className="link-page">Projects</p>
          <p onClick={() => scrollToSection(aboutMeRef)} className="link-page">About me</p>
          <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/anabadolatomunuera/" target="_blank">
            <img src={linkedinImg} alt="linkedIn link" />
            </a>
            <a href="https://github.com/ana-badolato" target="_blank">
            <img src={githubImg} alt="github link" />
            </a>
            <a href="https://www.behance.net/anabadolato" target="_blank">
            <img src={behanceImg} alt="behance link" />
            </a>
          </div>
          {/* <button>
            Contact
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
