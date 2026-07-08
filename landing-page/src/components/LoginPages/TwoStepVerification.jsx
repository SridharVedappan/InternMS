import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPages/TwoStepVerification.css";
import MailVerification from "../../assets/icons/mail-verfication-icon.png";
import Phone from "../../assets/icons/phone-num-verfication-icon.png";
import SecurityMark from "../../assets/icons/security-mark.png";
import RidhtSideArrow from "../../assets/icons/right-arrow-1.png";
import LeftSideArrow from "../../assets/icons/left-arrow-1.png";
import { Link } from "react-router-dom";
export default function TwoStepVerification() {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const navigate = useNavigate();

  const handleSendCode = () => {
    navigate("/verification-code", {
      state: {
        method: selectedMethod,
        value: selectedMethod === "email" ? "j**n@g***l.com" : "+91 9•••• 5678",
      },
    });
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <h1 className="heading-title">Secure Your Account</h1>
        <p className="para-details">
          Protecting your professional profile and application history is our
          top priority. Choose a method to verify your identity.
        </p>
        <div className="img-parent-container">
          <div className="img-container">
            <div className="circle-box">
              <img src={SecurityMark} alt="security-mark-icon" />
            </div>
          </div>
          <div className="text-content">
            <p className="no-1">256-bit Encryption</p>
            <p className="no-2">Bank-grade security standards</p>
          </div>
        </div>
        <div className="cr-container">
          <p className="copyright-text">© 2024 InternMS</p>
        </div>
      </div>

      <div className="right-container">
        <div className="verification-options">
          <h2 className="title-3">Two-Step Verification</h2>
          <p className="verify-description">
            Choose how you'd like to verify your identity.
          </p>
          <div className="verification-card-container">
            {/* Email Verification */}

            <div
              className={`verification-card ${
                selectedMethod === "email" ? "active" : ""
              }`}
              onClick={() => setSelectedMethod("email")}
            >
              <div className="verification-left">
                <div className="icon-box">
                  <img
                    className="icon-1"
                    src={MailVerification}
                    alt="mail-icon"
                  />
                </div>

                <div className="verification-content">
                  <h3>Email Verification</h3>
                  <p>j**n@g***l.com</p>
                </div>
              </div>

              <input
                type="radio"
                className="custom-radio"
                checked={selectedMethod === "email"}
                onChange={() => setSelectedMethod("email")}
              />
            </div>

            {/* Mobile Verification  */}
            <div
              className={`verification-card ${
                selectedMethod === "mobile" ? "active" : ""
              }`}
              onClick={() => setSelectedMethod("mobile")}
            >
              <div className="verification-left">
                <div className="icon-box">
                  <img className="icon-2" src={Phone} alt="phone-icon" />
                </div>

                <div className="verification-content">
                  <h3>Mobile Verification</h3>
                  <p>+91 9**** *5678</p>
                </div>
              </div>

              <input
                type="radio"
                className="custom-radio"
                checked={selectedMethod === "mobile"}
                onChange={() => setSelectedMethod("mobile")}
              />
            </div>
          </div>

          <button className="send-code-btn" onClick={handleSendCode}>
            Send Verification Code
            <img src={RidhtSideArrow} className="right-arrow-btn-icon" />
          </button>
          <div className="parent-back-to-login "></div>
          <div className="back-to-login-wrapper">
            <Link to="/login" className="back-to-login">
              <img
                src={LeftSideArrow}
                alt="left-arrow"
                className="left-arrow-icon"
              />
              <span>Back to Login</span>
            </Link>{" "}
          </div>
          <div className="para-container">
            <p>
              Need help?{" "}
              <Link to="/contactSupport" className="cs-blue">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
