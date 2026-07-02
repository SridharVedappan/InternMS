// Footer.jsx
import React from "react";
import "./Footer.css";
import Mail from "../assets/icons/mail.png";
import Browser from "../assets/icons/browser.png";

function Footer() {
  return (
    <div className="bg-footer-color">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="logo-intern">InternMS</h2>
            <p className="footer-text" id="quotes">
              The ultimate platform for managing internships, connecting talent,
              and building the future of work.
            </p>
            <div className="icon-wrapper">
              <img src={Mail} alt="mail.png" className="dual-icon" />
              <img src={Browser} alt="browser.png" className="dual-icon" />
            </div>
          </div>

          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li className="footer-text">For Students</li>
              <li className="footer-text">For Employers</li>
              <li className="footer-text">For Universities</li>
              <li className="footer-text">Pricing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <p className="footer-text company-link">Privacy Policy</p>
            <p className="footer-text company-link">Terms of Service</p>
            <p className="footer-text company-link">Resources</p>
            <p className="footer-text company-link">Contact Us</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} InternMS. All rights reserved.</p>
          <p>© Made with ❤️ for the future workforce.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
