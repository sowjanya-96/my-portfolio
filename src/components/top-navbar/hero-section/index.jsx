import React from "react";
import "./styles.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function HeroSection() {
  return (
    <div className="hero-section">
      <center>
        <h1 className="animated-text">

        Hello ,i'am Sowjanya Full Stack App & Web Developer</h1>
         <div className="social-links" style={{ marginTop: "20px" }}>
          
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-URL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ marginRight: "15px" }}
          >
            <FaLinkedin size={28} />
          </a>
          

          <a
            href="https://github.com/YOUR-GITHUB-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </center>
    </div>
  );
}

export default HeroSection;
