import React, { useState } from "react";
import "../LoginPages/ForgotPassword.css";
import PasswordReset from "../../assets/icons/password-reset.png";

export default function ForgotPassword() {
  const [selectedMethod, setSelectedMethod] = useState("email");

  return (
    <div className="forgot-container">
      <div className="left-container-for-forgot-password"></div>
      <div className="right-container-for-forgot-password">
        <div className="image-card">
          <img
            src={PasswordReset}
            alt="password-reset-icon"
            className="password-reset-icon"
          />
        </div>
        <h1 id="forgot-password-title">Forgot Password?</h1>
        <p className="para-fp">
          Choose your preferred method to receive a one-time verification code.
        </p>
        <div>
          <p className="parent-div-for-sub-box">Verification Method</p>
          <div
            className={`verification-card ${
              selectedMethod === "email" ? "active" : ""
            }`}
            onClick={() => setSelectedMethod("email")}
          >
            <input
              type="radio"
              className="custom-radio-1"
              checked={selectedMethod === "email"}
              onChange={() => setSelectedMethod("email")}
            />
            <div>
              <p>Email Address</p>
              <p>Send code to j**n@g***l.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
