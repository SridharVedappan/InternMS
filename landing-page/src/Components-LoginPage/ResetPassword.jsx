import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components-LoginPage/ResetPassword.css";
import BlurShield from "../assets/Shield-blur.png";
import PassWordReset from "../assets/icons/password-reset-icon.png";
import GreyShield from "../assets/icons/Shield-grey.png";
import Lock from "../assets/icons/lock.png";
import RightArrow from "../assets/icons/right-arrow.png";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const isLengthValid = password.length >= 8;
  const isPasswordMatch =
    password === confirmPassword && confirmPassword !== "";

  const showPasswordError = password.length > 0 && !isLengthValid;
  const showConfirmPasswordError =
    confirmPassword.length > 0 && !isPasswordMatch;

  const handleUpdatePassword = () => {
    if (!isLengthValid) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (!isPasswordMatch) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password Updated Successfully!");
    navigate("/password-reset-success");
  };
  return (
    <div className="rp-main-container">
      <div className="rp-leftside-container">
        <div className="rp-leftside-content-container">
          <h1 className="rp-leftside-heading ">
            Secure your
            <br />
            account.
          </h1>

          <p className="rp-leftside-para">
            Ensure your career progress is protected. Set a strong password to
            continue your journey with InternHub.
          </p>

          <div>
            <img src={BlurShield} alt="blur-shield" className="shield-blur" />
          </div>

          <div className="footer-text-1">
            <span>© 2024 InternMS</span>
            <span className="footer-dot-1">•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="rp-rightside-container">
        <div className="rp-rightside-content-container">
          <div className="rp-content">
            <img
              src={PassWordReset}
              alt="password-reset-icon"
              className="reset-ps-image"
            />
            <h1>Set New Password</h1>
            <p>Your new password must be different from previous passwords.</p>
          </div>

          <div className="password-form">
            <div className="form-group">
              <label className="password-label">New Password</label>

              <div className="input-wrapper">
                <div className="input-icon-box">
                  <img src={Lock} alt="lock" className="input-icon" />
                </div>

                <input
                  type="password"
                  className={`password-input ${showPasswordError ? "input-error" : ""}`}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="password-label">Confirm New Password</label>

              <div className="input-wrapper">
                <div className="input-icon-box">
                  <img src={GreyShield} alt="lock" className="input-icon" />
                </div>

                <input
                  type="password"
                  className={`password-input ${
                    showConfirmPasswordError ? "input-error" : ""
                  }`}
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="password-rules">
              <div className="rule">
                <span
                  className={`rule-icon ${showPasswordError ? "error" : ""}`}
                ></span>

                <span className={showPasswordError ? "error-text" : ""}>
                  At least 8 characters
                </span>
              </div>

              <div className="rule">
                <span
                  className={`rule-icon ${
                    showConfirmPasswordError ? "error" : ""
                  }`}
                ></span>

                <span className={showConfirmPasswordError ? "error-text" : ""}>
                  Passwords match
                </span>
              </div>
            </div>

            <button
              className="update-password-btn"
              onClick={handleUpdatePassword}
              disabled={!isLengthValid || !isPasswordMatch}
            >
              <span>Update Password</span>
              <img
                src={RightArrow}
                alt="right-arrow"
                className="button-arrow"
              />
            </button>
            <div className="back-login">
              <a href="/login">Back to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
