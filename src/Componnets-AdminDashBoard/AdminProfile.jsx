import React from "react";
import { Link } from "react-router-dom";
import "../Componnets-AdminDashBoard/AdminProfile.css";
import adminImage from "../assets/Admin-image.png";
import CameraIcon from "../assets/icons/camera-icon.png";
import EmailIcon from "../assets/icons/email-icon.png";
import phoneIcon from "../assets/icons/phone-icon.png";
import whiteCalender from "../assets/icons/white-calender.png";
import usersIcon from "../assets/icons/users-icon.png";
import fileIcon from "../assets/icons/files-icon.png";
import calenderIcon from "../assets/icons/calender-icon.png";
import TerminalIcon from "../assets/icons/terminal-icon.png";
import ProfileIcon from "../assets/icons/black-profile-icon.png";

export const AdminProfile = () => {
  const adminData = {
    fullName: "Admin User",
    email: "admin@internms.com",
    phoneNumber: "+91 98765 43210",
    joined: "Joined on Jan 10, 2024",
    role: "Administrator",
    department: "System Administration",
    location: "Bangalore, India",
    dateOfBirth: "Jan 15, 1988",
    gender: "Male",
    language: "English",
    timeZone: "IST (UTC +5:30)",
    aboutMe:
      "Managing the platform and ensuring smooth operations. Dedicated to creating an efficient ecosystem for interns and mentors alike.",
  };

  const adminStatCards = [
    {
      title: "Total Users",
      value: "320",
      actionText: "View all users",
      icon: usersIcon,
    },

    {
      title: "Active Internships",
      value: "25",
      actionText: "View all internships",
      icon: calenderIcon,
    },
    {
      title: "Total Applications",
      value: "1,250",
      actionText: "View all applictaions",
      icon: fileIcon,
    },
    {
      title: "System Logs",
      value: "350",
      actionText: "View all logs",
      icon: TerminalIcon,
    },
  ];

  const AdminPersonalInfo = {
    fullName: "Admin User",
    email: "admin@internms.com",
    phone: "+91 98765 43210",
    role: "Administrator",
    department: "System Administration",
    location: "Bangalore, India",
    dob: "Jan 15, 1988",
    gender: "Male",
    language: "English",
    timeZone: "IST (UTC +5:30)",
    aboutMe:
      "Managing the platform and ensuring smooth operations. Dedicated to creating an efficient ecosystem for interns and mentors alike.",
  };

  return (
    <div className="dashboard-container">
      {/*profile card */}
      <div className="top-section">
        <div className="admin-profile-card">
          <div className="admin-avatar">
            <img src={adminImage} alt="Admin avatar" className="avatar-img" />

            <button className="camera-button">
              <img
                src={CameraIcon}
                alt="Admin Camera Icon"
                className="admin-Camera"
              />
            </button>
          </div>

          <div className="admin-details">
            <h2 className="admin-name">{adminData.fullName}</h2>

            <div className="admin-badge">
              <span>Administrator</span>
            </div>

            <div className="admin-info-container">
              <p className="admin-info">
                <img src={EmailIcon} alt="Email" className="email-icon" />
                {adminData.email}
              </p>

              <p className="admin-info">
                <img
                  src={phoneIcon}
                  alt="phone number"
                  className="phone-icon"
                />
                {adminData.phoneNumber}
              </p>

              <p className="admin-info">
                <img
                  src={whiteCalender}
                  alt="white Calendar"
                  className="white-calender"
                />
                {adminData.joined}
              </p>
            </div>
          </div>
        </div>

        {/*Stats Cards */}
        <div className="admin-stats-cards">
          {adminStatCards.slice(0, 4).map((card, index) => (
            <div key={index} className="admin-stat-card">
              <div className="admin-stats-left">
                <p className="admin-stats-title">{card.title}</p>
                <h3 className="admin-stats-value">{card.value}</h3>
                <Link to="/AdminDashboard" className="action-text">
                  {card.actionText}
                </Link>
              </div>

              <div className="admin-stats-right">
                <img src={card.icon} className="admin-stats-icons" />
              </div>
            </div>
          ))}
        </div>

        {/*persoanl Info */}
        <div className="admin-personalInfo-card">
          <div className="admin-personalInfo-container">
            <div className="admin-personalInfo-heading">
              <img src={ProfileIcon} alt="Profile Icon" />
              <h2>Personal Information</h2>
            </div>
          </div>
          <div className="admin-personalInfo-grid">
            <div className="admin-personalInfo-row">
              <span>Full Name</span>
              <p>{adminData.fullName}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Date of Birth</span>
              <p>{adminData.dateOfBirth}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Email</span>
              <p>{adminData.email}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Gender</span>
              <p>{adminData.gender}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Phone Number</span>
              <p>{adminData.phoneNumber}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Language</span>
              <p>{adminData.language}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Role</span>
              <p>{adminData.role}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Time Zone</span>
              <p>{adminData.timeZone}</p>
            </div>

            <div className="admin-personalInfo-row">
              <span>Department</span>
              <p>{adminData.department}</p>
            </div>

            <div className="admin-personalInfo-row admin-personalInfo-lastRow">
              <span>About Me</span>
              <p>{adminData.aboutMe}</p>
            </div>

            <div className="admin-personalInfo-row admin-personalInfo-lastRow">
              <span>Location</span>
              <p>{adminData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
