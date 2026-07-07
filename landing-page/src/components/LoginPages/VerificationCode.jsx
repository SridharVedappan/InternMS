import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../LoginPages/TwoStepVerification.css";
import Security from "../../assets/icons/security-mark.png";

export default function VerificationCode() {
  const location = useLocation();
  return (
    <div className="otp-outer-container">
      <div className="content-card">
        <div className="left-content-container">
          <img src={Security} alt="security-icon" className="security-img" />
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
