import React from "react";
import "./banner.css";

import b1 from "../../Assets/b1.jpg";
import b2 from "../../Assets/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src={b2} alt="banner" />
      </div>
      <div className="banner-text-section">
      <div className="banner-text">
        <div>
          <h1>
            Your Journey To Better Health <br />
            Begins With Us
          </h1>
        </div>
        <div  className="banner-btn">
          <button>Book an Appoinment</button>
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default Banner;
