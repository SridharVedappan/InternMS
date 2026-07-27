import React from "react";
import "../Components-InternDashBoard/NavbarIDB.css";
import IDBmore from "../assets/icons/ADBmore.png";
import IDBsearch from "../assets/icons/ADBsearch.png";
import IDBnotification from "../assets/icons/ADBnotification.png";
import IDBaccount from "../assets/icons/ADBaccount.png";
import IDBdownarrow from "../assets/icons/ADBdownaeeow.png";

export default function NavbarIDB() {
  return (
    <div className="Content-nav-IDB">
      <div className="navbar-left-IDB">
        <div className="menu-icon-IDB">
          <img
            src={IDBmore}
            alt="abdmore"
            style={{
              width: "24.06px",
              height: "24.06px",
              color: "#003073",
              cursor: "pointer",
            }}
          />
        </div>

        <div className="dashboard-text-IDB">
          <h3>Welcome back, Intern</h3>
          <p>Here's Whats's happening with your internship program.</p>
        </div>
      </div>

      <div className="navbar-right-IDB">
        <div className="search-box-IDB">
          <span className="search-icon-IDB">
            <img
              src={IDBsearch}
              alt="abdsearch"
              style={{ width: "25.06px", height: "25.06" }}
            />
          </span>
          <input type="text" placeholder="Search anything....." />
        </div>

        <div className="notification-icon-IDB">
          <img
            src={IDBnotification}
            alt="abdnotification"
            style={{ width: "16px", height: "20px" }}
          />
          <span className="notification-dot-IDB"></span>
        </div>

        <div className="profile-section-IDB">
          <div className="profile-icon-IDB">
            <img
              src={IDBaccount}
              alt="account"
              style={{ width: "22.5px", height: "24px" }}
            />
          </div>

          <div className="profile-text-IDB">
            <h4>Intern</h4>
            <p>Intern Dashboard</p>
          </div>

          <div className="dropdown-icon-IDB">
            <img src={IDBdownarrow} alt="ADBarrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
