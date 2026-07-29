import React from "react";
import "../Components-InternDashBoard/Interndashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import IDBmore from "../assets/icons/ADBmore.png";
import IDBsearch from "../assets/icons/ADBsearch.png";
import IDBnotification from "../assets/icons/ADBnotification.png";
import IDBaccount from "../assets/icons/ADBaccount.png";
import IDBdownarrow from "../assets/icons/ADBdownaeeow.png";
import HomeIDB from "../assets/icons/HomeAdmindash.png";
import Myinternship from "../assets/icons/Myinternship.png";
import Applicationstatus from "../assets/icons/Applicationstatus.png";
import Assignedmentor from "../assets/icons/Assignedmentor.png";
import Progresstracking from "../assets/icons/Progresstracking.png";
import Weeklyreports from "../assets/icons/Weeklyreports.png";
import TasksIDB from "../assets/icons/IDBtasks.png";
import Notificationsidb from "../assets/icons/Notificationidb.png";
import Certificateidb from "../assets/icons/Certificatesidb.png";
import Performanceidb from "../assets/icons/Peromanceidb.png";
import Currentinternships from "../assets/icons/Currentinternship.png";
import IDBsectiononearrow from "../assets/icons/IDBsectionarrow.png";
import InternshipduratoinIDB from "../assets/icons/IntenshipdurationIDB.png";
import Overallprogress from "../assets/icons/Overallprogress.png";
import Reportsubmitted from "../assets/icons/Reportsubmitted.png";
import WavinghandIDB from "../assets/icons/WavinghandIDB.png";
import completedIcon from "../assets/icons/completed.png";
import pendingIcon from "../assets/icons/pending.png";
import inProgressIcon from "../assets/icons/in-progress.png";
import notStartedIcon from "../assets/icons/not-started.png";
import messageIcon from "../assets/icons/message.png";
import calendarIcon from "../assets/icons/calendar.png";
import checkedIcon from "../assets/icons/Completed-icon.png";
import activeIcon from "../assets/icons/active-Icon.png";
import upcomingIcon from "../assets/icons/upcoming-Icon.png";
import DownloadArrow from "../assets/icons/Download-arrow-icon.png";
import greyDownloadIcon from "../assets/icons/grey-download.png";
import reportIcon from "../assets/icons/reportIcon.png";
import PurpleTaskIcon from "../assets/icons/PurpleTaskIcon.png";
import OrangeCalendarIcon from "../assets/icons/OrangeCalendarIcon.png";
import awardIcon from "../assets/icons/awardIcon.png";
import GoldenStar from "../assets/icons/GoldenStar.png";
import CerificateLast from "../assets/icons/tabler_certificate.png";
import DownloadIDB from "../assets/icons/DownloadIDB.png";

