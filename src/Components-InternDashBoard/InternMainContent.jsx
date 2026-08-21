import React, { useState } from "react";
import { InternDashboard } from "./InternDashboard.jsx";
import { InternMyprofile } from "./InternMyprofile.jsx";
import { InternshipMain } from "./InternshipMain.jsx";
import { TasksMain } from "./TasksMain.jsx";
import { AttendanceMain } from "./AttendanceMain.jsx";
import { ReportsMain } from "./ReportsMain.jsx";
import { ProjectsMain } from "./ProjectsMain.jsx";
import { MentorMain } from "./MentorMain.jsx";
import { LearningMain } from "./LearningMain.jsx";
import { ResourcesMain } from "./ResourcesMain.jsx";
import { CertificatesMain } from "./CertificatesMain.jsx";
import { SettingsMain } from "./SettingsMain.jsx";
import "../Components-InternDashBoard/InternMainContent.css";
import hamburgerMenu from "../assets/intern/hamburger-menu.png";
import Search from "../assets/intern/search.png";
import notification from "../assets/intern/notification.png";
import accountProfile from "../assets/intern/account-profile.png";
import downArrow from "../assets/intern/down-arrow.png";
import Home from "../assets/intern/Home-icon.png";
import Myprofile from "../assets/intern/Myprofile.png";
import Internship from "../assets/intern/Myinternship.png";
import Tasks from "../assets/intern/Tasks.png";
import Attendance from "../assets/intern/Attendance.png";
import Projects from "../assets/intern/Projects.png";
import Weeklyreports from "../assets/intern/Weeklyreports.png";
import Mentor from "../assets/intern/Mentor.png";
import Learning from "../assets/intern/Learning.png";
import Resources from "../assets/intern/Resources.png";
import Certificate from "../assets/intern/Certificates.png";
import Settings from "../assets/intern/Settings.png";

export const InternMainContent = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [Show, setShow] = useState(false);

  return (
    // Sidebar
    <div className={`intern-main-Content-container ${Show ? "Show" : ""}`}>
      <div className={`intern-sidebar-container ${Show ? "Show" : ""}`}>
        <div className="intern-sidebar-menu">
          <div onClick={() => setActiveTab("Dashboard")} className={ activeTab === "Dashboard" ? "Intern-sidebar active-Nav" : "Intern-sidebar" }>
            <img src={Home} alt="home" style={{ width: "20px", height: "17px" }}/>
            {!Show && <span>Dashboard</span>}
          </div>

          <div onClick={() => setActiveTab("My Profile")} className={ activeTab === "My Profile" ? "Intern-sidebar active-Nav" : "Intern-sidebar" }>
            <img src={Myprofile} alt="myprofile" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>My Profile</span>}
          </div>

          <div onClick={() => setActiveTab("Internship")} className={ activeTab === "Internship" ? "Intern-sidebar active-Nav" : "Intern-sidebar" }>
            <img src={Internship} alt="internship" style={{ width: "21px", height: "21px" }}/>
            {!Show && <span>Internship</span>}
          </div>

          <div onClick={() => setActiveTab("Tasks")} className={ activeTab === "Tasks" ? "Intern-sidebar active-Nav" : "Intern-sidebar" }>
            <img src={Tasks} alt="tasksi" style={{ width: "15px", height: "20px" }}/>
            {!Show && <span>Tasks</span>}
          </div>

          <div onClick={() => setActiveTab("Attendance")} className={ activeTab === "Attendance" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Attendance} alt="Attendance" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Attendance</span>}
          </div>

          <div onClick={() => setActiveTab("Reports")} className={ activeTab === "Reports" ? "Intern-sidebar active-Nav" : "Intern-sidebar" }>
            <img src={Weeklyreports} alt="weeklyreports" style={{ width: "17.52px", height: "21.6px" }}/>
            {!Show && <span>Reports</span>}
          </div>

          <div onClick={() => setActiveTab("Projects")} className={ activeTab === "Projects" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Projects} alt="projects" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Projects</span>}
          </div>

          <div onClick={() => setActiveTab("Mentor")} className={ activeTab === "Mentor" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Mentor} alt="mentor" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Mentor</span>}
          </div>

          <div onClick={() => setActiveTab("Learning")} className={ activeTab === "Learning" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Learning} alt="Learning" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Learning</span>}
          </div>

          <div onClick={() => setActiveTab("Resources")} className={ activeTab === "Resources" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Resources} alt="Resourcesi" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Resources</span>}
          </div>

          <div onClick={() => setActiveTab("Certificates")} className={ activeTab === "Certificates" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Certificate} alt="certificate" style={{ width: "18px", height: "17px" }}/>
            {!Show && <span>Certificates</span>}
          </div>

          <div onClick={() => setActiveTab("Settings")} className={ activeTab === "Settings" ? "Intern-sidebar active-Nav" : "Intern-sidebar"}>
            <img src={Settings} alt="Settings" style={{ width: "24px", height: "24px" }}/>
            {!Show && <span>Settings</span>}
          </div>
        </div>
      </div>

      <div className="intern-Main-container">
        {/* header */}
        <div className="Intern-Header">
          <div className="Intern-nav-leftSide">
            <div className="menu-icon" onClick={() => setShow(!Show)}>
              <img src={hamburgerMenu} alt="Hamburger Menu" style={{ width: "24.06px", height: "24.06px", color: "#003073", cursor: "pointer"}}/>
            </div>

            <div className="Intern-nav-text-container">
              <h3>Welcome back, Intern</h3>
              <p>Here's Whats's happening with your internship program.</p>
            </div>
          </div>

          <div className="Intern-navw-rightSide">
            <div className="intern-search-container">
              <span className="search-icon"><img src={Search} alt="search Icon" style={{ width: "25.06px", height: "25.06" }}/></span>
              <input type="text" placeholder="Search anything....." />
            </div>
            <div className="notification-icon">
              <img src={notification} alt="notification" style={{ width: "16px", height: "20px" }}/>
              <span className="notification-dot"></span>
            </div>
            <div className="admin-profile-container">
              <div className="admin-profile-icon-wrapper">
                <img src={accountProfile} alt="account" style={{ width: "22.5px", height: "24px" }}/>
              </div>
              <div className="admin-profile-user-info">
                <h4>Intern</h4>
                <p>Intern Dashboard</p>
              </div>
              <div className="intern-dropdown-arrow-wrapper">
                <img src={downArrow} alt="dropdown-arrow" />
              </div>
            </div>
          </div>
        </div>

        {/* main content */}
        {activeTab === "Dashboard" && (<InternDashboard />)}
        {activeTab === "My Profile" && (<InternMyprofile />)}
        {activeTab === "Internship" && (<InternshipMain />)}
        {activeTab === "Tasks" && (<TasksMain />)}
        {activeTab === "Attendance" && (<AttendanceMain />)}
        {activeTab === "Reports" && (<ReportsMain />)}
        {activeTab === "Projects" && (<ProjectsMain />)}
        {activeTab === "Mentor" && (<MentorMain />)}
        {activeTab === "Learning" && (<LearningMain />)}
        {activeTab === "Resources" && (<ResourcesMain />)}
        {activeTab === "Certificates" && (<CertificatesMain />)}
        {activeTab === "Settings" && (<SettingsMain />)}
        
      </div>
    </div>
  );
};
