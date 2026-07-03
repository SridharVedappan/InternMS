import React from "react";
import "./StatsRow.css";

function StatsRow() {
  return (
    <section className="stats-container">
      <div className="stats">
        <h1>5000+</h1>
        <p>UNIVERSITIES</p>
      </div>

      <div className="stats">
        <h1>10k+</h1>
        <p>GLOBAL COMPANIES</p>
      </div>

      <div className="stats">
        <h1>1M</h1>
        <p>PLACEMENTS</p>
      </div>
    </section>
  );
}

export default StatsRow;
