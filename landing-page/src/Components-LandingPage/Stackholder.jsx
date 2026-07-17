import React from "react";
import "../Components-LandingPage/Stackholder.css";
import Tick from "../assets/icons/tick.png";
import OfficeEnvStockImage from "../assets/Collaborative Modern Office.png";

export const Stackholder = () => {
  return (
    <section className="stack-container">
      <div className="stack-wrapper">
        <div className="stack-container-1">
          <h1 className="stk-1">
            For Students:
            <br />
            <span className="highlight">Your Career Launchpad.</span>
          </h1>

          <div className="list-for-points">
            <div className="points">
              <img src={Tick} alt="tick-icon" className="tick" />
              <div className="point-content">
                <h2>One-click Applications</h2>
                <p>
                  Apply to top-tier firms instantly with your verified profile.
                </p>
              </div>
            </div>

            <div className="points">
              <img src={Tick} alt="tick-icon" className="tick" />
              <div className="point-content">
                <h2>AI-Powered Matching</h2>
                <p>
                  Get matched with opportunities that align with your skills and
                  career goals.
                </p>
              </div>
            </div>

            <div className="points">
              <img src={Tick} alt="tick-icon" className="tick" />
              <div className="point-content">
                <h2>Real-Time Updates</h2>
                <p>
                  Track application status, interview schedules, and placement
                  progress effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="btn-1">Students</button>
            <button className="btn-1">Employers</button>
            <button className="btn-1">Universities</button>
          </div>
        </div>

        <div className="office-image-container">
          <div className="office-image-shadow">
            <img
              src={OfficeEnvStockImage}
              alt="Preview"
              className="office-env-Stock-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
