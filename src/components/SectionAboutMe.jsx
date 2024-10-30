import DownloadButton from "./DownloadButton";
import profile from "../assets/images/profile.png";
import profileIA from "../assets/images/profileIA.png";
import "../CSS/sectionAboutMe.css";
function SectionAboutMe() {
  return (


        <div className="about-main">
          <div className="about-main-text">
        <div className="about-title">
          <img src={profile} alt="" className="profile-picture" />
          <h2>About Me</h2>
        </div>
        <div className="about-paragraph">

            <p>
              Hi, I’m <span className="green-text">Ana</span>, a{" "}
              <span className="green-text">Web Developer</span> with a strong{" "}
              <span className="green-text">UI/UX</span> foundation. I've had the
              opportunity to work in UI/UX with brands like Canonical Ubuntu and
              Redbility (Inditex), and as an assistant professor in Interaction
              and Interface Design at the Universitat Oberta de Catalunya.
            </p>
            <p>
              I hold a degree in{" "}
              <span className="green-text">
                Digital Interaction Techniques and Multimedia (where I delved
                into programming and design)
              </span>{" "}
              and a{" "}
              <span className="green-text">
                Master’s in User Experience Design
              </span>
              . Recently, I completed{" "}
              <span className="green-text">
                Ironhack's Web Development Bootcamp
              </span>{" "}
              with a full scholarship from Universia to refresh and deepen my
              programming skills. This journey culminated in a collaborative
              final project selected to participate in the upcoming Hackshow
              showcase.
            </p>
            <p>
              <span>My goal?</span> To build user-centered digital experiences
              that blend solid coding with engaging design.
            </p>
            <p>
              If you'd like to know more, download my CV or reach out at{" "}
              <span> </span>
              <a href="mailto:badolatoana@gmail.com" className="email">
                badolatoana@gmail.com
              </a>
              ! 😊
            </p>
        </div>
            <div className="download-button-container">
              <DownloadButton />
            </div>
          </div>
        <div className="about-img">
          <img src={profileIA} alt="" />
        </div>
        </div>

  );
}

export default SectionAboutMe;
