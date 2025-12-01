import React from 'react';
import { Route,Routes} from "react-router-dom";
import HomePage from "../pages";
import AboutSection from "../components/top-navbar/about-section";
import SkillsSection from "../components/top-navbar/skills-section";
import ServicesSection from "../components/top-navbar/service-section";
import TestimonialsSection from "../components/top-navbar/testimonial-section";
import ProjectSection from "../components/top-navbar/project-section";
import ContactSection from "../components/top-navbar/contact-section";
function WebsiteStartPoint() {
  return (
   
    <Routes>
    
         <Route path="/"element={<HomePage/>}/>
        <Route path="/about"element={<AboutSection/>}/>
         <Route path="/skills"element={<SkillsSection/>}/>
          <Route path="/services"element={<ServicesSection/>}/>
           
            <Route path="/testimonials"element={<TestimonialsSection/>}/>
            <Route path="/projects"element={<ProjectSection/>}/>
             <Route path="/contact"element={<ContactSection/>}/>
    </Routes>
    
   
  );
}
export default WebsiteStartPoint;
