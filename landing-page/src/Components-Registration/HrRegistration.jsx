import React from "react";
import "../Components-Registration/HrRegistration.css";
import HrIcon from "../assets/icons/human-icon.png";

export const HrRegistration = () => {
  return (
    <div className="hr-reg-page-container">
      <div className="hr-reg-left-container">
        <div className="hr-reg-left-content-container">
          <h1 className="hr-reg-logo">InterMS</h1>
          <div id="left-container-2-reg">
            <h1 className="hr-reg-quotes ">
              Empower your team with top-tier talent.
            </h1>
            <p className="hr-reg-description">
              Streamline your recruitment process, manage internships with ease,
              and connect with the next generation of industry leaders.
            </p>
            <div id="left-blur-box">
              <div className="reg-dashboard-card">
                <div className="reg-dashboard-item">
                  <div id="purple-circle">
                    <img src={HrIcon} alt="Hr-icon" id="hr-icon" />
                  </div>

                  <div className="reg-dashboard-content">
                    <h3 className="reg-dashboard-title">
                      Unified Talent Dashboard
                    </h3>

                    <p className="reg-dashboard-description">
                      Monitor all applications in real-time.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="progress-container">
                    <div className="reg-progress-bar">
                      <div className="reg-progress-fill"></div>
                    </div>
                    <div className="labels-container">
                      <p id="small-label-1">75% Efficiency Boost</p>
                      <p id="small-label-2">120+ Placements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-container-hr">
            <div className="stat-item-hr">
              <span className="stat-number-hr">500+</span>
              <span className="stat-label-hr">COMPANIES</span>
            </div>

            <div className="stat-item-hr">
              <span className="stat-number-hr">10k+</span>
              <span className="stat-label-hr">STUDENTS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-reg-right-container">
        <div className="hr-reg-right-content-container">
          <div>
            <h1>Create your HR account</h1>
            <p>Join our ecosystem of professional employers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
