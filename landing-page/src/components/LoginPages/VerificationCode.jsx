import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../LoginPages/VerificationCode.css";
import Security from "../../assets/icons/security-mark.png";
import Overlaycard from "../../assets/icons/overlay-1.png";
import RightArrowForButton from "../../assets/icons/arrow-2.png";

export default function VerificationCode() {
  const location = useLocation();
  return (
    <div className="otp-outer-container">
      <div className="otp-wrapper">
        <div className="content-card-1">
          <div className="left-content-container">
            <div className="img-container-security-icon">
              <img
                src={Security}
                alt="security-icon"
                className="security-img"
              />
            </div>

            <h1 className="Security-first">Security first.</h1>

            <p className="para-details-for-otp-page">
              We take your account security seriously. Verify your
              <br />
              identity to protect your internship applications and sensitive
              professional data.
            </p>

            <h3 className="sub-para-for-otp-page">
              Joined by 10k+ professionals
            </h3>

            <img src={Overlaycard} alt="overlay" className="overlay-card" />
          </div>
        </div>

        <div className="content-card-2 ">
          <div className="right-content-container">
            <h1 className="enter-code-title">Enter Verification Code</h1>

            <p className="para-for-six-digit-code">
              We've sent a 6-digit code to your email{" "}
              <span className="span-gmail">j**n@g***l.com</span>
            </p>

            <button>
              Verify Identity
              <span>
                <img
                  src={RightArrowForButton}
                  alt="right arrow"
                  className="Verify-identity-btn"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
