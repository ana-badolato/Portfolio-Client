import "../CSS/sectionHero.css";

function SectionHero() {
  return (
    <header className="section-hero">
      <div className="main-hero-container">
        <p>
          Hi! I'm Ana. <span className="green-title">Front-End Developer</span> and{" "}
          <span className="green-title">UX Designer</span>
        </p>
        <h1>
          I build experiences{" "}
          <span className="line">
            through <span className="green-title">development</span>,
          </span>{" "}
          <span className="line">
            <span className="green-title">user experience</span> & <span className="green-title"> design</span>
          </span>
        </h1>
        <p>Nice to meet you!</p>
      </div>
    </header>
  );
}

export default SectionHero;
