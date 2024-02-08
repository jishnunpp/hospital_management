import React from "react";
import "./banner.css";
import { Link } from 'react-router-dom';
import b2 from "../../Assets/banner.jpg";

const Banner = () => {
  return (
   

    <div className="app__aboutus  section__padding" >
    <div className="app__aboutus-overlay ">
      <img src={b2} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content ">
      <div className="app__aboutus-content_about">
        <div className="banner-text-heading">
        <h1>
          Your Journey To Better Health <br />
          Begins With Us
        </h1>
        <div className='banner-btn'>
           <Link to={'contacts'} >  <button>Book an Appoinment</button> </Link>
           </div>
        
        </div>
      </div>

      
    </div>
  </div>
  );
};

export default Banner;
