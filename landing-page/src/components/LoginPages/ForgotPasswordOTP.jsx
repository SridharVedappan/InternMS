import React, { useState, useEffect, useRef } from "react";
import "../LoginPages/ForgotPasswordOTP.css";
import { useLocation, useNavigate } from "react-router-dom";
import WhiteOverlay from "../../assets/white-circle.png";
import PurpleOverlay from "../../assets/purple-circle.png";
import Security from "../../assets/icons/security-mark.png";
import RightArrowForButton from "../../assets/icons/right-arrow.png";
import Lock from "../../assets/icons/lock.png";
import Shield from "../../assets/icons/shield-icon.png";

export default function ForgotPasswordOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();
  const location = useLocation();

  const { method = "email", value = "" } = location.state || {};

  const inputRefs = useRef([]);

  useEffect(() => {
    if (!location.state) {
      navigate("/login");
      return;
    }

    inputRefs.current[0]?.focus();
  }, [location.state, navigate]);

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/\D/g, "");

    const newOtp = [...otp];

    if (!val) {
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    newOtp[index] = val[0];
    setOtp(newOtp);

    if (index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();

        newOtp[index - 1] = "";
        setOtp(newOtp);
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

    navigate("/xyz");
  };

  return (
    <div className="main-container-1">
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

        <div className="content-container-for-fp">
          <div className="img-card-conatiner">
            <img
              src={Security}
              alt="security-icon"
              className="security-icon-1"
            />
          </div>

          <div className="outer-container-for-vi">
            <p className="inner-container-for-vi">Verify Identity</p>
          </div>

          <p className="verification-description">
            We've sent a 6-digit code to your chosen method.
            <br />
            Please enter it to continue.
          </p>
        </div>
      </div>

      <div className="right-container-card">
        <div className="right-content-container">
          <h1 className="verification-title">Enter Verification Code</h1>
          <p className="para-details-for-otp-1">
            We've sent a 6-digit code to your registered Email and phone number.
            The code will
            <br />
            expire in <span className="sub-para-span">09:59</span> minutes.
          </p>

          <div className="otp-inputs-1">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                className="otp-box-1"
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <button className="verify-and-continue" onClick={handleVerify}>
            Verify and Continue
            <span>
              <img
                src={RightArrowForButton}
                alt="right-arrow"
                className="Verify-and-continue-arrow"
              />
            </span>
          </button>

          <div>
            <p className="otp-resend-text">
              <span className="otp-message">
                Didn't receive the code?
                <span className="otp-resend-link"> Resend (in 00:55)</span>
              </span>
            </p>
          </div>

          <div className="security-features">
            <div className="security-feature">
              <img className="security-icon" src={Lock} alt="lock-icon" />
              <p className="security-text">END-TO-END ENCRYPTED</p>
            </div>

            <div className="security-feature">
              <img className="security-icon" src={Shield} alt="shield-icon" />
              <p className="security-text">SECURE HANDSHAKE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
