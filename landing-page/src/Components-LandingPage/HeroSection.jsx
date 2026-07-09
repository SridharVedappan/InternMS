import React from "react";
import Icon from "../assets/icons/Icon.png";
import Line from "../assets/line.png";
import Right from "../assets/icons/right-arrow.png";
import "../Components-LandingPage/HeroSection.css";
import InternImage from "../assets/internship-management-dashboard.png";

export function HeroSection() {
  return (
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
            Bridging the gap between ambitious talent and global opportunities.
            The definitive operating system for universities, students, and
            world-class employers.
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
  );
}
