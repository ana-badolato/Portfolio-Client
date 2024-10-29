import DownloadButton from "./DownloadButton";
import profile from "../assets/images/profile.png"
import profileIA from "../assets/images/profileIA.png"
import "../CSS/sectionAboutMe.css";
function SectionAboutMe() {
  return (
    <div>
      <div>
        <div className="about-title">
          <img src={profile} alt="" className="profile-picture"/>
          <h2>About Me</h2>
        </div>
        <p>
          Hi, I’m <span>Ana</span>, a <span>Web Developer</span> with a strong <span>UI/UX</span> foundation. I've had the opportunity to work in UI/UX with brands like Canonical Ubuntu and Redbility (Inditex), and as an assistant professor in Interaction and Interface Design at the Universitat Oberta de Catalunya.
        </p>
        <p>I hold a degree in <span>Digital Interaction Techniques and Multimedia (where I delved into programming and design)</span> and a <span>Master’s in User Experience Design</span>. Recently, I completed <span>Ironhack's Web Development Bootcamp</span> with a full scholarship from Universia to refresh and deepen my programming skills. This journey culminated in a collaborative final project selected to participate in the upcoming Hackshow showcase.</p>
        <p>
          <span>My goal?</span> To build user-centered digital experiences that
          blend solid coding with engaging design.
        </p>
        <p>
          If you'd like to know more, download my CV or reach out at <span> </span>
          <a href="mailto:badolatoana@gmail.com" className="email">badolatoana@gmail.com</a>! 😊
        </p>
        <DownloadButton />
      </div>
      <div>
        <img src={profileIA} alt="" />
      </div>
    </div>
  );
}

export default SectionAboutMe;
