import React, { useState } from "react";
import "../Components-Registration/CompanyRegistration.css";
import { Link, NavLink } from "react-router-dom";
import EyeOpen from "../assets/icons/eye-open.png";
import EyeClose from "../assets/icons/eye-close.png";
import Select from "react-select";
import HrIcon from "../assets/icons/human-icon.png";
import Hr from "../assets/icons/hr.png";
import Mentor from "../assets/icons/mentor.png";
import Intern from "../assets/icons/intern.png";
import Company from "../assets/icons/company.png";
import VerifiedIcon from "../assets/icons/verified-icon.png";
import DashboardIcon from "../assets/icons/dashboard-icon.png";
import ProfileImage from "../assets/icons/Profile-icon-intern.png";
import Upload from "../assets/icons/upload-icon.png";
import EfforlessHiring from "../assets/icons/errorfless-hiring.png";
import VerifyShield from "../assets/icons/security-mark.png";
import Agree from "../assets/icons/Agree.png";
import smileIcon from "../assets/icons/bookmark.png";
import atIcon from "../assets/icons/at.png";
import shareIcon from "../assets/icons/share.png";

export const CompanyRegistration = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [college, setCollege] = useState("");
  const [companySize, setCompanySize] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [industry, setIndustry] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const countryCodes = [
    { code: "+91" },
    { code: "+1" },
    { code: "+44" },
    { code: "+971" },
    { code: "+61" },
    { code: "+81" },
  ];

  const companySizeOptions = [
    { value: "", label: "Select size" },
    { value: "1-10", label: "1–10 Employees" },
    { value: "11-50", label: "11–50 Employees" },
    { value: "51-200", label: "51–200 Employees" },
    { value: "201-500", label: "201–500 Employees" },
    { value: "501-1000", label: "501–1,000 Employees" },
    { value: "1001-5000", label: "1,001–5,000 Employees" },
    { value: "5001-10000", label: "5,001–10,000 Employees" },
    { value: "10000+", label: "10,000+ Employees" },
  ];

  const industryOptions = [
    { value: "information-technology", label: "Information Technology" },
    { value: "software", label: "Software Development" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "finance", label: "Finance & Banking" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "telecommunications", label: "Telecommunications" },
    { value: "construction", label: "Construction" },
    { value: "automotive", label: "Automotive" },
    { value: "media", label: "Media & Entertainment" },
    { value: "hospitality", label: "Hospitality" },
    { value: "logistics", label: "Logistics & Supply Chain" },
    { value: "real-estate", label: "Real Estate" },
    { value: "consulting", label: "Consulting" },
    { value: "government", label: "Government" },
    { value: "non-profit", label: "Non-Profit" },
    { value: "energy", label: "Energy & Utilities" },
    { value: "other", label: "Other" },
  ];

  const resetForm = () => {
    setCompanyName("");
    setCompanyWebsite("");
    setEmail("");
    setPhone("");
    setCountryCode("+91");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
    setErrors({});
    setCompanySize(null);
    setIndustry(null);
    setRegistrationNumber("");
  };

  // Company Name
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);

    setErrors((prev) => ({
      ...prev,
      companyName: "",
    }));
  };
  const handleCompanyWebsiteChange = (e) => {
    setCompanyWebsite(e.target.value);

    setErrors((prev) => ({
      ...prev,
      companyWebsite: "",
    }));
  };
  // Email
  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
  };

  // Phone
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    setPhone(value);

    if (countryCode === "+91" && !/^[6-9]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must start with 6, 7, 8, or 9.",
      }));
    } else if (value.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be 10 digits.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  const handleIndustryChange = (selectedOption) => {
    setIndustry(selectedOption);

    setErrors((prev) => ({
      ...prev,
      industry: "",
    }));
  };

  const handleRegistrationNumberChange = (e) => {
    const value = e.target.value;

    setRegistrationNumber(value);

    setErrors((prev) => ({
      ...prev,
      registrationNumber: "",
    }));
  };

  // College / University
  const handleCollegeChange = (e) => {
    const value = e.target.value;

    setCollege(value);

    setErrors((prev) => ({
      ...prev,
      college: "",
    }));
  };

  const handleCompanySizeChange = (selectedOption) => {
    setCompanySize(selectedOption);

    setErrors((prev) => ({
      ...prev,
      companySize: "",
    }));
  };

  // Password
  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
    } else if (value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  // Confirm Password
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;

    setConfirmPassword(value);

    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Confirm password is required.",
      }));
    } else if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);

    setErrors((prevErrors) => ({
      ...prevErrors,
      terms: "",
    }));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Full Name Validation
    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!registrationNumber.trim()) {
      newErrors.registrationNumber = "Please enter your registration number.";
    }

    // Phone Validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (countryCode === "+91" && !/^[6-9]/.test(phone)) {
      newErrors.phone = "Phone number must start with 6, 7, 8, or 9.";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password Validation
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Terms Accept Validation
    if (!termsAccepted) {
      newErrors.terms =
        "Please accept the Terms of Service and Privacy Policy.";
    }

    // Company website
    if (!companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required";
    } else if (!/^https?:\/\/.+/i.test(companyWebsite.trim())) {
      newErrors.companyWebsite =
        "Please enter a valid website URL (e.g. https://example.com)";
    }
    if (!industry) {
      newErrors.industry = "Please select your industry.";
    }
    // Company size
    if (!companySize) {
      newErrors.companySize = "Please select your company size.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const fullPhoneNumber = countryCode + phone;

      console.log("Submitted");

      alert("Account created successfully!");

      resetForm();
    }
  };

  return (
    <div className="company-page">
      <div className="company-reg-page-container">
        <div className="company-reg-left-container">
          <div className="intern-reg-left-content-container">
            <div id="left-container-2-company">
              <h1 className="company-reg-quotes ">
                Partner with InternMS to scale your team.
              </h1>
              <p className="company-reg-description">
                Connect with over 100,000+ top-tier students and graduates ready
                to bring innovation to your company.
              </p>
              <div className="company-features">
                <div className="company-info-card ">
                  <div className="image-div-com">
                    <img
                      src={EfforlessHiring}
                      alt="Industry Impact"
                      className="company-icon-effortless "
                    />
                  </div>

                  <div className="mentor-text-content">
                    <h2 className="impact">Effortless Hiring</h2>
                    <p className="subtitle-mentor">
                      Post jobs and manage applicants in one centralized
                      dashboard.
                    </p>
                  </div>
                </div>

                <div className="mentor-info-card">
                  <div className="image-div-shield">
                    <img
                      src={VerifyShield}
                      alt="Mentor Growth"
                      className="mentor-guard-shield-sub"
                    />
                  </div>

                  <div className="mentor-text-content">
                    <h2 className="impact">Verified Talent</h2>
                    <p className="subtitle-mentor">
                      Every student profile is verified for education and skill
                      credentials.
                    </p>
                  </div>
                </div>
              </div>
              <div className="primary-container-com">
                <div className="agreement-logo-container">
                  <img
                    src={Agree}
                    alt="agremment-logo"
                    className="agree-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="company-reg-right-container">
          <div className="company-reg-right-content-container">
            <div>
              <h1 className="company-reg-title">Create Company Account</h1>
              <p className="company-reg-subtitle">
                Fill in the details to register your organization and start
                hiring.
              </p>
            </div>
            <div>
              <div className="page-nav-conatiner">
                <NavLink
                  to="/hr-registration"
                  className={({ isActive }) =>
                    isActive ? "reg-card-link active" : "reg-card-link"
                  }
                >
                  <div className="reg-card">
                    <div className="icon-wrapper">
                      <span id="white-circle">
                        <img src={Hr} alt="hr-icon" id="hr-page-icon" />
                      </span>
                    </div>
                    <p className="hr-text">HR</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/mentor-registration"
                  className={({ isActive }) =>
                    isActive ? "reg-card-link active" : "reg-card-link"
                  }
                >
                  <div className="reg-card">
                    <div className="icon-wrapper">
                      <span id="white-circle">
                        <img src={Mentor} alt="mentor-icon" id="hr-page-icon" />
                      </span>
                    </div>
                    <p className="hr-text">Mentor</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/intern-registration"
                  className={({ isActive }) =>
                    isActive ? "reg-card-link active" : "reg-card-link"
                  }
                >
                  <div className="reg-card">
                    <div className="icon-wrapper">
                      <span id="white-circle">
                        <img src={Intern} alt="intern-icon" id="hr-page-icon" />
                      </span>
                    </div>
                    <p className="hr-text">Intern</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/company-registration"
                  className={({ isActive }) =>
                    isActive ? "reg-card-link active" : "reg-card-link"
                  }
                >
                  <div className="reg-card">
                    <div className="icon-wrapper">
                      <span id="white-circle">
                        <img
                          src={Company}
                          alt="company-icon"
                          id="hr-page-icon"
                        />
                      </span>
                    </div>
                    <p className="hr-text">Company</p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div>
              <form className="hr-reg-form" onSubmit={handleSubmit}>
                <div className="hr-reg-form-row">
                  {/* Full Name */}
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Company Name <span className="hr-reg-required">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      className={`hr-reg-input ${
                        errors.companyName ? "input-error-1" : ""
                      }`}
                      value={companyName}
                      onChange={handleCompanyNameChange}
                    />

                    {errors.companyName && (
                      <p className="error-message">{errors.companyName}</p>
                    )}
                  </div>

                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Company Website <span className="hr-reg-required">*</span>
                    </label>

                    <input
                      type="url"
                      className={`hr-reg-input ${
                        errors.companyWebsite ? "input-error-1" : ""
                      }`}
                      placeholder="https://"
                      value={companyWebsite}
                      onChange={handleCompanyWebsiteChange}
                    />

                    {errors.companyWebsite && (
                      <p className="error-message">{errors.companyWebsite}</p>
                    )}
                  </div>
                </div>

                <div className="hr-reg-form-row">
                  {/* Email */}
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Work Email <span className="hr-reg-required">*</span>
                    </label>

                    <input
                      type="email"
                      className={`hr-reg-input ${
                        errors.email ? "input-error-1" : ""
                      }`}
                      placeholder="name@company.com"
                      value={email}
                      onChange={handleEmailChange}
                    />

                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>
                  {/* Phone */}
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Phone Number <span className="hr-reg-required">*</span>
                    </label>

                    <div className="phone-wrapper">
                      <select
                        className="country-code-box"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        {countryCodes.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.code}
                          </option>
                        ))}
                      </select>

                      <input
                        type="tel"
                        className={`hr-reg-input phone-number-input ${
                          errors.phone ? "input-error-1" : ""
                        }`}
                        placeholder="Enter your number"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    {errors.phone && (
                      <p className="error-message">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="hr-reg-form-row">
                  {/* Industry*/}
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Industry <span className="hr-reg-required">*</span>
                    </label>

                    <Select
                      className={`industry-select ${
                        errors.industry ? "industry-error" : ""
                      }`}
                      classNamePrefix="department"
                      options={industryOptions}
                      value={industry}
                      onChange={handleIndustryChange}
                      placeholder="Select industry"
                    />

                    {errors.industry && (
                      <span className="error-message">{errors.industry}</span>
                    )}
                  </div>

                  {/* Company Size */}
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Company Size <span className="hr-reg-required">*</span>
                    </label>

                    <Select
                      className={`company-size-select ${
                        errors.companySize ? "company-size-error" : ""
                      }`}
                      classNamePrefix="department"
                      options={companySizeOptions}
                      value={companySize}
                      onChange={handleCompanySizeChange}
                      placeholder="Select size"
                    />

                    {errors.companySize && (
                      <span className="error-message">
                        {errors.companySize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Registration Number */}
                <div className="hr-reg-form-group full-width">
                  <label className="hr-reg-label">
                    Registration Number
                    <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="text"
                    className={`hr-reg-input ${
                      errors.registrationNumber ? "input-error-1" : ""
                    }`}
                    placeholder="Business ID or Tax ID"
                    value={registrationNumber}
                    onChange={handleRegistrationNumberChange}
                  />

                  {errors.registrationNumber && (
                    <span className="error-message">
                      {errors.registrationNumber}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="hr-reg-form-row">
                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Password <span className="hr-reg-required">*</span>
                    </label>

                    <div className="password-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`hr-reg-input ${
                          errors.password ? "input-error-1" : ""
                        }`}
                        placeholder="Create a strong password"
                        value={password}
                        onChange={handlePasswordChange}
                      />

                      <span
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <img
                          src={showPassword ? EyeOpen : EyeClose}
                          alt={showPassword ? "Hide password" : "Show password"}
                          className={
                            showPassword ? "eye-open-icon" : "eye-close-icon"
                          }
                        />
                      </span>
                    </div>

                    {errors.password && (
                      <p className="error-message">{errors.password}</p>
                    )}
                  </div>

                  <div className="hr-reg-form-group">
                    <label className="hr-reg-label">
                      Confirm Password{" "}
                      <span className="hr-reg-required">*</span>
                    </label>

                    <div className="password-wrapper">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`hr-reg-input ${
                          errors.confirmPassword ? "input-error-1" : ""
                        }`}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />

                      <span
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <img
                          src={showConfirmPassword ? EyeOpen : EyeClose}
                          alt={
                            showConfirmPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          className={
                            showConfirmPassword
                              ? "eye-open-icon"
                              : "eye-close-icon"
                          }
                        />
                      </span>
                    </div>

                    {errors.confirmPassword && (
                      <p className="error-message">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <div className="terms-container">
                  <input
                    type="checkbox"
                    id="terms"
                    className="terms-checkbox"
                    checked={termsAccepted}
                    onChange={handleTermsChange}
                  />

                  <div className="label-container-reg">
                    <label htmlFor="terms" className="terms-text">
                      I agree to the <span>Terms of Service</span> and{" "}
                      <span>Privacy Policy</span>
                    </label>
                  </div>
                  <br />
                  {errors.terms && (
                    <p className="error-message">{errors.terms}</p>
                  )}
                </div>

                <button type="submit" className="Register-Company-btn">
                  Register Company
                </button>
              </form>
              <div className="divider-line">
                <div className="line"></div>

                <span className="or-text-hr">OR</span>

                <div className="line"></div>
              </div>

              <div className="signin-container">
                <p className="signin-text">
                  Already have an account?{" "}
                  <span className="signin-link">Sign in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="company-navbar">
        <div className="company-navbar-logo">
          <a href="/" className="logo-link-company">
            InternMS
          </a>
        </div>

        <div className="company-navbar-menu">
          <a href="/find-talent" className="nav-link-company">
            Find Talent
          </a>
          <a href="/internships" className="nav-link-company">
            Internships
          </a>
          <a href="/pricing" className="nav-link-company">
            Pricing
          </a>
        </div>

        <div className="company-navbar-login">
          <a href="/login" className="login-link-company">
            Log In
          </a>
        </div>
      </nav>
      <footer className="footer-company">
        <div className="footer-company-content">
          <div className="footer-company-brand">
            <h3 className="footer-company-logo">InternMS</h3>
            <p className="footer-company-description">
              Connecting the next generation of talent with world-class
              opportunities. Build your future with InternHub.
            </p>
          </div>

          <div className="footer-company-links">
            <div className="footer-company-column">
              <h4 className="company-sec-1">Company</h4>
              <a href="/">About Us</a>
              <a href="/">Careers</a>
              <a href="/">Blog</a>
            </div>

            <div className="footer-company-column">
              <h4 className="company-sec-1">For Employers</h4>
              <a href="/">Post a Job</a>
              <a href="/">Hiring Solutions</a>
              <a href="/">Pricing</a>
            </div>

            <div className="footer-company-column">
              <h4 className="company-sec-1">Support</h4>
              <a href="/">Help Center</a>
              <a href="/">Contact Us</a>
              <a href="/">Privacy</a>
            </div>
          </div>
        </div>

        <div className="footer-company-divider"></div>

        <div className="footer-company-bottom">
          <p className="company-reserved">
            © 2024 InternHub. All rights reserved.
          </p>

          <div className="footer-company-social">
            <a href="#">
              <img
                src={smileIcon}
                alt="Smile"
                className="social-icon"
                id="simle-bookmark"
              />
            </a>
            <a href="#">
              <img src={atIcon} alt="At" className="social-icon" />
            </a>

            <a href="#">
              <img src={shareIcon} alt="Share" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
