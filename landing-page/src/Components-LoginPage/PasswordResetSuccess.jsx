import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components-LoginPage/PasswordResetSuccess.css";
import Success from "../assets/icons/success-icon.png";
import SuccessStock from "../assets/success-stock.png";
import Badge from "../assets/icons/badge.png";

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="main-prs">
      <div className="left-side-prs">
        <div className="left-side-prs-contant">
          <img src={Success} alt="success-icon" className="success-img" />
          <h1>Password reset successfully</h1>
          <p>
            Your security is our priority. You can now log in with your new
            credentials.
          </p>
          <img
            src={SuccessStock}
            alt="success-stock"
            className="success-stock"
          />
        </div>
      </div>
      <div className="right-side-prs">
        <div className="right-side-prs-content">
          <div className="badge-bg">
            <img src={Badge} alt="badge-img" className="badge-img" />
            <span className="txt-action">Action Complete</span>
          </div>
          <h1 className="success-heading">Success</h1>
          <p className="success-description">
            Your password has been updated. To keep your account secure, we
            recommend not sharing your password with anyone.
          </p>
          <button
            className="back-to-login-btn"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
          <div className="login-footer-divider">{/* content */}</div>
        </div>
      </div>
    </div>
  );
};
