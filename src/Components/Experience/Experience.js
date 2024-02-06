import React from "react";
import "./Experence.css";
import ex from "../../Assets/cdc-bzj1U0udLnM-unsplash.jpg";

const Experience = () => {
  return (
    <div className="experinece section-padding">
      <div className="experinece-section-heading">
        <p>why Choose Us</p>
      </div>
      <div className="experinece-section">
        <div className="experinece-text">
          <div className="experinece-heading">
            <h2>
              In Sickness And In Health,
              <br /> We're Here For You
            </h2>
            <p>
              we take a Holstic approch to care, emphasizing preventive measures
              early ditection,and personalized treatment plans{" "}
            </p>
          </div>
          <div className="experinece-points">
            <div className="experinece-points-data">
              <div className="experinece-point-line">
                <div className="experinece-point-number">
                  <div className="experinece-point-number-count">
                    <p>1</p>
                  </div>
                </div>
                <div className="experinece-point-text">
                  <h3>Experenced Proffetional</h3>
                  <p>
                    Our team Of dedicated Healthcare Providers Has Years of
                    Experience And Expertice{" "}
                  </p>
                </div>
              </div>
              <div className="experinece-point-line">
                <div className="experinece-point-number">
                  <div className="experinece-point-number-count">
                    <p>1</p>
                  </div>
                </div>
                <div className="experinece-point-text">
                  <h3>Experenced Proffetional</h3>
                  <p>
                    Our team Of dedicated Healthcare Providers Has Years of
                    Experience And Expertice{" "}
                  </p>
                </div>
              </div>
              <div className="experinece-point-line">
                <div className="experinece-point-number">
                  <div className="experinece-point-number-count">
                    <p>1</p>
                  </div>
                </div>
                <div className="experinece-point-text">
                  <h3>Experenced Proffetional</h3>
                  <p>
                    Our team Of dedicated Healthcare Providers Has Years of
                    Experience And Expertice{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experinece-image">
          <img src={ex} alt="ex" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
