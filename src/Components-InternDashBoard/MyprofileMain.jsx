import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../Components-InternDashBoard/MyprofileMain.css";
import fullName from "../assets/icons/Full-Name.png";
import Email from "../assets/icons/Email-Address.png";
import DOB from "../assets/icons/Date-of-Birth.png";
import Department from "../assets/icons/Department.png";
import University from "../assets/icons/University.png";
import InternshipID from "../assets/icons/Internship-ID.png";
import PhoneNumber from "../assets/icons/Phone-Number.png";
import Gender from "../assets/icons/Gender.png";
import Course from "../assets/icons/Course.png";
import EndDate from "../assets/icons/End-Date.png";
import StartDate from "../assets/icons/Start-Date.png";
import AssignedMentor from "../assets/icons/Assigned-Mentor.png";
import EmergencyContact from "../assets/icons/Emergency-Contact.png";
import Address from "../assets/icons/Address.png";
import LanguagesKnown from "../assets/icons/Languages-Known.png";
import ReceivedCertificate from "../assets/icons/Received-Certificate.png";
import SubmittedTask from "../assets/icons/Submitted-Task.png";
import CompletedAssessment from "../assets/icons/Completed-Assessment.png";

export const MyprofileMain = () => {
  const profileInfoMockData = {
    fullName: "Akshara",
    internshipId: "INT-2026-0042",
    email: "akshara123@gmail.com",
    phoneNumber: "+91 9976385019",
    dateOfBirth: "03.05.2001",
    gender: "Female",
    department: "Product Development",
    designation: "Software Intern",
    university: "Hitech Technological University",
    course: "B.Tech Computer Science",
    startDate: "May 01, 2026",
    endDate: "Oct 31, 2026",
    assignedMentor: "Harsha",
    address: "Pune, Maharashtra, India",
    emergencyContact: "+91 90000 00000",
    languagesKnown: "English, Hindi",
  };

  // const activities = [
  //   {
  //     title: "Submitted Task",
  //     description: "API Documentation Refactor",
  //     time: "2 hours ago",
  //     icon: ReceivedCertificate,
  //     type: "submitted",
  //   },
  //   {
  //     title: "Completed Assessment",
  //     description: "Frontend Frameworks Masterclass",
  //     time: "Yesterday",
  //     icon: SubmittedTask,
  //     type: "assessment",
  //   },
  //   {
  //     title: "Received Certificate",
  //     description: "Agile Essentials Foundation",
  //     time: "May 24, 2026",
  //     icon: CompletedAssessment,
  //     type: "certificate",
  //   },
  // ];

  return (
    <div className="profile-main-container">
      <div className="personalInfo-container">
        <div className="personal-info-Header">
          <h1>Personal Info</h1>
        </div>
        <div className="personl-info-details">
          <div className="profile-field">
            <div className="icon-container">
              <img src={fullName} alt="Profile" className="profile-image" />
            </div>
            <div className="profile-details">
              <p>Full Name</p>
              <span>{profileInfoMockData.fullName}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={InternshipID}
                alt="Internship-ID "
                className="Internship-ID-icon"
              />
            </div>
            <div className="profile-details">
              <p>Internship ID</p>
              <span>{profileInfoMockData.internshipId}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={Email} alt="mail" className="email-address-icon" />
            </div>

            <div className="profile-details">
              <p>Email Address</p>
              <span>{profileInfoMockData.email}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={PhoneNumber}
                alt="Phone Number"
                className="Phone-icon"
              />
            </div>

            <div className="profile-details">
              <p>Phone Number</p>
              <span>{profileInfoMockData.phoneNumber}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={DOB} alt="Date of Birth" className="DOB-icon" />
            </div>

            <div className="profile-details">
              <p>Date of Birth</p>
              <span>{profileInfoMockData.dateOfBirth}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={Gender} alt="Gender" className="Gender-icon" />
            </div>

            <div className="profile-details">
              <p>Gender</p>
              <span>{profileInfoMockData.gender}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={Department}
                alt="Department"
                className="Department-icon"
              />
            </div>

            <div className="profile-details">
              <p>Department</p>
              <span>{profileInfoMockData.department}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={fullName} alt="Profile" className="profile-image" />
            </div>
            <div className="profile-details">
              <p>Designation</p>
              <span>{profileInfoMockData.designation}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={University}
                alt="University"
                className="University-icon"
              />
            </div>

            <div className="profile-details">
              <p>University</p>
              <span>{profileInfoMockData.university}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={Course} alt="Course" className="Course-icon" />
            </div>

            <div className="profile-details">
              <p>Course</p>
              <span>{profileInfoMockData.course}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              {" "}
              <img
                src={StartDate}
                alt="Start Date"
                className="Start-Date-icon"
              />
            </div>

            <div className="profile-details">
              <p>Start Date</p>
              <span>{profileInfoMockData.startDate}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img src={EndDate} alt="End Date" className="End-Date-icon" />
            </div>

            <div className="profile-details">
              <p>End Date</p>
              <span>{profileInfoMockData.endDate}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={AssignedMentor}
                alt="Assigned Mentor"
                className="Assigned-Mentor-icon"
              />
            </div>

            <div className="profile-details">
              <p>Assigned Mentor</p>
              <span>{profileInfoMockData.assignedMentor}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              {" "}
              <img src={Address} alt="Address " className="Address-icon" />
            </div>

            <div className="profile-details">
              <p>Address</p>
              <span>{profileInfoMockData.address}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={EmergencyContact}
                alt="Emergency Contact"
                className="Emergency-Contact-icon"
              />
            </div>

            <div className="profile-details">
              <p>Emergency Contact</p>
              <span>{profileInfoMockData.emergencyContact}</span>
            </div>
          </div>

          <div className="profile-field">
            <div className="icon-container">
              <img
                src={LanguagesKnown}
                alt="Languages Known"
                className="Languages-Known-icon"
              />
            </div>

            <div className="profile-details">
              <p>Languages Known</p>
              <span>{profileInfoMockData.languagesKnown}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="recent-activity">
        <div className="recent-activity-header">
          <h2>Recent Activity</h2>

          <Button className="view-all-btn">View All</Button>
        </div>

        <Stepper
          orientation="vertical"
          activeStep={-1}
          className="activity-stepper"
        >
          {activities.map((activity, index) => (
            <Step key={index} active>
              <StepLabel
                StepIconComponent={() => (
                  <div className={`activity-icon ${activity.type}`}>
                    {activity.icon}
                  </div>
                )}
              >
                <Typography className="activity-title">
                  {activity.title}
                </Typography>
              </StepLabel>

              <StepContent>
                <Typography className="activity-description">
                  {activity.description}
                </Typography>

                <Typography className="activity-time">
                  {activity.time}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div> */}

      <footer className="myProfile-footer">
        <span>© 2026 InternFlow Management System</span>

        <div className="myProfile-footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/help-center">Help Center</Link>
        </div>
      </footer>
    </div>
  );
};
