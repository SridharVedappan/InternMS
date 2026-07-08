import React, { useState, useEffect, useRef } from "react";
import "../LoginPages/ForgotPasswordOTP.css";
import { useLocation, useNavigate } from "react-router-dom";
import WhiteOverlay from "../../assets/white-circle.png";
import PurpleOverlay from "../../assets/purple-circle.png";
import Security from "../../assets/icons/security-mark.png";
import RightArrowForButton from "../../assets/icons/right-arrow.png";

export default function ForgotPasswordOTP() {
  const [num, setNum] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();

  const { method = "email", value = "" } = location.state || {};
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!location.state) {
      navigate("/login");
    }
  }, [location.state, navigate]);

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
          <p>
            We've sent a 6-digit code to your registered Email and phone <br />
            number. The code will
            <br />
            expire in 09:59 minutes.
          </p>

          <button
            className="verify-and-continue"
            onClick={() => handleVerify()}
          >
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
            <p>
              Didn't receive the code? <span>Resend (in 00:55)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
