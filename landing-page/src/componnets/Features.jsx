import React from "react";
import "./Features.css";
import RightArrow from "../assets/icons/right-arrow.png";
import BotIcon from "../assets/icons/bot.png";
import SearchIcon from "../assets/icons/search.png";
import SecureIcon from "../assets/icons/secure.png";

const Features = () => {
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

        <button className="features-btn">
          Explore all features
          <img className="arrow-icon" src={RightArrow} alt="right-arrow" />
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon-box">
            <img src={BotIcon} alt="Bot" className="feature-icon" />
          </div>
          <h3>Automated Matching</h3>
          <p>
            Our AI-driven algorithm pairs candidates with their ideal roles
            based on skills, culture fit, and academic requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={SearchIcon} alt="Search" className="feature-icon" />
          </div>
          <h3>Real-time Tracking</h3>
          <p>
            Monitor progress from application to final evaluation with granular
            dashboards for all stakeholders.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
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

export default Features;
