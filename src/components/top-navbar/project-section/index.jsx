import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "./styles.scss";


function ProjectSection() {
  return (
    <div className="project-section">
      <h4>my projects</h4>
      <div className="container">
        <div className="project-card">
         <div className="bg-white shadow-lg rounded-2xl p-6 w-[430px]">
            <img
              src="https://www.bing.com/th/id/OIP.q5of63RnW80hqMTfMZ214AHaEv?w=279&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="project"
              className="project-img"
               class="w-full h-[380px]object-cover rounded-xl"
             
             
            />

            <div className="tags">
              <span>Javascript</span>
              <span>Tailwind css</span>
              <span>React</span>
              <span>Vite.js</span>
            </div>
            <h3>Beautywebsite</h3>
            <p>
              I designed and developed a modern,elegant beauty website for a
              cosmetics/skincare brand.The goal was to create a smooth,premium browsingexperience that highlights products,services, and brand identity.
            </p>

            <div className="card-footer">
              <a href="#" className="live-btn">
                Live Link <FiArrowUpRight />
              </a>
              <a href="#" className="github-btn">
                <FaGithub />
              </a>
            </div>
          </div>
          </div>
        

        <div className="project-card">
         
            <img
              src="https://th.bing.com/th/id/OIP.z37O6PDoagQRjfgIlt_71AHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="project"
              className="project-img"
               class="w-full h-[380px]object-cover rounded-xl"
             
            />

            <div className="tags">
              <span>Javascript</span>
              <span>Tailwind css</span>
              <span>React</span>
              <span>Vite.js</span>
            </div>
            <h3>DreamHome -Real Estate Website</h3>
            <p>
              A modern and elegant property listing website with
              animations,smooth layouts and a premium user experience.
            </p>

            <div className="card-footer">
              <a href="#" className="live-btn">
                Live Link  <FiArrowUpRight />
              </a>
              <a href="#" className="github-btn">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    
  );
}

export default ProjectSection;
