import linkedinImg from "../assets/icons/linkedin.svg";
import githubImg from "../assets/icons/github.svg";
import behanceImg from "../assets/icons/behance.svg";
import "../CSS/navbarFooter.css";
function Navbar() {
  return (
    <nav className="section-navbar">
      <div className="main-nav-container">
        <div className="navbar-left">
          <p className="logo">Ana Badolato</p>
        </div>

        <div className="navbar-right">
          <p>Projects</p>
          <p>About me</p>
          <div className="social-media-icons">
            <img src={linkedinImg} alt="" />
            <img src={githubImg} alt="" />
            <img src={behanceImg} alt="" />
          </div>
          <button>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
