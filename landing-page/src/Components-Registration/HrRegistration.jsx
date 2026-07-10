import React from "react";
import "../Components-Registration/HrRegistration.css";
import HrIcon from "../assets/icons/human-icon.png";

export const HrRegistration = () => {
  return (
    <div className="hr-reg-page-container">
      <div className="hr-reg-left-container">
        <div className="hr-reg-left-content-container">
          <div>
            <h1 className="hr-reg-logo">InterMS</h1>
            <h1 className="hr-reg-quotes ">
              Empower your team with top-tier talent.
            </h1>
            <p className="hr-reg-description">
              Streamline your recruitment process, manage internships with ease,
              and connect with the next generation of industry leaders.
            </p>
            <div id="left-blur-box">
              <div>
                <div>
                  <div id="purple-circle">
                    <img src={HrIcon} alt="Hr-icon" id="hr-icon" />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-reg-right-container">
        <div className="hr-reg-right-content-container">right container</div>
      </div>
    </div>
  );
};
