import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Icon from "../assets/icons/Icon.png";
import Line from "../assets/line.png";
import Right from "../assets/icons/right-arrow.png";
import InternImage from "../assets/internship-management-dashboard.png";
import RightArrow from "../assets/icons/right-blue-arrow.png";
import BotIcon from "../assets/icons/bot.png";
import SearchIcon from "../assets/icons/search.png";
import SecureIcon from "../assets/icons/secure.png";
import Tick from "../assets/icons/tick.png";
import OfficeEnvStockImage from "../assets/Collaborative Modern Office.png";
import Mail from "../assets/icons/mail.png";
import Browser from "../assets/icons/browser.png";

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="nav-bar">
        <div className="logo-container">
          <h1 className="logo">InternMS</h1>
        </div>

        <div className="btn-container">
          <Link to="/intern-login">
            <button className="nav-login-btn">Login</button>
          </Link>

          <Link to="/hr-registration">
            <button className="register-btn-lp">Register</button>
          </Link>
        </div>
      </div>
      <main>
        <div className="hero-content">
          <div className="sub-hero-content">
            <div className="left-content">
              <div className="container-1">
                <div className="sub-1">
                  <img className="promt-icon" src={Icon} alt="prompt" />
                  <h1 className="text-1">Next-Generation Placement OS</h1>
                </div>
              </div>

              <h1 className="title-1">Seamless Internships.</h1>

              <div className="title-and-line">
                <h1 className="title-2">Smarter Management.</h1>
                <img className="line" src={Line} alt="line" />
              </div>

              <p className="para-1">
                Bridging the gap between ambitious talent and global
                opportunities. The definitive operating system for universities,
                students, and world-class employers.
              </p>

              <div className="sub-4">
                <button className="btns-1">
                  Get Started
                  <img className="arrow" src={Right} alt="arrow" />
                </button>

                <button className="btns-2">Book a Demo</button>
              </div>
            </div>

            <div className="hero-image">
              <img className="intern-img" src={InternImage} alt="dashboard" />
            </div>
          </div>
        </div>
        <section className="features-container">
          <div className="features-header">
            <div>
              <h1 className="features-title">Engineered for Efficiency</h1>
              <p className="features-subtitle">
                Complex placement workflows simplified into an intuitive,
                high-speed ecosystem designed for scale.
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
                Monitor progress from application to final evaluation with
                granular dashboards for all stakeholders.
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
        <section className="stats-container">
          <div className="stats">
            <h1>5000+</h1>
            <p>UNIVERSITIES</p>
          </div>

          <div className="stats">
            <h1>10k+</h1>
            <p>GLOBAL COMPANIES</p>
          </div>

          <div className="stats">
            <h1>1M</h1>
            <p>PLACEMENTS</p>
          </div>
        </section>
        <section className="stack-container">
          <div className="stack-wrapper">
            <div className="stack-container-1">
              <h1 className="stk-1">
                For Students:
                <br />
                <span className="highlight">Your Career Launchpad.</span>
              </h1>

              <div className="list-for-points">
                <div className="points">
                  <img src={Tick} alt="tick-icon" className="tick" />
                  <div className="point-content">
                    <h2>One-click Applications</h2>
                    <p>
                      Apply to top-tier firms instantly with your verified
                      profile.
                    </p>
                  </div>
                </div>

                <div className="points">
                  <img src={Tick} alt="tick-icon" className="tick" />
                  <div className="point-content">
                    <h2>AI-Powered Matching</h2>
                    <p>
                      Get matched with opportunities that align with your skills
                      and career goals.
                    </p>
                  </div>
                </div>

                <div className="points">
                  <img src={Tick} alt="tick-icon" className="tick" />
                  <div className="point-content">
                    <h2>Real-Time Updates</h2>
                    <p>
                      Track application status, interview schedules, and
                      placement progress effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="button-group">
                <button className="btn-1">Students</button>
                <button className="btn-1">Employers</button>
                <button className="btn-1">Universities</button>
              </div>
            </div>

            <div className="office-image-container">
              <div className="office-image-shadow">
                <img
                  src={OfficeEnvStockImage}
                  alt="Preview"
                  className="office-env-Stock-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
      <div className="bg-footer-color">
        <footer className="footer-landing ">
          <div className="footer-container-landing">
            <div className="footer-section-landing ">
              <h2 className="logo-intern">InternMS</h2>
              <p className="footer-word-1" id="quotes">
                The ultimate platform for managing internships, connecting
                talent, and building the future of work.
              </p>
              <div className="icon-wrapper-landing ">
                <img src={Mail} alt="mail.png" className="dual-icon-landing" />
                <img
                  src={Browser}
                  alt="browser.png"
                  className="dual-icon-landing"
                />
              </div>
            </div>

            <div className="footer-section-landing">
              <h3>Product</h3>
              <ul>
                <li className="footer-word-1">For Students</li>
                <li className="footer-word-1">For Employers</li>
                <li className="footer-word-1">For Universities</li>
                <li className="footer-word-1">Pricing</li>
              </ul>
            </div>

            <div className="footer-section-landing">
              <h3>Company</h3>
              <p className="footer-word-1 company-link-landing">
                Privacy Policy
              </p>
              <p className="footer-word-1 company-link-landing">
                Terms of Service
              </p>
              <p className="footer-word-1 company-link-landing">Resources</p>
              <p className="footer-word-1 company-link-landing">Contact Us</p>
            </div>
          </div>

          <div className="footer-bottom-landing ">
            <p>© {new Date().getFullYear()} InternMS. All rights reserved.</p>
            <p>© Made with ❤️ for the future workforce.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
