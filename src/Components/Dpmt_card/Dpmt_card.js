import React from "react";
import "./dpmt_card.css";
import cardio from '../../Assets/icons8-cardiology-64 (1).png';
import kidney from '../../Assets/icons8-urology-64.png';
import neurology from '../../Assets/icons8-neurology-50 (1).png';
import surgery from '../../Assets/icons8-surgery-50 (1).png'

const Dpmt_card = () => {
  return (
    <div className="dpmt_card-section section-padding">
      <div className="dpmt_card-heading">
        <p>Our Departments</p>
        <h2>Services For Your Health</h2>
      </div>
      <div className="dpmt_cards">
        <div className="dpmt_card">
          <div className="dpmt_card-image">
            <img src={cardio} alt="cardio" />

          </div>
          <div className="dpmt_card-text">
            <h4>Cardiology</h4>
            <p>conducting tests to access heart structure and function</p>
            <button>Explore Now</button>

          </div>
        </div>
        <div className="dpmt_card">
          <div className="dpmt_card-image">
            <img src={kidney} alt="cardio" />

          </div>
          <div className="dpmt_card-text">
            <h4>Urology</h4>
            <p>conducting tests to access heart structure and function</p>
            <button>Explore Now</button>

          </div>
        </div>
        <div className="dpmt_card">
          <div className="dpmt_card-image">
            <img src={neurology} alt="cardio" />

          </div>
          <div className="dpmt_card-text">
            <h4>Cardiology </h4>
            <p>conducting tests to access heart structure and function</p>
            <button>Explore Now</button>

          </div>
        </div>
        <div className="dpmt_card">
          <div className="dpmt_card-image">
            <img src={surgery} alt="cardio" />

          </div>
          <div className="dpmt_card-text">
            <h4>surgery</h4>
            <p>conducting tests to access heart structure and function</p>
            <button>Explore Now</button>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dpmt_card;
