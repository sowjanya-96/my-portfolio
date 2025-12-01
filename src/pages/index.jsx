import React from 'react'
import TopNavBar from '../components/top-navbar'
import HeroSection from '../components/top-navbar/hero-section'
import AboutSection from '../components/top-navbar/about-section'
import SkillsSection from '../components/top-navbar/skills-section'
import ServiceSection from '../components/top-navbar/service-section'
import TestimonialSection from '../components/top-navbar/testimonial-section'
import ProjectSection from '../components/top-navbar/project-section'
import ContactSection from '../components/top-navbar/contact-section'


function HomePage() {
  return (
    <div>
      <TopNavBar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ServiceSection/>
      <TestimonialSection/>
      <ProjectSection/>
      <ContactSection/>
  
     
      </div>
    
  )
}

export default HomePage

