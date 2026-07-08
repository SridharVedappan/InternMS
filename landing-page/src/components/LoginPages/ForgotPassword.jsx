import React from "react";
import "../LoginPages/ForgotPassword.css";
import PasswordReset from "../../assets/icons/password-reset.png";

export default function ForgotPassword() {
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
        <p>
          Choose your preferred method to receive a one-time verification code.
        </p>
      </div>
    </div>
  );
}
