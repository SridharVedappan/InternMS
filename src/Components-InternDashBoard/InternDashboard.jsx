import React from "react";
import "../Components-InternDashBoard/InternDashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Currentinternships from "../assets/intern/Currentinternship.png";
import rightArrow from "../assets/intern/right-arrow.png";
import InternshipDuration from "../assets/intern/IntenshipdurationIDB.png";
import Overallprogress from "../assets/intern/Overallprogress.png";
import Reportsubmitted from "../assets/intern/Reportsubmitted.png";
import WavinghandIDB from "../assets/intern/WavinghandIDB.png";
import completedIcon from "../assets/intern/completed.png";
import pendingIcon from "../assets/intern/pending.png";
import inProgressIcon from "../assets/intern/in-progress.png";
import notStartedIcon from "../assets/intern/not-started.png";
import messageIcon from "../assets/intern/message.png";
import calendarIcon from "../assets/intern/calendar.png";
import checkedIcon from "../assets/intern/Completed-icon.png";
import activeIcon from "../assets/intern/active-Icon.png";
import upcomingIcon from "../assets/intern/upcoming-Icon.png";
import greyDownloadIcon from "../assets/intern/grey-download.png";
import reportIcon from "../assets/intern/reportIcon.png";
import PurpleTaskIcon from "../assets/intern/PurpleTaskIcon.png";
import OrangeCalendarIcon from "../assets/intern/OrangeCalendarIcon.png";
import awardIcon from "../assets/intern/award-Icon.png";
import GoldenStar from "../assets/intern/GoldenStar.png";
import CerificateLast from "../assets/intern/tabler-certificate.png";
import Download from "../assets/intern/Download-icon.png";

