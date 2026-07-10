import React, { useState } from "react";
import "../Components-Registration/HrRegistration.css";
import HrIcon from "../assets/icons/human-icon.png";
import Hr from "../assets/icons/hr.png";
import Mentor from "../assets/icons/mentor.png";
import Intern from "../assets/icons/intern.png";
import Company from "../assets/icons/company.png";

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
            <h1 className="hr-reg-title">Create your HR account</h1>
            <p className="hr-reg-subtitle">
              Join our ecosystem of professional employers.
            </p>
          </div>

          <div>
            <span className="reg-as-subtitle">Registering as</span>
            <div className="page-nav-conatiner">
              <div className="reg-card">
                <div className="icon-wrapper">
                  <span id="white-circle">
                    <img src={Hr} alt="hr-icon" id="hr-page-icon" />
                  </span>
                </div>
                <p className="hr-text">HR</p>
              </div>

              <div className="reg-card">
                <div className="icon-wrapper">
                  <span id="white-circle">
                    <img src={Mentor} alt="mentor-icon" id="hr-page-icon" />
                  </span>
                </div>
                <p className="hr-text">Mentor</p>
              </div>

              <div className="reg-card">
                <div className="icon-wrapper">
                  <span id="white-circle">
                    <img src={Intern} alt="intern-icon" id="hr-page-icon" />
                  </span>
                </div>
                <p className="hr-text">Intern</p>
              </div>

              <div className="reg-card">
                <div className="icon-wrapper">
                  <span id="white-circle">
                    <img src={Company} alt="company-icon" id="hr-page-icon" />
                  </span>
                </div>
                <p className="hr-text">Company</p>
              </div>
            </div>
          </div>
          <div>
            <form className="hr-reg-form">
              <div className="hr-reg-form-row">
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Full Name <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="hr-reg-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Work Email Address{" "}
                    <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="email"
                    className="hr-reg-input"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>

              <div className="hr-reg-form-row">
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Phone Number <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="hr-reg-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Department <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="hr-reg-input"
                    placeholder="Enter your department"
                  />
                </div>
              </div>

              <div className="hr-reg-form-group">
                <label className="hr-reg-label">
                  Company Name <span className="hr-reg-required">*</span>
                </label>
                <input
                  type="text"
                  className="hr-reg-input"
                  placeholder="Enter company name"
                />
              </div>

              <div className="hr-reg-form-row">
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Password <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="password"
                    className="hr-reg-input"
                    placeholder="Create a password"
                  />
                </div>

                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Confirm Password <span className="hr-reg-required">*</span>
                  </label>
                  <input
                    type="password"
                    className="hr-reg-input"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
