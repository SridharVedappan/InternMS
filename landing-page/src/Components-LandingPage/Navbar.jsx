import React from "react";
import { Link } from "react-router-dom";
import "../Components-LandingPage/Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <h1 className="logo">InternMS</h1>
      </div>

      <div className="btn-container">
        <Link to="/login">
          <button className="nav-login-btn">Login</button>
        </Link>

        <Link to="/hr-registration">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </div>
  );
};
