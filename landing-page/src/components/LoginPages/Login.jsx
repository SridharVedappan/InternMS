import React, { useState } from "react";
import MailIcon from "../../assets/icons/mail-icon.png";
import LockIcon from "../../assets/icons/lock.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import ThinLine from "../../assets/icons/horizontal-divider.png";
import GoogleBtn from "../../assets/icons/google.png";
import Arrow2 from "../../assets/icons/right-arrow.png";
import { useNavigate } from "react-router-dom";

import "../LoginPages/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      navigate("/two-step-verification");
    }
  };

  return (
    <div className="login-main-card">
      {/* Left Side */}
      <div className="Leftside-card fade-left">
        <div className="inner-leftside-card">
          <h2 className="login-logo fade-up">InternHub</h2>

          <h2 className="login-heading fade-up delay-1">
            Your next big leap starts
            <br />
            here.
          </h2>

          <p className="login-description fade-up delay-2">
            Connect with industry leaders, manage your applications, and
            accelerate your career path with our comprehensive internship
            management platform.
          </p>

          <div className="metrics-container fade-up delay-3">
            <div className="metric">
              <h3 className="metric-value">500+</h3>
              <div className="metric-title">PARTNER COMPANIES</div>
            </div>

            <div className="metric">
              <h3 className="metric-value">10k+</h3>
              <div className="metric-title">SUCCESS STORIES</div>
            </div>
          </div>
        </div>

        <p className="copyright-text">© 2024 InternMS</p>
      </div>

      {/* Right Side */}
      <div className="rightside-login-card fade-right">
        <div className="inner-rightside-login-card">
          <h1 className="login-title fade-up">Welcome Back</h1>

          <p className="login-quotes fade-up delay-1">
            Manage your career journey.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group fade-up delay-2">
              <label>Email Address</label>

              <div className="input-container">
                <img src={MailIcon} alt="mail" className="input-icon" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
              </div>

              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group fade-up delay-3">
              <div className="password-label-row">
                <label>Password</label>

                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              <div className="input-container">
                <img src={LockIcon} alt="lock" className="input-icon-1" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                />

                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
                </button>
              </div>

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="remember-me-container fade-up delay-4">
              <label className="remember-me-label">
                <input type="checkbox" className="remember-me-checkbox" />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button type="submit" className="login-btn fade-up delay-4">
              Sign In
              <img src={Arrow2} alt="arrow" className="login-arrow" />
            </button>

            <div className="or-container fade-up delay-5">
              <img src={ThinLine} alt="line" className="thin-line" />
              <div className="or-text">OR CONTINUE WITH</div>
              <img src={ThinLine} alt="line" className="thin-line" />
            </div>

            <div className="google-btn-wrapper fade-up delay-5">
              <button className="google-btn">
                <img src={GoogleBtn} alt="google" className="google-icon" />
                Google
              </button>
            </div>

            <p className="signup-text fade-up delay-5">
              Don't have an account?
              <span className="create-account">Create Account</span>
            </p>

            <div className="footer-links fade-up delay-5">
              <span>Help</span>
              <span className="dot"></span>
              <span>Privacy</span>
              <span className="dot"></span>
              <span>Terms</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
