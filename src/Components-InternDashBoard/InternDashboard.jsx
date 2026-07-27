import React from "react";
import Internsidebar from "./Internsidebar";
import "../Components-InternDashBoard/Interndashboard.css";
import NavbarIDB from "./NavbarIDB";
import SectiononeIDB from "./SectiononeIDB";
import SectionmiddleIDB from "./SectionmiddleIDB";
import CertificatesIDB from "./CertificatesIDB";

export default function Interndashboard() {
  return (
    <div className="Content-IDB">
      <Internsidebar />

      <div className="Main-IDB">
        <NavbarIDB />

        <div className="Section-IDB">
          <SectiononeIDB />
        </div>
        <div>
          <SectionmiddleIDB />
        </div>
        <div>
          <CertificatesIDB />
        </div>
      </div>
    </div>
  );
}
