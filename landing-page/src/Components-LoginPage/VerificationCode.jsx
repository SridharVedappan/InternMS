import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Components-LoginPage/VerificationCode.css";
import Security from "../assets/icons/security-mark.png";
import Overlaycard from "../assets/icons/overlay-1.png";
import RightArrowForButton from "../assets/icons/arrow-2.png";
import ShieldProfile from "../assets/icons/security-profile.png";
import { Link } from "react-router-dom";

export default function VerificationCode() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();
  const location = useLocation();

  const { method = "email", value = "" } = location.state || {};

  const inputRefs = useRef([]);

  useEffect(() => {
    if (!location.state) {
      navigate("/login");
    }
  }, [location.state, navigate]);

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");

    if (!val) return;

    const newOtp = [...otp];
    newOtp[index] = val[0];
    setOtp(newOtp);

    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    console.log("OTP:", enteredOtp);

    alert("OTP Verified Successfully!");

    // Navigate to next page
    navigate("/xyz");
  };

  const handleResend = () => {
    alert("Verification code resent!");
  };

  const handleContactSupport = () => {
    navigate("/contactSupport");
  };

  const handleBackToVerification = () => {
    navigate("/two-step-verification");
  };

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

            <p
              className={`para-for-six-digit-code ${
                method === "mobile" ? "mobile-text" : ""
              }`}
            >
              We've sent a 6-digit code to your{" "}
              {method === "email" ? "email " : "mobile number "}
              <span className="span-gmail">{value}</span>
            </p>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ele) => (inputRefs.current[index] = ele)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  className="otp-box"
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>

            <button className="verify-identity" onClick={() => handleVerify()}>
              Verify Identity
              <span>
                <img
                  src={RightArrowForButton}
                  alt="right arrow"
                  className="Verify-identity-btn"
                />
              </span>
            </button>

            <div className="resend-container">
              <span className="resend-text">Didn't receive the code?</span>

              <span className="resend-label">Resend in</span>

              <span className="resend-timer"> 00:58</span>
            </div>
            <div className="verification-footer">
              <div className="back-to-verification">
                <img
                  src={ShieldProfile}
                  alt="shield-profile"
                  className="shield-profile-icon"
                />
                <p
                  className="back-to-verification-text"
                  onClick={handleBackToVerification}
                >
                  Back to verification options
                </p>
              </div>
              <p className="contact-support" onClick={handleContactSupport}>
                Contact Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
