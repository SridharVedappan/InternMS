import React from "react";
import Icon from "../assets/icons/Icon.png";
import Line from "../assets/line.png";
import Right from "../assets/icons/right-arrow.png";
import "../componnets/HeroSection.css";
import InternImage from "../assets/internship-management-dashboard.png";

export default function HeroSection() {
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

          <div className="sub-2">
            <h1 className="title-1">Seamless Internships.</h1>

            <div className="title-and-line">
              <h1 className="title-2">Smarter Management.</h1>
              <img className="line" src={Line} alt="line" />
            </div>

            <p className="para-1">
              Bridging the gap between ambitious talent and global
              opportunities. The definitive operating system for universities,
              students, and employers.
            </p>

            <div className="sub-4">
              <button className="btn-1">
                Get Started
                <img className="arrow" src={Right} alt="arrow" />
              </button>

              <button className="btn-2">Book a Demo</button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img className="intern-img" src={InternImage} alt="dashboard" />
        </div>
      </div>
    </div>
  );
}
