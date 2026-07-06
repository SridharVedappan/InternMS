import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPages/TwoStepVerification.css";
// import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import SecurityMark from "../../assets/icons/security-mark.png";

export default function TwoStepVerification() {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const navigate = useNavigate();

  const handleSendCode = () => {
    const fakeOTP = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem("otp", fakeOTP);
    localStorage.setItem("verificationMethod", selectedMethod);

    alert(`Demo OTP: ${fakeOTP}`);

    navigate("/verify-otp");
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
          <h2>Two-Step Verification</h2>
          <p>Choose how you'd like to verify your identity.</p>
          <div
            className={`verification-card ${
              selectedMethod === "email" ? "active" : ""
            }`}
            onClick={() => setSelectedMethod("email")}
          >
            <div className="verification-left">
              <div className="icon-box">{/* <FaEnvelope /> */}</div>

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

          <div
            className={`verification-card ${
              selectedMethod === "mobile" ? "active" : ""
            }`}
            onClick={() => setSelectedMethod("mobile")}
          >
            <div className="verification-left">
              <div className="icon-box">{/* <FaMobileAlt /> */}</div>

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

          <button className="send-code-btn" onClick={handleSendCode}>
            Send Verification Code
          </button>
        </div>
      </div>
    </div>
  );
}
