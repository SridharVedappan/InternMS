import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { DashboardMain } from "./DashboardMain.jsx";
import { MyprofileIntern } from "./MyprofileIntern.jsx";
import { InternshipMain } from "./InternshipMain.jsx";
import { TasksIntern } from "./TasksIntern.jsx";
import { AttendanceIntern } from "./AttendanceIntern.jsx";
import { ReportsIntern } from "./ReportsIntern.jsx";
import { ProjectsIntern } from "./ProjectsIntern.jsx";
import { MentorIntern } from "./MentorIntern.jsx";
import { LearningIntern } from "./LearningIntern.jsx";
import { ResourcesIntern } from "./ResourcesIntern.jsx";
import { CertificatesIntern } from "./CertificatesIntern.jsx";
import { SettingsIntern } from "./SettingsIntern.jsx";
import "../Components-InternDashBoard/InternDashboard.css";
import IDBmore from "../assets/icons/ADBmore.png";
import IDBsearch from "../assets/icons/ADBsearch.png";
import IDBnotification from "../assets/icons/ADBnotification.png";
import IDBaccount from "../assets/icons/ADBaccount.png";
import IDBdownarrow from "../assets/icons/ADBdownaeeow.png";
import HomeIDB from "../assets/icons/HomeAdmindash.png";
import MyprofileIDB from "../assets/icons/MyprofileIDB.png";
import InternshipIDB from "../assets/icons/Myinternship.png";
import TasksIDB from "../assets/icons/TasksIDB.png";
import AttendanceIDB from "../assets/icons/AttendanceIDB.png";
import ProjectsIDB from "../assets/icons/ProjectsIDB.png";
import Weeklyreports from "../assets/icons/Weeklyreports.png";
import MentorIDB from "../assets/icons/MentorIDB.png";
import LearningIDB from "../assets/icons/LearningIDB.png";
import ResourcesIDB from "../assets/icons/ResourcesIDB.png";
import Certificateidb from "../assets/icons/Certificatesidb.png";
import SettingsIDB from "../assets/icons/SettingsIDB.png";

export const InternDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [Show, setShow] = useState(false);

  return (
    // Sidebar
    <div className={`Content-IDB ${Show ? "Show" : ""}`}>
      <div className={`Sidebar-Content-IDB ${Show ? "Show" : ""}`}>
        <div className="sidebar-menu-IDB">
          <div
            onClick={() => setActiveTab("Dashboard")}
            className={
              activeTab === "Dashboard"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={HomeIDB}
              alt="homeidb"
              style={{ width: "20px", height: "17px" }}
            />
            {!Show && <span>Dashboard</span>}
          </div>

          <div
            onClick={() => setActiveTab("My Profile")}
            className={
              activeTab === "My Profile"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={MyprofileIDB}
              alt="myprofileidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>My Profile</span>}
          </div>

          <div
            onClick={() => setActiveTab("Internship")}
            className={
              activeTab === "Internship"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={InternshipIDB}
              alt="internshipidb"
              style={{ width: "21px", height: "21px" }}
            />
            {!Show && <span>Internship</span>}
          </div>

          <div
            onClick={() => setActiveTab("Tasks")}
            className={
              activeTab === "Tasks"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={TasksIDB}
              alt="tasksidb"
              style={{ width: "15px", height: "20px" }}
            />
            {!Show && <span>Tasks</span>}
          </div>

          <div
            onClick={() => setActiveTab("Attendance")}
            className={
              activeTab === "Attendance"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={AttendanceIDB}
              alt="Attendance"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Attendance</span>}
          </div>

          <div
            onClick={() => setActiveTab("Reports")}
            className={
              activeTab === "Reports"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={Weeklyreports}
              alt="weeklyreports"
              style={{ width: "17.52px", height: "21.6px" }}
            />
            {!Show && <span>Reports</span>}
          </div>

          <div
            onClick={() => setActiveTab("Projects")}
            className={
              activeTab === "Projects"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={ProjectsIDB}
              alt="projectsidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Projects</span>}
          </div>

          <div
            onClick={() => setActiveTab("Mentor")}
            className={
              activeTab === "Mentor"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={MentorIDB}
              alt="mentoridb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Mentor</span>}
          </div>

          <div
            onClick={() => setActiveTab("Learning")}
            className={
              activeTab === "Learning"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={LearningIDB}
              alt="Learningidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Learning</span>}
          </div>

          <div
            onClick={() => setActiveTab("Resources")}
            className={
              activeTab === "Resources"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={ResourcesIDB}
              alt="Resourcesidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Resources</span>}
          </div>

          <div
            onClick={() => setActiveTab("Certificates")}
            className={
              activeTab === "Certificates"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={Certificateidb}
              alt="certificateidb"
              style={{ width: "18px", height: "17px" }}
            />
            {!Show && <span>Certificates</span>}
          </div>

          <div
            onClick={() => setActiveTab("Settings")}
            className={
              activeTab === "Settings"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={SettingsIDB}
              alt="Settingsidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Settings</span>}
          </div>
        </div>
      </div>

      <div className="Main-IDB">
        {/* Top-Navbar */}
        <div className="Content-nav">
          <div className="navbar-left">
            <div className="menu-icon" onClick={() => setShow(!Show)}>
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

            <div className="dashboard-text">
              <h3>Welcome back, Intern</h3>
              <p>Here's Whats's happening with your internship program.</p>
            </div>
          </div>

          <div className="navbar-right">
            <div className="search-box">
              <span className="search-icon">
                <img
                  src={IDBsearch}
                  alt="abdsearch"
                  style={{ width: "25.06px", height: "25.06" }}
                />
              </span>
              <input type="text" placeholder="Search anything....." />
            </div>
            <div className="notification-icon">
              <img
                src={IDBnotification}
                alt="abdnotification"
                style={{ width: "16px", height: "20px" }}
              />
              <span className="notification-dot"></span>
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

        {activeTab === "Dashboard" && <DashboardMain />}
        {activeTab === "My Profile" && <MyprofileIntern />}
        {activeTab === "Internship" && <InternshipMain />}
        {activeTab === "Tasks" && <TasksIntern />}
        {activeTab === "Attendance" && <AttendanceIntern />}
        {activeTab === "Reports" && <ReportsIntern />}
        {activeTab === "Projects" && <ProjectsIntern />}
        {activeTab === "Mentor" && <MentorIntern />}
        {activeTab === "Learning" && <LearningIntern />}
        {activeTab === "Resources" && <ResourcesIntern />}
        {activeTab === "Certificates" && <CertificatesIntern />}
        {activeTab === "Settings" && <SettingsIntern />}
      </div>
    </div>
  );
};
