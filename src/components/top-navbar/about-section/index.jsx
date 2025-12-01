import React from 'react'
import "./styles.scss"
import myimage from "../../../assets/images/myimage.jpg"

function AboutSection() {
  return (
    <div className='about-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h4>About Me</h4>
            <p>Hello! I'm Sowjanya(SOWJANYA HARIYAPURAJU),an app & web developer and UI/UX designer from AndraPradesh,India.with 1.5 years of expertise in ReactNative.I excel in crafting user-friendly Andriod and iOS apps.Moreover, I've polished my skills in React JS,HTML5,CSS3, and Javascript,empowering me to build stunning websites. As a dedicated UI/UX designer, I've been creating visually appealing and intuitive interfaces for websites and apps. My focus is on delivering top-notch solutions that cater to each project's distinct requirements.   </p>
       
          </div>

          <div className="col-md-6 ">
            <img src={myimage} className="fluid" alt="" />
          </div>
          </div>
          
</div>
      
    </div>
  )
}

export default AboutSection
