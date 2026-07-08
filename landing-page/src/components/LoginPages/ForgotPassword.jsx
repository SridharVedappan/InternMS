import React, { useState } from "react";
import "../LoginPages/ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";

import PasswordReset from "../../assets/icons/password-reset.png";
import RightSideArrow from "../../assets/icons/right-arrow-1.png";
import LeftArrow from "../../assets/icons/left-side-bule-arrow.png";

export default function ForgotPassword() {
  const [selectedMethod, setSelectedMethod] = useState("email");

  const navigate = useNavigate();

  const handleSendCode = () => {
    navigate("/forgot-password-otp", {
      state: {
        method: selectedMethod,
        value: selectedMethod === "email" ? "j**n@g***l.com" : "+91 9•••• 5678",
      },
    });
  };

  return (
    <div className="forgot-container">
      <div className="left-container-for-forgot-password">
        <div className="parent-conatiner-head">
          {" "}
          <h1 className="forgot-left-heading">
            Regain access to
            <br />
            your professional
            <br />
            future.
          </h1>
          <p className="forgot-left-description">
            We're here to help you get back on track. Secure your
            <br />
            account and continue exploring the best internship
            <br />
            opportunities worldwide.
          </p>
          <div className="footer-text">
            <span>© 2024 InternMS</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="right-container-for-forgot-password">
        <div className="top-right-links">
          <span className="help-text">Help</span>
          <Link to="/login" className="login-text">
            Login
          </Link>
        </div>
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
        <p className="verification-method-title">Verification Method</p>
        <div
          className={`verification-card-12 ${
            selectedMethod === "email" ? "active" : ""
          }`}
          onClick={() => setSelectedMethod("email")}
        >
          <div className="radio-container-12">
            <input
              type="radio"
              className="custom-radio-1"
              checked={selectedMethod === "email"}
              readOnly
            />
          </div>

          <div className="email-content-1">
            <p className="email-method-title">Email Address</p>
            <p className="email-method-description">
              Send code to j**n@g***l.com
            </p>
          </div>
        </div>
        <div
          className={`verification-card-12 ${
            selectedMethod === "phone" ? "active" : ""
          }`}
          onClick={() => setSelectedMethod("phone")}
        >
          <div className="radio-container-12">
            <input
              type="radio"
              className="custom-radio-1"
              checked={selectedMethod === "phone"}
              readOnly
            />
          </div>

          <div className="email-content-1">
            <p className="email-method-title">SMS / Text Message</p>
            <p className="email-method-description">
              Send code to +91 9•••• •5678
            </p>
          </div>
        </div>
        <button className="send-verification-btn" onClick={handleSendCode}>
          Send Verification Code
          <span>
            <img
              src={RightSideArrow}
              alt="right-arrow"
              className="right-side-arrow-1"
            />
          </span>
        </button>

        <div className="back-to-login-wrapper-1">
          <Link to="/login" className="back-to-login-1">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="left-arrow-icon-1"
            />
            <span className="back-to-login-text">Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
