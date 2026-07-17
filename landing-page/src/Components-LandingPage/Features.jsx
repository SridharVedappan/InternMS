import React from "react";
import { Link } from "react-router-dom";
import "../Components-LandingPage/Features.css";
import RightArrow from "../assets/icons/right-blue-arrow.png";
import BotIcon from "../assets/icons/bot.png";
import SearchIcon from "../assets/icons/search.png";
import SecureIcon from "../assets/icons/secure.png";

export const Features = () => {
  return (
    <section className="features-container">
      <div className="features-header">
        <div>
          <h1 className="features-title">Engineered for Efficiency</h1>
          <p className="features-subtitle">
            Complex placement workflows simplified into an intuitive, high-speed
            ecosystem designed for scale.
          </p>
        </div>

        <div className="button-container-for-landing">
          <Link to="/features" className="features-btn-landing">
            <span>Explore all features</span>
            <img
              className="arrow-icon-features"
              src={RightArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon-box-container">
            <img src={BotIcon} alt="Bot" className="feature-icon" />
          </div>
          <h3>Automated Matching</h3>
          <p>
            Our AI-driven algorithm pairs candidates with their ideal roles
            based on skills, culture fit, and academic requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box-container">
            <img src={SearchIcon} alt="Search" className="feature-icon" />
          </div>
          <h3>Real-time Tracking</h3>
          <p>
            Monitor progress from application to final evaluation with granular
            dashboards for all stakeholders.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box-container">
            <img src={SecureIcon} alt="Secure" className="feature-icon" />
          </div>
          <h3>Secure Documents</h3>
          <p>
            Enterprise-grade encryption for contracts, NDAs, and compliance
            certifications with automated reminders.
          </p>
        </div>
      </div>
    </section>
  );
};
