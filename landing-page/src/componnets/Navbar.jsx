import React from "react";
import "../componnets/Navbar.css";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <h1 className="logo">InternMS</h1>
      </div>

      <div className="btn-container">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default Nav;
