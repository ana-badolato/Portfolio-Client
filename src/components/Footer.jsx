import linkedinImg from "../assets/icons/linkedin.svg";
import githubImg from "../assets/icons/github.svg";
import behanceImg from "../assets/icons/behance.svg";
import "../CSS/navbarFooter.css";

function Footer() {
  return (
    <div>
      <hr className="hr-footer"/>
    <div className="section-footer">
      <div className="main-nav-container">
        <div className="footer-left">
          <p className="logo-footer">Ana Badolato</p>
        </div>
        <div className="footer-center">
          <a href="https://www.linkedin.com/in/anabadolatomunuera/" className="icon-text-footer" target="_blank">
            <img src={linkedinImg} alt="linkedin link" />
            <p>LinkedIn</p>
          </a>
          <p className="divider">|</p>
          <a href="https://github.com/ana-badolato" className="icon-text-footer" target="_blank">
            <img src={githubImg} alt="github link" />
            <p>GitHub</p>
          </a>
          <p className="divider">|</p>
          <a href="https://www.behance.net/anabadolato" className="icon-text-footer">
            <img src={behanceImg} alt="behance link" target="_blank"/>
            <p>Behance</p>
          </a>
        </div>
      <div className="footer-right">
      <a href="mailto:badolatoana@gmail.com" className="email">badolatoana@gmail.com</a>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
