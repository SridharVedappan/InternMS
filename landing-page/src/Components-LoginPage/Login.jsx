import React, { useState } from "react";
import MailIcon from "../assets/icons/mail-icon.png";
import LockIcon from "../assets/icons/lock.png";
import EyeOpen from "../assets/icons/eye-open.png";
import EyeClose from "../assets/icons/eye-close.png";
import { Link, useNavigate } from "react-router-dom";
import ThinLine from "../assets/icons/horizontal-divider.png";
import GoogleBtn from "../assets/icons/google.png";
import Arrow2 from "../assets/icons/right-arrow.png";
import "../Components-LoginPage/Login.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

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
      <div className="Leftside-card">
        <div className="inner-leftside-card">
          <h2 className="login-logo">InternHub</h2>

          <h2 className="login-heading">
            Your next big leap starts
            <br />
            here.
          </h2>

          <p className="login-description">
            Connect with industry leaders, manage your applications, and
            accelerate your career path with our comprehensive internship
            management platform.
          </p>
          <footer className="footer-login-1">
            <div className="metrics-container">
              <div className="metric">
                <h3 className="metric-value">500+</h3>
                <div className="metric-title">PARTNER COMPANIES</div>
              </div>
              <div className="metric">
                <h3 className="metric-value">10k+</h3>
                <div className="metric-title">SUCCESS STORIES</div>
              </div>
            </div>
            <p className="copyright-text">© 2024 InternMS</p>
          </footer>
        </div>
      </div>

      {/* Right Side */}
      <div className="rightside-login-card">
        <div className="inner-rightside-login-card">
          <h1 className="login-title">Welcome Back</h1>

          <p className="login-quotes">Manage your career journey.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
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

            <div className="form-group">
              <div className="password-label-row">
                <label>Password</label>

                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
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
                  <img
                    src={showPassword ? EyeOpen : EyeClose}
                    alt={showPassword ? "Hide password" : "Show password"}
                    className={
                      showPassword ? "eye-open-icon" : "eye-close-icon"
                    }
                  />
                </button>
              </div>

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="remember-me-container">
              <label className="remember-me-label">
                <input type="checkbox" className="remember-me-checkbox" />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button type="submit" className="login-btn">
              Sign In
              <img src={Arrow2} alt="arrow" className="login-arrow" />
            </button>
          </form>
          <div className="divider-login">
            <img src={ThinLine} alt="line" className="thin-line" />
            <div className="or-text">OR CONTINUE WITH</div>
            <img src={ThinLine} alt="line" className="thin-line" />
          </div>

          <div className="social-login">
            <button className="google-btn">
              <img src={GoogleBtn} alt="google" className="google-icon" />
              Google
            </button>
          </div>

          <footer className="login-footer fade-up delay-5">
            <p className="signup-text">
              Don't have an account?{" "}
              <Link to="/hr-registration" className="create-account-login">
                Create Account
              </Link>
            </p>

            <div className="footer-links-login">
              <span>Help</span>
              <span className="dot"></span>
              <span>Privacy</span>
              <span className="dot"></span>
              <span>Terms</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
