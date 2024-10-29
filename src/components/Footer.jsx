import linkedinImg from "../assets/icons/linkedin.svg";
import githubImg from "../assets/icons/github.svg";
import behanceImg from "../assets/icons/behance.svg";
import "../CSS/navbarFooter.css";

function Footer() {
  return (
    <div className="section-footer">
      <hr />
      <div className="main-nav-container">
        <div className="navbar-left">
          <p className="logo">Ana Badolato</p>
        </div>
        <div className="navbar-center">
          <a href="" className="icon-text">
            <img src={linkedinImg} alt="" />
            <p>LinkedIn</p>
          </a>
          <a href="" className="icon-text">
            <img src={githubImg} alt="" />
            <p>GitHub</p>
          </a>
          <a href="" className="icon-text">
            <img src={behanceImg} alt="" />
            <p>Behance</p>
          </a>
        </div>
      <div className="navbar-right">
        <p>badolatoana@gmail.com</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
