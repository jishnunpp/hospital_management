import React from 'react';
import './Testimonial.css';
import man1 from '../../Assets/man1.jpg';
import man2  from '../../Assets/man2.jpg';
import man3 from '../../Assets/man3.jpg';
  

const Testimonial = () => {
  return (
    <div className="testimonial section-padding">
    <div className="testimonial-heading">
      <p>Testimonials</p>
      <h2>Patients Say About Us</h2>
    </div>
    <div className="testimonial_cards">
      <div className="testimonial_card">
        <div className="testimonial_card-image">
          <img src={man1} alt="man" />

        </div>
        <div className="testimonial_card-text">
          <h5>David john</h5>
          <h6>America</h6>
          <p>" I Can't express my enough gratitude for the exceptional i experienced at medico.cudos to the remarkable team for their support "</p>
          

        </div>
      </div>
      <div className="testimonial_card">
        <div className="testimonial_card-image">
          <img src={man2} alt="man" />

        </div>
        <div className="testimonial_card-text">
          <h5>Jessica parker</h5>
          <h6>Newyork</h6>
          <p>" I can't thank the team at medico enough for the exceptional care i recived truely greatfull for their suopport throught my healing "</p>
        </div>
      </div>
      <div className="testimonial_card">
        <div className="testimonial_card-image">
          <img src={man3} alt="man" />

        </div>
        <div className="testimonial_card-text">
          <h5>Abraham </h5>
          <h6>Germany</h6>
          <p>" I'am so greatfull for the amazing care i recived at medico the team heare is incredible and they made my recovery a breeze ! "</p>

        </div>
      </div>
      
      
    </div>
  </div>
  )
}

export default Testimonial
