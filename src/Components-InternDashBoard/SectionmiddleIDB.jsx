import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../Components-InternDashBoard/SectionmiddleIDB.css";
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

const SectionmiddleIDB = () => {
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

  const getTaskIcon = (status) => {
    switch (status) {
      case "Completed":
        return completedIcon;
      case "In Progress":
        return inProgressIcon;
      case "Pending":
        return pendingIcon;
      case "Not Started":
        return notStartedIcon;
      default:
        return notStartedIcon;
    }
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case "Submitted":
        return <span className="status-badge status-submitted">Submitted</span>;

      case "Pending":
        return <span className="status-badge status-pending">Pending</span>;

      case "Upcoming":
        return <span className="status-badge status-upcoming">Upcoming</span>;

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

  const ratingValue = 4.5;
  const maxRating = 5;

  const chartData = [
    { name: "Filled", value: ratingValue },
    { name: "Remaining", value: maxRating - ratingValue },
  ];

  const COLORS = ["#0066FF", "#E5E7EB"];

  const metrics = [
    { label: "Quality of Work", score: "4.6" },
    { label: "Timelines", score: "4.3" },
    { label: "Communication", score: "4.4" },
    { label: "Initiative", score: "4.7" },
    { label: "Learning Ability", score: "4.5" },
  ];

  return (
    <div className="dashboard-grid">
      <div className="task-card">
        <div className="task-header">
          <h2 className="td-left-tittle">Task & Deliverables</h2>
          <button className="td-view-all-btn">View all</button>
        </div>

        <div className="task-list">
          {tasksData.slice(0, 4).map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-left">
                <div className="task-icon-container">
                  <img
                    src={getTaskIcon(task.status)}
                    alt={task.status}
                    className={`task-icon ${task.status
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  />
                </div>

                <span className="task-title">{task.title}</span>
              </div>
              <div className="task-date">Due: {task.dueDate}</div>
              <div className="task-right">
                <span
                  className={`task-status ${task.status
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
      <div className="Assigned-Mentor-card">
        <div className="assigned-mentor-header">
          <h2>Assigned Mentor</h2>
          <a href="" className="view-profile">
            View Profile
          </a>
        </div>
        <div className="mentor-profile">
          <div className="mentor-avatar">
            {mentor.avatarUrl ? (
              <img src={mentor.avatarUrl} alt={mentor.name} />
            ) : (
              <div className="avatar-placeholder"></div>
            )}
          </div>

          <div className="mentor-details">
            <h3 className="mentor-name">{mentor.name}</h3>
            <p className="mentor-role">{mentor.role}</p>
            <p className="mentor-company">{mentor.company}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mentor-actions">
          <button className="mentor-btn-1">
            <img src={messageIcon} alt="Message" className="btn-icon-1" />
            <span className="mentor-msg-btn">Message</span>
          </button>

          <button className="mentor-btn-2">
            <img src={calendarIcon} alt="Calendar" className="btn-icon-2" />
            <span className="mentor-msg-btn">Schedule Meeting</span>
          </button>
        </div>
      </div>

      {/* Application Status */}
      <div className="appliction-status-card">
        <div className="card-header">
          <h2 className="card-title">Application Status</h2>
          <button className="view-all-btn">View all</button>
        </div>

        <div className="timeline-container">
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="status-indicator">
                  <img
                    src={
                      step.status === "completed"
                        ? checkedIcon
                        : step.status === "active"
                          ? activeIcon
                          : step.status === "pending"
                            ? greyDownloadIcon
                            : upcomingIcon
                    }
                    alt={step.status}
                    className="status-icon"
                  />
                </div>

                <div className="step-content">
                  <p className="step-label">{step.label}</p>
                  <p className="step-date">{step.date}</p>
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
            <div className="report-card" key={report.id}>
              <h3 className="report-title">{report.title}</h3>
              <p className="report-date">{report.date || "-"}</p>
              {renderStatusBadge(report.status)}
              {report.status === "Pending" ? (
                <button className="download-btn">
                  <img
                    src={greyDownloadIcon}
                    alt="Pending"
                    className="download-icon"
                  />
                </button>
              ) : report.downloadable ? (
                <button className="download-btn">
                  <img
                    src={DownloadArrow}
                    alt="Download"
                    className="download-icon"
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
      <div className="notification-panel-card">
        <div className="notification-header">
          <h2>Notifications</h2>
          <button>View all</button>
        </div>

        <div className="notification-list">
          {notifications.slice(0, 4).map((notification) => (
            <div className="notification-item" key={notification.id}>
              <div className="notification-content">
                <div className="notification-icon">
                  <img
                    src={notification.icon}
                    alt="notification icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>

                <p>{notification.text}</p>
              </div>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Dashboard */}
      <div className="performance-dashboard">
        <div className="performance-header">
          <h3>Notifications</h3>
          <button className="view-details-btn">View details</button>
        </div>

        <div className="performance-content">
          <div className="chart-section">
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
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-center">
              <span className="rating-value">{ratingValue.toFixed(1)}</span>
              <span className="rating-label">Overall Rating</span>
            </div>
          </div>

          <div className="metrics-section">
            {metrics.map((item, index) => (
              <div className="metric-row" key={index}>
                <span className="metric-label">{item.label}</span>
                <div className="metric-score">
                  <span>{item.score}</span>
                  <img src={GoldenStar} alt="Star" className="star-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionmiddleIDB;
