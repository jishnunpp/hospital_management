import React from "react";
import "./about.css";
import doctor from "../../Assets/doc2.jpg";
import heart from '../../Assets/icons8-activity-64.png';
import vission from '../../Assets/icons8-microscope-50.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about section-padding">
      <div className="about-image">
        <img src={doctor} alt="doctor" />
      </div>
      <div className="about-content">
        <div className="about-content-text">
            <h5>
               25+ Years of Experence
            </h5>
            <h2>
                Your journey To Better Health Starts Here

            </h2>
            <p>we are dedicated to providing the highest quality healthcare services to our community Our mission is promote and enhance health</p>

        </div>
        <div className="about-content-data">
            <div className="about-content-mission">
                <div>
                  <img src={heart} alt="heart"/>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>Our mission is to provide compassionate and high quality healthcare services.</p>
                  
                </div>
            </div>
            <div className="about-content-mission">
                <div> <img src={vission} alt="vission"/></div>
                <div>
                  <h4>Our vission</h4>
                  <p>Our vission is to be a trused parter in the health and happiness off the community</p>
                </div>
            </div>

        </div>

        <div className="about-content-btn">
        <Link to={'contacts'} > <button>more about Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
