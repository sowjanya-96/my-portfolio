import React from "react";
import "./styles.scss";
import { FaGithub,FaTwitter,FaInstagram, } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
       
            <h4>Get in Touch</h4>
            <p>Have a project or idea? Let's connect and bring it to life together.</p>
            <div>
              <span>Email:sowjanya.skillshot@gmail.com</span>
            </div>
            <div>
              <span>Mobile:8374565733</span>
            </div>
            <div>
              <span>Linkedin:profile</span>
            </div>
             <div>
              <span>Location:Andrapradesh,India</span>
            </div>
            <h2 className="connect-title">connect with me</h2>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
               <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter/>
              </a>
               <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram/>
              </a>

            </div>

<div className="contact-card">
  <h2 className="message-title">Send a Message</h2>
  <form>
    <label>Your Name</label>
    <input type="text" placeholder="sowjanya...." required/>
     <label>Your Email</label>
    <input type="email" placeholder="xyz@gmail.com...." required/>
     <label>Your Message</label>
     <textarea
      placeholder
     ="Hello! I'd like to talk about project details...." required ></textarea>
     <button type="submit" className="message-btn">
      Send Message
     </button>

  </form>
</div>
<div className="copy-right">
<p>
  <FaRegCopyright className="copy-icon"/>
  2025 Sowjanya.Portfolio All rights reserved</p>
  </div>

          </div>
          </div>
          
      
      

    
    
  );
}

export default ContactSection;
