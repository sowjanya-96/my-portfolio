import React from "react";
import "./styles.scss";
import {FaPalette,FaCode,FaMobileAlt,FaTools,FaRegObjectGroup,FaImages,FaBullhorn} from "react-icons/fa";


function ServiceSection() {
  return (
    <div className="service-section">
      <div className="container">
        <h4 class="services-title">MY <span>Services</span></h4>
        <div className="service-box">
        
         <div className="service-icon"/>
          

          
          <span><FaPalette />Web Design</span>

          <span> <FaCode/>Web Development</span>

          <span> <FaMobileAlt/>Mobile app Design</span>

          <span><FaMobileAlt/> Mobile app Development</span>

          <span> <FaTools/> Mobile app bug fixes</span>

          <span> <FaRegObjectGroup/>Logo/icon design</span>

          <span> <FaImages/>Social media Banner designs</span>

          <span><FaBullhorn/>Branding,Marketing</span>

    
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