export default function Interndashboard() {
  const tasksData = [
    {
      id: 1,
      title: "User Flow Design",
      dueDate: "May 30, 2026",
      status: "Completed",
    },
    {
      id: 2,
      title: "Wireframe Creation",
      dueDate: "Jun 30, 2026",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Prototype Design",
      dueDate: "Jun 30, 2026",
      status: "Pending",
    },
    {
      id: 4,
      title: "Usability Testing",
      dueDate: "Jun 30, 2026",
      status: "Not Started",
    },
  ];

  // Assigned Mentor Data {Mock data}
  const mentor = {
    name: "Priya Mehta",
    role: "Senior UI/UX Designer",
    company: "Tech Nova Solutions",
    avatarUrl: "",
  };

  //Application Status {Mock data}
  const steps = [
    {
      label: "Application Submitted",
      date: "May 20, 2026",
      status: "completed",
    },
    {
      label: "Application Reviewed",
      date: "May 22, 2026",
      status: "completed",
    },
    {
      label: "Shortlisted",
      date: "May 25, 2026",
      status: "active",
    },
    {
      label: "Offer Accepted",
      date: "May 28, 2026",
      status: "active",
    },
    {
      label: "Onboarding",
      date: "Jun 20, 2026",
      status: "upcoming",
    },
  ];

  const reports = [
    {
      id: 1,
      title: "Week 1 Report",
      date: "May 17, 2025",
      status: "Submitted",
      downloadable: true,
    },
    {
      id: 2,
      title: "Week 2 Report",
      date: "May 24, 2025",
      status: "Submitted",
      downloadable: true,
    },
    {
      id: 3,
      title: "Week 3 Report",
      date: "May 31, 2025",
      status: "Pending",
      downloadable: true,
    },
    {
      id: 4,
      title: "Week 4 Report",
      date: "",
      status: "Upcoming",
      downloadable: false,
    },
  ];

  const taskIcons = {
    Completed: completedIcon,
    "In Progress": inProgressIcon,
    Pending: pendingIcon,
    "Not Started": notStartedIcon,
  };

  const getTaskIcon = (status) => taskIcons[status] || notStartedIcon;

  const renderStatusBadge = (status) => {
    switch (status) {
      case "Submitted":
        return (
          <span className="IDB-status-bg IDB-status-submitted">Submitted</span>
        );

      case "Pending":
        return (
          <span className="IDB-status-bg IDB-status-pending ">Pending</span>
        );

      case "Upcoming":
        return (
          <span className="IDB-status-bg IDB-status-upcoming">Upcoming</span>
        );

      default:
        return null;
    }
  };

  const notifications = [
    {
      id: 1,
      text: "Your weekly report has been received.",
      time: "2h ago",
      icon: reportIcon,
    },
    {
      id: 2,
      text: "New task assigned: Prototype Design",
      time: "1d ago",
      icon: PurpleTaskIcon,
    },
    {
      id: 3,
      text: "Reminder: Submit your report by Jun 02, 2026",
      time: "2d ago",
      icon: OrangeCalendarIcon,
    },
    {
      id: 4,
      text: "Great job! You received feedback.",
      time: "3d ago",
      icon: awardIcon,
    },
  ];

  const statusIcons = {
    completed: checkedIcon,
    active: activeIcon,
    pending: greyDownloadIcon,
    upcoming: upcomingIcon,
  };

  const ratingValue = 4.5;
  const maxRating = 5;

  const chartData = [
    { id: 1, name: "Filled", value: ratingValue },
    { id: 2, name: "Remaining", value: maxRating - ratingValue },
  ];

  const chartColors = ["#0066FF", "#E5E7EB"];

  const IDBratings = [
    { id: 1, label: "Quality of Work", score: "4.6" },
    { id: 2, label: "Timelines", score: "4.3" },
    { id: 3, label: "Communication", score: "4.4" },
    { id: 4, label: "Initiative", score: "4.7" },
    { id: 5, label: "Learning Ability", score: "4.5" },
  ];

  return (
    <div className="Content-IDB">
      <div className="Content-Sidebar-IDB">
        <div className="head1-Sidebar-IDB">
          <h2>InternMS</h2>
          <p>Intenship Management system</p>
        </div>
        <div className="head2-Sidebar-IDB">
          <img src={HomeIDB} alt="Homeadmin" />
          <h4>Dashboard</h4>
        </div>
        <div className="Header-sidbar-IDB">
          <div className="header-sidebar-IDB">
            <img
              src={Myinternship}
              alt="internshipimage"
              style={{ width: "21px", height: "21px", marginLeft: "20px" }}
            />
            <span>My Internships</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Applicationstatus}
              alt="Applicationstatus"
              style={{ width: "16.9px", height: "21.54px", marginLeft: "20px" }}
            />
            <span>Application Status</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Assignedmentor}
              alt="Assignedmentor"
              style={{ width: "18px", height: "18px", marginLeft: "20px" }}
            />
            <span>Assigned Mentor</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Progresstracking}
              alt="Progresstracking"
              style={{ width: "24px", height: "24px", marginLeft: "15px" }}
            />
            <span>Progress Tracking</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Weeklyreports}
              alt="Weeklyreports"
              style={{
                width: "17.52px",
                height: "21.60px",
                marginLeft: "20px",
              }}
            />
            <span>Weekly Reports</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={TasksIDB}
              alt="TaskIDB"
              style={{ width: "24px", height: "24px", marginLeft: "15px" }}
            />
            <span>Tasks & Deliverables</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Notificationsidb}
              alt="Notification"
              style={{ width: "16px", height: "20px", marginLeft: "20px" }}
            />
            <span>Notifications</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Certificateidb}
              alt="Certificate"
              style={{ width: "24px", height: "24px", marginLeft: "15px" }}
            />
            <span>Certificates</span>
          </div>
          <div className="header-sidebar-IDB">
            <img
              src={Performanceidb}
              alt="Performance"
              style={{ width: "24px", height: "24px", marginLeft: "15px" }}
            />
            <span>Performance Metrics</span>
          </div>
        </div>
      </div>

      <div className="Main-IDB">
        {/* Navbar */}
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

        {/* Main Content */}
        <div className="Section-IDB">
          <div className="header-Sectionone-IDB">
            <div className="mainhead-IDB">
              <h2>Welcome Back, Rahul!</h2>
              <img src={WavinghandIDB} alt="wavinghand" />
            </div>
            <p>Here's an overview of your Intenship Journey.</p>
          </div>
          <div className="header2-Sectionone-IDB">
            {/* Current Internship */}
            <div className="card-IDB-Curr internship-card-IDB">
              <div className="icon-IDB-Curr blue">
                <img src={Currentinternships} alt="" />
              </div>
              <div className="card-Currcontent-IDB">
                <p className="card-Currtitle-IDB">Current Internship</p>
                <h3>Tech Nova Solutions</h3>
                <span>UI/UX Design Intern</span>
                <button className="details-Currbtn-IDB">
                  View Details{" "}
                  <img
                    src={IDBsectiononearrow}
                    alt="arrow"
                    style={{ width: "11.25px", height: "8.75px" }}
                  />
                </button>
              </div>
            </div>

            {/* Internship Duration */}
            <div className="Cardbox-IDB-Dur">
              <div className="card-IDB-Dur">
                <div className="icon-IDB-Dur green">
                  <img
                    src={InternshipduratoinIDB}
                    alt=""
                    style={{ width: "26px", height: "26px" }}
                  />
                </div>
                <div className="card-Durcontent-IDB">
                  <p className="card-Durtitle-IDB">Internship Duration</p>
                  <h2>8 Weeks</h2>
                  <span>May 10, 2026 - Jul 05, 2026</span>
                </div>
              </div>
              <div className="progress-bar-DurIDB">
                <div className="progress-fill-DurIDB duration-fill-DurIDB"></div>
              </div>
              <small>Week 3 of 8</small>
            </div>

            {/* Overall Progress */}
            <div className="Cardbox-IDB-Overall">
              <div className="card-IDB-Overall">
                <div className="icon-IDB-Overall purple">
                  <img
                    src={Overallprogress}
                    alt=""
                    style={{ width: "60px", height: "60px", color: "#623FCE" }}
                  />
                </div>
                <div className="card-Overall-IDB">
                  <p>Overall Progress</p>
                  <h2>42%</h2>
                  <span>Keep Going! You're doing great.</span>
                </div>
              </div>
              <div className="progress-bar-OverallIDB">
                <div className="progress-fill-OverallIDB duration-fill-OverallIDB"></div>
              </div>
            </div>

            {/* Reports Submitted */}
            <div className="Cardbox-IDB-Report">
              <div className="card-IDB-Report">
                <div className="icon-IDB-Report orange">
                  <img
                    src={Reportsubmitted}
                    alt=""
                    style={{ width: "20px", height: "25px" }}
                  />
                </div>
                <div className="card-Report-IDB">
                  <p>Reports Submitted</p>
                  <div className="Report-data-IDB">
                    <h2>
                      1 <span>/ 8</span>
                    </h2>
                  </div>
                  <span>Keep Going! You're doing great.</span>
                </div>
              </div>
              <div className="progress-bar-ReportIDB">
                <div className="progress-fill-ReportIDB duration-fill-ReportIDB"></div>
              </div>
            </div>
          </div>

          {/* Task & Deliverables */}
          <div className="idb-dashboard-grid ">
            <div className="idb-task-card">
              <div className="idb-td-header">
                <h2 className="td-left-tittle">Task & Deliverables</h2>
                <button className="td-view-all-btn">View all</button>
              </div>
              <div className="idb-td-list">
                {tasksData.slice(0, 4).map((task) => (
                  <div key={task.id} className="idb-td-item ">
                    <div className="idb-td-left">
                      <div className="idb-td-icon-container">
                        <img
                          src={getTaskIcon(task.status)}
                          alt={task.status}
                          className={`idb-td-icon  ${task.status
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                        />
                      </div>
                      <span className="idb-td-title">{task.title}</span>
                    </div>
                    <div className="idb-td-date ">Due: {task.dueDate}</div>
                    <div className="idb-td-right">
                      <span
                        className={`idb-td-status ${task.status
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Details */}
            <div className="IDB-Assigned-Mentor-card">
              <div className="IDB-assigned-mentor-header">
                <h2>Assigned Mentor</h2>
                <button type="button" className="idb-view-profile">
                  View Profile
                </button>
              </div>
              <div className="idb-mentor-profile ">
                <div>
                  {mentor.avatarUrl ? (
                    <img src={mentor.avatarUrl} alt={mentor.name} />
                  ) : (
                    <div className="IDB-avatar-placeholder"></div>
                  )}
                </div>
                <div className="IDB-mentor-details ">
                  <h3 className="Idb-mentor-name">{mentor.name}</h3>
                  <p className="Idb-mentor-role">{mentor.role}</p>
                  <p className="Idb-mentor-company">{mentor.company}</p>
                </div>
              </div>
              <div className="mentor-IDB-button-Conatiner">
                <button className="idb-mentor-btn-1">
                  <img src={messageIcon} alt="Message" className="btn-icon-1" />
                  <span className="mentor-msg-btn">Message</span>
                </button>

                <button className="idb-mentor-btn-2">
                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    className="btn-icon-2"
                  />
                  <span className="mentor-msg-btn">Schedule Meeting</span>
                </button>
              </div>
            </div>

            {/* Application Status */}
            <div className="appliction-status-card">
              <div className="AS-card-header">
                <h2 className="AS-card-title">Application Status</h2>
                <button className="view-all-btn">View all</button>
              </div>

              <div className="status-tracker-container-AS ">
                <div className="AS-status-tracking-steps">
                  {steps.map((step, index) => (
                    <div className="AS-status-tracking-item" key={index}>
                      <div className="status-indicator">
                        <img
                          src={statusIcons[step.status]}
                          alt={step.status}
                          className="idb-status-icon"
                        />
                      </div>
                      <div className="IDB-step-content">
                        <p className="IDB-step-label">{step.label}</p>
                        <p className="IDB-step-date">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Reports*/}
            <section className="weekly-reports-card">
              <div className="weekly-reports-header">
                <h2>Weekly Reports</h2>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="reports-details-primary">
                {reports.slice(0, 4).map((report) => (
                  <div className="idb-report-container " key={report.id}>
                    <h3 className="idb-report-title">{report.title}</h3>
                    <p className="idb-report-date">{report.date || "-"}</p>
                    {renderStatusBadge(report.status)}
                    {report.status === "Pending" ? (
                      <button className="IDB-download-btn">
                        <img
                          src={greyDownloadIcon}
                          alt="Pending"
                          className="IDB-download-icon"
                        />
                      </button>
                    ) : report.downloadable ? (
                      <button className="IDB-download-btn">
                        <img
                          src={DownloadArrow}
                          alt="Download Report"
                          className="IDB-download-icon"
                        />
                      </button>
                    ) : (
                      <div className="download-space"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Notifications*/}
            <div className="idb-notification-card">
              <div className="idb-notification-header">
                <h2>Notifications</h2>
                <button>View all</button>
              </div>
              <div className="idb-notification-list">
                {notifications.slice(0, 4).map((notification) => (
                  <div className="notification-item-IDB" key={notification.id}>
                    <div className="notification-content-IDB">
                      <div className="notification-icon-IDB">
                        <img
                          src={notification.icon}
                          alt="notification icon"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <p>{notification.text}</p>
                    </div>
                    <span className="IDB-notification-time">
                      {notification.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Rating Dashboard */}
            <div className="performance-dashboard">
              <div className="performance-header">
                <h3>Notifications</h3>
                <button type="button" className="view-details-btn">
                  View details
                </button>
              </div>

              <div className="performance-content-IDB">
                <div className="IDB-chart-section">
                  <ResponsiveContainer width={131} height={133}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={42}
                        outerRadius={60}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={1.5}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={entry.id} fill={chartColors[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="IDB-chart-center">
                    <span className="rating-value-IDB">
                      {ratingValue.toFixed(1)}
                    </span>
                    <span className="rating-label-IDB">Overall Rating</span>
                  </div>
                </div>

                <div className="IDB-rating-list">
                  {IDBratings.map((item) => (
                    <div className="IDB-rating-item" key={item.id}>
                      <span className="IDB-rating-label">{item.label}</span>
                      <div className="IDB-rating-value">
                        <span>{item.score}</span>
                        <img
                          src={GoldenStar}
                          alt="Rating star"
                          className="IDB-rating-star"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="Content-Cer-IDB">
          <div className="Certi-IDB">
            <img
              src={CerificateLast}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <h2>Certificates</h2>
          </div>
          <div className="Fund-IDB">
            <h3>UI/UX Design Fundamentals</h3>
            <p>Issued on May 20,2025</p>
          </div>
          <div className="Down-IDB">
            <img
              src={DownloadIDB}
              alt=""
              style={{ width: "13.33px", height: "13.33px" }}
            />
            <h3>View Certificate</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
