import React from "react";
import "../LoginPages/ForgotPasswordOTP.css";
import WhiteOverlay from "../../assets/white-circle.png";
import PurpleOverlay from "../../assets/purple-circle.png";

export default function ForgotPasswordOTP() {
  return (
    <div className="left-container-card">
      <img
        src={WhiteOverlay}
        alt="white-overlay"
        className="blur-white-overlay"
      />

      <img
        src={PurpleOverlay}
        alt="purple-overlay"
        className="blur-purple-overlay"
      />

      <div className="content-container-for-fp">...</div>
    </div>
  );
}
