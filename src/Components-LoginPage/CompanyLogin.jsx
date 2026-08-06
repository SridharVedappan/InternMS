import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Components-LoginPage/CompanyLogin.css";
import UserIcon from "../assets/icons/user-profile.png";
import LockIcon from "../assets/icons/lock.png";
import EyeOpenIcon from "../assets/icons/eye-open.png";
import EyeCloseIcon from "../assets/icons/eye-close.png";
import Rightarrow from "../assets/icons/right-arrow.png";
import GoogleIcon from "../assets/icons/google.png";

export const CompanyLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });
  const [Error, setError] = useState("");
  const handlechange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Enter your username and password");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    navigate("/Interndashboard");
  };

  return (
    <div className="company-login-page">
      {/* Left Side */}
      <div className="company-login-left">
        <div className="company-login-left-content">
          <h2 className="company-login-portal-title">HR and Company Portal</h2>
          <div className="company-login-text-content">
            <h1 className="company-login-main-heading">
              Empowering
              <br />
              Growth
              <br />
              through
              <br />
              Innovation.
            </h1>

            <p className="company-login-description">
              Connect with leaders, manage talent, and <br />
              drive your organization forward with our <br />
              unified platform.
            </p>
          </div>
          <div className="company-login-stats-grid">
            <div className="company-login-stats">
              <div className="company-login-stat">
                <h3>500+</h3>
                <p>PARTNER COMPANIES</p>
              </div>

              <div className="company-login-stat">
                <h3>10k+</h3>
                <p>SUCCESS STORIES</p>
              </div>
            </div>

            <div className="company-login-copyright">
              <p>© 2024 HR and Company Portal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="company-login-right">
        <div className="right-content-HRandCompany">
          <div className="login-box-HRandCompany">
            <div className="head-HRandCompany">
              <h1>Welcome Back</h1>

              <p>Manage your career journey.</p>
            </div>

            <div className="Form-HRandCompany">
              <label>username</label>

              <form onSubmit={handlesubmit}>
                <div className="input-box-HRandCompany">
                  <img
                    src={UserIcon}
                    alt="user-profile"
                    style={{ width: "16px", height: "16px" }}
                  />
                  <input
                    type="username"
                    name="username"
                    value={formData.username}
                    onChange={handlechange}
                    placeholder="Enter Your Username"
                  />
                </div>

                <div className="label-row-HRandCompany">
                  <label>Password</label>
                  <Link
                    to="/Forgotpassword"
                    className="company-login-forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="input-box-HRandCompany">
                  <img
                    src={LockIcon}
                    alt=""
                    style={{ width: "16px", height: "21px", color: "#777586" }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handlechange}
                    placeholder="Enter your password"
                  />
                  <img
                    src={showPassword ? EyeOpenIcon : EyeCloseIcon}
                    alt="Toggle Password"
                    className="eye-icon-HRandCompany"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>

                {Error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: "16px",
                      marginTop: "25px",
                    }}
                  >
                    {" "}
                    {Error}
                  </h3>
                )}
                <br />
                <div className="remember-HRandCompany">
                  <input type="checkbox" />
                  <span className="company-login-keep-signed-in">
                    Keep me signed in
                  </span>
                </div>

                <button type="submit" className="signin-HRandCompany">
                  Sign In{" "}
                  <img
                    src={Rightarrow}
                    alt="right-arrow"
                    style={{ width: "16", height: "16px" }}
                  />
                </button>
              </form>
            </div>

            <div className="divider-HRandCompany">
              <hr />
              <span>OR CONTINUE WITH</span>
              <hr />
            </div>

            <button className="google-HRandCompany">
              <img
                src={GoogleIcon}
                alt="Google"
                className="Gicon-HRandCompany"
              />
              Sign in with Google
            </button>

            <p className="signup-HRandCompany">
              Don't have an account?
              <Link to="/Createaccount"> Create Account</Link>
            </p>

            <div className="footer-links-HRandCompany">
              <a href="#">Help</a>
              <span>•</span>
              <a href="#">Privacy</a>
              <span>•</span>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
