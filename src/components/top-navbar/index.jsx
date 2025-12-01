import React, { useState } from "react";
import {Link} from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles.scss";
function TopNavBar() {
  const [IsActive,setIsActive] = useState(false)
   const toggleMenu = () => {
    setIsActive(!IsActive);
   }
  return (
    <div className=" container d-flex  justify-content-between align-items-center top-nav-bar">
      <span className="logo">SOWJANYA</span>
      <div className="nav-right">
      <button onClick={toggleMenu} className="open-nav">
         <IoMenu className="menu-icon" /> 
      </button>
      
       <div className={`side-menu d-block ${IsActive? 'active-nav': ''}`} >
        <button className="close-icon" onClick={toggleMenu}>
          <IoIosCloseCircle  size={23}/>
        </button>
        
        <div>
          
          <Link to= "/home" onClick={toggleMenu}>Home</Link>
        </div>
        <div>
            <Link to= "/about" onClick={toggleMenu}>ABOUT</Link>
        </div>
        <div>
             <Link to= "/skills" onClick={toggleMenu}>SKILLS</Link>
        </div>
        <div>
               <Link to= "/services" onClick={toggleMenu}>SERVICES</Link>
        </div>
        <div>
           <Link to= "/testimonials" onClick={toggleMenu}>TESTIMONIALS</Link>
        </div>
        <div>
               <Link to= "/projects" onClick={toggleMenu}>PROJECTS</Link>
        </div>
        <div>
               <Link to= "/contact" onClick={toggleMenu}>CONTACT</Link>
        </div>
        </div>
        </div>
        </div>
        
      
  
  );
}

export default TopNavBar;
