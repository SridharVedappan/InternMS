import React from "react";
import { Link } from "react-router-dom";
import "./InternMyprofile.css";
import Editprofileintern from "../assets/intern/Editprofileintern.png";
import fullName from "../assets/intern/Fullnameintern.png";
import Email from "../assets/intern/Gmailprofileintern.png";
import DOB from "../assets/intern/DOBprofileintern.png";
import Department from "../assets/intern/Departmentprofileintern.png";
import InternshipID from "../assets/intern/IDprofileintern.png";
import PhoneNumber from "../assets/intern/Phoneprofileintern.png";
import Gender from "../assets/intern/Genderprofilrintern.png";
import Designation from "../assets/intern/Designationintern.png";
import Course from "../assets/intern/Educationprofileintern.png";
import Datemyprofile from "../assets/intern/Datemyprofileintern.png";
import Starmyprofileintern from "../assets/intern/Starmyprofileintern.png";
import pdf from "../assets/intern/pdf.png";
import jpg from "../assets/intern/jpg.png";
import doc from "../assets/intern/doc.png";
import downloadFile from "../assets/intern/download-file-icon.png";

const ProfileData = {
  initials: "AU",
  name: "Akshara",
  role: "INTERN",
  status: "ACTIVE",
};

const PersonalInfoData = [
  {
    id: 1,
    label: "FULL NAME",
    value: "Akshara",
    icon: fullName,
  },
  {
    id: 2,
    label: "INTERN ID",
    value: "INT-2024-089",
    icon: InternshipID,
  },
  {
    id: 3,
    label: "EMAIL ADDRESS",
    value: "akshara@internflow.com",
    icon: Email,
  },
  {
    id: 4,
    label: "PHONE NUMBER",
    value: "+91 98765 12345",
    icon: PhoneNumber,
  },
  {
    id: 5,
    label: "DATE OF BIRTH",
    value: "May 22, 2002",
    icon: DOB,
  },
  {
    id: 6,
    label: "GENDER",
    value: "Female",
    icon: Gender,
  },
  {
    id: 7,
    label: "DEPARTMENT",
    value: "Engineering",
    icon: Department,
  },
  {
    id: 8,
    label: "DESIGNATION",
    value: "Software Intern",
    icon: Designation,
  },
];

const EducationData = {
  course: "Bachelor of Technology in Computer Science",
  university: "Indian Institute of Technology",
  startYear: "2021",
  endYear: "2025",
  status: "Expected",
  cgpa: "9.2",
  icon: Course,
};

const InternDocumentData = [
  {
    id: 1,
    name: "Resume_Updated_2024.pdf",
    size: "2.4MB",
    uploadedAt: "Uploaded 2 mos ago",
    type: "pdf",
  },
  {
    id: 2,
    name: "ID_Proof_Front.jpg",
    size: "850 KB",
    uploadedAt: "Uploaded 1 yr ago",
    type: "image",
  },
  {
    id: 3,
    name: "AWS_Certification.pdf",
    size: "1.1 MB",
    uploadedAt: "Uploaded 6 mos ago",
    type: "doc",
  },
];

const skillsData = {
  technicalSkills: [
    "System Administration",
    "Network Security",
    "Cloud Computing (AWS, Azure)",
    "Linux/Unix",
    "Database Management",
  ],

  softSkills: [
    "Leadership",
    "Problem Solving",
    "Communication",
    "Project Management",
  ],
};

const documentIcons = (type) => {
  switch (type?.toLowerCase()) {
    case "pdf":
      return <img src={pdf} alt="pdf" />;

    case "image":
    case "jpg":
    case "jpeg":
    case "png":
      return <img src={jpg} alt="jpg" />;

    case "doc":
      return <img src={doc} alt="doc" />;

    default:
      return null;
  }
};

export const InternMyprofile = () => {
  return (
    <div className="myProfile-page">
      <div className="Profile-content-Intern">
        <div className="Profile-Section-Intern">
          <div className="Profile-info-Intern">
            <h2>{ProfileData.initials}</h2>
          </div>

          <div className="Profile-details-Intern">
            <div className="Profile-name-row">
              <h2>{ProfileData.name}</h2>
              <span className="Profile-role-Intern">{ProfileData.role}</span>
              <span className="Profile-status-Intern">{ProfileData.status}</span>
            </div>
          </div>

          <div className="Profile-btn-Intern">
            <button className="Editprofile-btn-Intern">
              <img src={Editprofileintern} alt="Edit Profile" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="Profile-main-grid-Intern">
        <div className="Profile-left-column-Intern">
          <section className="Profile-card-Intern Personal-info-card-Intern">
            <div className="Profile-card-header-Intern">
              <h3>Personal Info</h3>
            </div>

            <div className="Personal-info-grid-Intern">
              {PersonalInfoData.map((item) => (
                <div className="Personal-info-item-Intern" key={item.id}>
                  <img src={item.icon} alt={item.label} />
                  <div className="Personal-info-text-Intern">
                    <span className="Personal-info-label-Intern">{item.label}</span>
                    <span className="Personal-info-value-Intern">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="Profile-card-Intern Documents-card-Intern">
            <div className="document-card-container">
              <div className="document-card-header">
                <h1>Documents</h1>
                <button>View All</button>
              </div>
              <div className="document-card-content">
                {InternDocumentData.slice(0, 4).map((doc) => (
                  <div key={doc.id} className="intern-document-card">
                    <div className="intern-files-icons">
                      <span>{documentIcons(doc.type)}</span>
                    </div>
                    <div className="intern-file-info">
                      <span className="intern-file-title" title={doc.name}>{doc.name}</span>
                      <span className="intern-file-meta">{doc.size} • {doc.uploadedAt}</span>
                    </div>
                    <div className="download-file-icon-containar">
                      <img src={downloadFile} alt="Download File" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="Profile-right-column-Intern">
          <section className="Profile-card-Intern Education-card-Intern">
            <div className="Profile-card-header-Intern">
              <h3>Education</h3>
            </div>

            <div className="Education-content-Intern">
              <div className="Education-icon-Intern">
                <img src={EducationData.icon} alt="Education" />
              </div>

              <div className="Education-details-Intern">
                <h4>{EducationData.course}</h4>
                <p>{EducationData.university}</p>
                <span><img src={Datemyprofile} alt="Date myprofile" />{EducationData.startYear} - {EducationData.endYear}({EducationData.status})</span>
                <span className="Education-cgpa-Intern"><img src={Starmyprofileintern} alt="Star intern" />CGPA: {EducationData.cgpa}</span>
              </div>
            </div>
          </section>

          <section className="Profile-card-Intern Skills-card-Intern">
            <div className="intern-skill-card">
              <div className="skill-card-header">
                <h1>Skills</h1>
              </div>
              <div className="skill-card-main-contents">
                <div className="skill-card-main-content">
                  <div className="intern-skill-title">
                    <h1>TECHNICAL SKILLS</h1>
                  </div>
                  <div className="intern-skill-tags">
                    {skillsData.technicalSkills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-card-main-content">
                  <div className="intern-skill-title">
                    <h1>SOFT SKILLS</h1>
                  </div>
                  <div className="intern-skill-tags">
                    {skillsData.softSkills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FULL WIDTH FOOTER */}
      <footer className="myProfile-footer ">
        <div className="footer-left">
          <p>© 2024 Corporate Systems Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <Link to="/privacy" className="intern-footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="intern-footer-link">
            Terms of Service
          </Link>
          <Link to="/help" className="intern-footer-link">
            Help Center
          </Link>
        </div>
      </footer>
    </div>
  );
};
