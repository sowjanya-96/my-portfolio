import React from "react";
import "./styles.scss";

function TestimonialSection() {
  return (
    <div className="testimonial-section">
   
          <h4>Client Testimonial</h4>
          <p>
            Discover what our satisfied customers have to say about their
            experiences with our services
          </p>
        
          <div className="row cards-row">
            <div className="col-md-4 ">
              <div className="card-box">
                <h3>Sarah johnson</h3>
               <p>
                  The website looks clean,fast and professional.Great
                  communication and quick delivery.My site now works perfectly
                  on all devices.Highly recommended!
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <h3>Emily cathreen</h3>
                <p>
                  I had no claer design,but they guided me with UI suggestions
                  and delivered a clean,modern website.I will definitely hire
                  again for future updates.
                </p>
              </div>
            </div>
          
        
            
              <div className="col-md-4 ">
                <div className="card-box">
                  <h3>David patel</h3>
                  <p>
                    The entire website was built exactly according to my
                    requirements.The layouts,colors,and responsiveness were
                    perfect.Great communication throughout the project
                  </p>
                </div>
              </div>
            </div>
            </div>
            
          
          
      
  );
}

export default TestimonialSection;
