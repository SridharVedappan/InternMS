import React from "react";
import "../Components-InternDashBoard/CertificatesIDB.css";
import CerificateLast from "../assets/icons/tabler_certificate.png";
import DownloadIDB from "../assets/icons/DownloadIDB.png";

export default function CertificatesIDB() {
  return (
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
  );
}