export const InternDashboard = () => {
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

  // used for application status workflow order
  const workflowOrder = [
    "Application Submitted",
    "Application Reviewed",
    "Shortlisted",
    "Offer Accepted",
    "Onboarding",
  ];

  // Keep only one step for each label
  const uniqueSteps = Array.from(
    new Map(steps.map((step) => [step.label, step])).values(),
  );

  // Keep steps in the correct workflow order
  const orderedSteps = [...uniqueSteps]
    .sort(
      (a, b) => workflowOrder.indexOf(a.label) - workflowOrder.indexOf(b.label),
    )
    .slice(0, 5);

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

  const renderStatus = (status) => {
    switch (status) {
      case "Submitted":
        return <span className="status-submitted">Submitted</span>;

      case "Pending":
        return <span className="status-pending ">Pending</span>;

      case "Upcoming":
        return <span className="status-upcoming">Upcoming</span>;

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
    <div>
      <div className="Section-IDB">
        <div className="header-Section">
          <div className="main-head">
            <h2>Welcome Back, Rahul!</h2>
            <img src={WavinghandIDB} alt="wavinghand" />
          </div>
          <p>Here's an overview of your Intenship Journey.</p>
        </div>

        <div className="header2-Section">
          {/* Current Internship */}
          <div className="card-Curr internship-card">
            <div className="icon-Curr blue">
              <img src={Currentinternships} alt="Current Internships" />
            </div>
            <div className="card-Curr-content">
              <p className="card-Curr-title">Current Internship</p>
              <h3>Tech Nova Solutions</h3>
              <span>UI/UX Design Intern</span>
              <button className="details-Curr-btn">
                View Details
                <img src={rightArrow} alt="arrow" style={{ width: "11.25px", height: "8.75px" }}/>
              </button>
            </div>
          </div>

          {/* Internship Duration */}
          <div className="Cardbox-Dur">
            <div className="card-Dur">
              <div className="icon-Dur green">
                <img src={InternshipDuration} alt="Internship Duration" style={{ width: "26px", height: "26px" }}/>
              </div>
              <div className="card-Dur-content">
                <p className="card-Dur-title">Internship Duration</p>
                <h2>8 Weeks</h2>
                <span>May 10, 2026 - Jul 05, 2026</span>
              </div>
            </div>
            <div className="progress-bar-Dur">
              <div className="progress-fill-Dur duration-fill-Dur"></div>
            </div>
            <small>Week 3 of 8</small>
          </div>

          {/* Overall Progress */}
          <div className="Cardbox-Overall">
            <div className="card-Overall-container">
              <div className="icon-Overall purple">
                <img src={Overallprogress} alt="Overall progress" style={{width: "60px", height: "60px", color: "#623FCE"}}/>
              </div>
              <div className="card-Overall">
                <p>Overall Progress</p>
                <h2>42%</h2>
                <span>Keep Going! You're doing great.</span>
              </div>
            </div>
            <div className="progress-bar-Overall">
              <div className="progress-fill-Overall duration-fill-Overall"></div>
            </div>
          </div>

          {/* Reports Submitted */}
          <div className="Report-card">
            <div className="Report-box">
              <div className="file-container orange">
                <img src={Reportsubmitted} alt="Report submitted" style={{ width: "20px", height: "25px" }}/>
              </div>
              <div className="card-Report">
                <p>Reports Submitted</p>
                <div className="Report-data">
                  <h2>1 <span>/ 8</span></h2>
                </div>
                <span>Keep Going! You're doing great.</span>
              </div>
            </div>
            <div className="progress-bar-Report">
              <div className="progress-fill-Report duration-fill-Report"></div>
            </div>
          </div>
        </div>

        {/* Task & Deliverables */}
        <div className="dashboard-grid ">
          <div className="task-card">
            <div className="task-header ">
              <h2 className="task-tittle">Task & Deliverables</h2>
            </div>

            <div className="task-list">
              {tasksData.slice(0, 4).map((task) => (
                <div key={task.id} className="task-item">
                  <div className="leftside-task-container">
                    <div className={`icon-holder ${task.status.trim().replace(/\s+/g, "-").toLowerCase()}`}>
                      <img src={getTaskIcon(task.status)} alt={task.status} className={`tasks-icon ${task.status.trim().replace(/\s+/g, "-").toLowerCase()}`}/>
                    </div>
                    <span className="task-title">{task.title}</span>
                  </div>
                  <div className="task-date">Due: {task.dueDate}</div>
                  <div className="task-right">
                    <span className={`task-status ${task.status.trim().replace(/\s+/g, "-").toLowerCase()}`}>{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Details */}
          <div className="Mentor-card">
            <div className="mentor-header">
              <h2>Assigned Mentor</h2>
            </div>
            <div className="mentor-profile ">
              <div>
                {mentor.avatarUrl ? (
                  <img src={mentor.avatarUrl} alt={mentor.name} />
                ) : (
                  <div className="profile-placeholder"></div>
                )}
              </div>
              <div className="mentor-details ">
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
                <p className="mentor-company">{mentor.company}</p>
              </div>
            </div>

            <div className="Buttons-Conatiner">
              <button className="message-btn">
                <img src={messageIcon} alt="Message" className="msg-icon" />
                <span className="blue-text">Message</span>
              </button>

              <button className="schedule-btn">
                <img src={calendarIcon} alt="Calendar" className="calendar-Icon"/>
                <span className="blue-text">Schedule Meeting</span>
              </button>
            </div>
          </div>

          {/* Application Status */}
          <div className="appliction-status-card">
            <div className="AS-header">
              <h2 className="AS-title">Application Status</h2>
            </div>

            <div className="tracker-container">
              <div className="progress-steps">
                {orderedSteps.map((step, index) => (
                  <div className={`progress-item ${step.status}`} key={index}>
                    <div className="status-icon-wrapper">
                      <img src={statusIcons[step.status]} alt={step.status} className="idb-status-icon"/>
                    </div>

                    <div className="progress-content">
                      <p className="progress-label">{step.label}</p>
                      <p className="progress-date">{step.date}</p>
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
            </div>
            <div className="reports-details-primary">
              {reports.slice(0, 4).map((report) => (
                <div className="report-container" key={report.id}>
                  <h3 className="report-title">{report.title}</h3>
                  <p className="report-date">{report.date || "-"}</p>
                  {renderStatus(report.status)}
                  {report.status === "Pending" ? (
                    <button className="download-btn">
                      <img src={greyDownloadIcon} alt="Pending" className="report-download"/>
                    </button>
                  ) : report.downloadable ? (
                    <button className="download-btn">
                      <img src={Download} alt="Download Report" className="report-download "/>
                    </button>
                  ) : (
                    <div className="download-space"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Notifications*/}
          <div className="notification-card">
            <div className="notification-header">
              <h2>Notifications</h2>
            </div>
            <div className="notification-list-wrapper">
              {notifications.slice(0, 4).map((notification) => (
                <div className="notification-item" key={notification.id}>
                  <div className="notification-leftSide-content">
                    <div className="notification-icon-wrapper">
                      <img src={notification.icon} alt="notification icon" style={{ width: "30px", height: "30px" }}/>
                    </div>
                    <p>{notification.text}</p>
                  </div>
                  <span className="Notification-Time">{notification.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Rating Dashboard */}
          <div className="performance-dashboard">
            <div className="performance-header">
              <h3>Ratings</h3>
            </div>

            <div className="performance-container">
              <div className="chart-wrapper">
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
                <div className="display-rating-wrapper">
                  <span className="rating-score">{ratingValue.toFixed(1)}</span>
                  <span className="Overall-Rating">Overall Rating</span>
                </div>
              </div>

              <div className="rating-list">
                {IDBratings.map((item) => (
                  <div className="rating-item" key={item.id}>
                    <span className="rating-label">{item.label}</span>
                    <div className="rating-score">
                      <span>{item.score}</span>
                      <img src={GoldenStar} alt="Golden Rating star" className="Golden-star"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certificate Section */}
      <div className="certificate-card">
        <div className="certificate-header">
          <img src={CerificateLast} alt="Certificate" style={{ width: "40px", height: "40px" }}/>
          <h2>Certificates</h2>
        </div>
        <div className="certificate-details">
          <h3>UI/UX Design Fundamentals</h3>
          <p>Issued on May 20,2025</p>
        </div>
        <div className="Download-certificate">
          <img src={Download} alt="Download certificate" style={{ width: "13.33px", height: "13.33px" }}/>
          <h3>View Certificate</h3>
        </div>
      </div>
    </div>
  );
};
