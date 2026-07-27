import React from "react";
import "../Components-InternDashBoard/SectiononeIDB.css";
import Currentinternships from "../assets/icons/Currentinternship.png";
import IDBsectiononearrow from "../assets/icons/IDBsectionarrow.png";
import InternshipduratoinIDB from "../assets/icons/IntenshipdurationIDB.png";
import Overallprogress from "../assets/icons/Overallprogress.png";
import Reportsubmitted from "../assets/icons/Reportsubmitted.png";
import WavinghandIDB from "../assets/icons/WavinghandIDB.png";

export default function SectiononeIDB() {
  return (
    <div>
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
    </div>
  );
}
