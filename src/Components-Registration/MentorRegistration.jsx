import React, { useState } from "react";
import "../Components-Registration/MentorRegistration.css";
import { Link, NavLink } from "react-router-dom";
import EyeOpen from "../assets/icons/eye-open.png";
import EyeClose from "../assets/icons/eye-close.png";
import Select from "react-select";
import HrIcon from "../assets/icons/human-icon.png";
import Hr from "../assets/icons/hr.png";
import Mentor from "../assets/icons/mentor.png";
import Intern from "../assets/icons/intern.png";
import Company from "../assets/icons/company.png";
import ShieldBadge from "../assets/icons/security-mark.png";
import Stars from "../assets/icons/stars.png";
import OfficeImage from "../assets/Office-image-png.png";

export const MentorRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const [experienceLevel, setExperienceLevel] = useState(null);
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

  const experienceOptions = [
    { value: "fresher", label: "Fresher (0-1 years)" },
    { value: "junior", label: "Junior (1-3 years)" },
    { value: "mid", label: "Mid-Level (3-5 years)" },
    { value: "senior", label: "Senior (5-8 years)" },
    { value: "lead", label: "Lead (8+ years)" },
  ];

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCountryCode("+91");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
    setErrors({});
    setProfessionalTitle("");
    setSkills("");
    setProfessionalTitle("");
    setBio("");
  };

  // Full Name
  const handleFullNameChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^A-Za-z\s]/g, "");
    value = value.replace(/\s+/g, " ");

    setFullName(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      fullName: "",
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

  //  Professional Title
  const handleProfessionalTitleChange = (e) => {
    const value = e.target.value;

    setProfessionalTitle(value);

    setErrors((prev) => ({
      ...prev,
      professionalTitle: value.trim() ? "" : "Professional title is required.",
    }));
  };

  // Bio
  const handleBioChange = (e) => {
    const value = e.target.value;

    setBio(value);

    setErrors((prev) => ({
      ...prev,
      bio: value.trim() ? "" : "Bio is required.",
    }));
  };

  // Skills / Expertise
  const handleSkillsChange = (e) => {
    const value = e.target.value;

    setSkills(value);

    setErrors((prev) => ({
      ...prev,
      skills: value.trim() ? "" : "Skills / Expertise is required.",
    }));
  };

  // Years of Experience
  const handleExperienceLevelChange = (selectedOption) => {
    setExperienceLevel(selectedOption);

    setErrors((prev) => ({
      ...prev,
      experienceLevel: selectedOption
        ? ""
        : "Please select your experience level.",
    }));
  };

  const handleCompanyNameChange = (e) => {
    const value = e.target.value;

    setCompanyName(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      companyName: "",
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
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (fullName.trim().length > 50) {
      newErrors.fullName = "Name cannot exceed 50 characters.";
    }

    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // bio validation
    if (!bio.trim()) {
      newErrors.bio = "Bio is required.";
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

    // Professional Title
    if (!professionalTitle.trim()) {
      newErrors.professionalTitle = "Professional title is required.";
    }
    // Experience Level
    if (!experienceLevel) {
      newErrors.experienceLevel = "Please select your experience level.";
    }

    // Skills / Expertise
    if (!skills.trim()) {
      newErrors.skills = "Skills / Expertise is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const fullPhoneNumber = countryCode + phone;

      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Phone:", fullPhoneNumber);

      alert("Account created successfully!");

      resetForm();
    }
  };

  return (
    <div className="mentor-reg-page-container">
      <div className="mentor-reg-left-container">
        <div className="mentor-reg-left-content-container">
          <h1 className="mentor-reg-logo">InterMS</h1>
          <div id="left-container-2-mentor">
            <h1 className="mentor-reg-quotes ">
              Empower your team with top-tier talent.
            </h1>
            <p className="mentor-reg-description">
              Join a community of experts dedicated to guiding students through
              their career journey. Share your wisdom, foster growth, and shape
              the industry's future.
            </p>
            <div className="mentor-features">
              <div className="mentor-info-card">
                <div className="image-div-shield">
                  <img
                    src={ShieldBadge}
                    alt="Industry Impact"
                    className="mentor-guard-shield"
                  />
                </div>

                <div className="mentor-text-content">
                  <h2 className="impact">Industry Impact</h2>
                  <p className="subtitle-mentor">
                    Bridge the gap between academic learning and real-world
                    excellence.
                  </p>
                </div>
              </div>

              <div className="mentor-info-card">
                <div className="image-div-shield">
                  <img
                    src={HrIcon}
                    alt="Mentor Growth"
                    className="mentor-guard-shield-sub"
                  />
                </div>

                <div className="mentor-text-content">
                  <h2 className="impact">Meaningful Connections</h2>
                  <p className="subtitle-mentor">
                    Build lasting professional relationships with ambitious
                    young minds.
                  </p>
                </div>
              </div>

              <div className="mentor-info-card">
                <div className="image-div-shield">
                  <img
                    src={Stars}
                    alt="Growth"
                    className="mentor-guard-shield-stars"
                  />
                </div>

                <div className="mentor-text-content">
                  <h2 className="impact">Personal Growth</h2>
                  <p className="subtitle-mentor">
                    Enhance your leadership and communication skills through
                    mentorship.
                  </p>
                </div>
              </div>
            </div>

            <div className="mentor-office-image-card">
              <img
                src={OfficeImage}
                alt="Office"
                className="office-image-mentor"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hr-reg-right-container">
        <div className="hr-reg-right-content-container">
          <div>
            <h1 className="mentor-reg-title">Mentor Registration</h1>
            <p className="mentor-reg-subtitle ">
              Complete your profile to start connecting with students.
            </p>
          </div>

          <div>
            <span className="reg-as-subtitle">
              Registering as <span className="hr-reg-required">*</span>
            </span>
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
                      <img src={Company} alt="company-icon" id="hr-page-icon" />
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
                    Full Name <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`hr-reg-input ${
                      errors.fullName ? "input-error-1" : ""
                    }`}
                    value={fullName}
                    onChange={handleFullNameChange}
                  />

                  {errors.fullName && (
                    <p className="error-message">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Email Address <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="email"
                    className={`hr-reg-input ${
                      errors.email ? "input-error-1" : ""
                    }`}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="hr-reg-form-row">
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
                {/* Department */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Professional Title{" "}
                    <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="e.g., Senior Software Engineer"
                    className={`hr-reg-input ${
                      errors.professionalTitle ? "input-error-1" : ""
                    }`}
                    value={professionalTitle}
                    onChange={handleProfessionalTitleChange}
                  />

                  {errors.professionalTitle && (
                    <p className="error-message">{errors.professionalTitle}</p>
                  )}
                </div>
              </div>
              <div className="hr-reg-form-row">
                {/* Skills / Expertise */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Skills / Expertise{" "}
                    <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="e.g., UI/UX, React, Mentoring"
                    className={`hr-reg-input ${
                      errors.skills ? "input-error-1" : ""
                    }`}
                    value={skills}
                    onChange={handleSkillsChange}
                  />

                  <p
                    className={errors.skills ? "error-message" : "helper-text"}
                  >
                    {errors.skills || "Separate multiple skills with commas"}
                  </p>
                </div>

                {/* Years of Experience */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Years of Experience{" "}
                    <span className="hr-reg-required">*</span>
                  </label>

                  <Select
                    className={`department-select ${
                      errors.experienceLevel ? "department-error" : ""
                    }`}
                    classNamePrefix="department"
                    options={experienceOptions}
                    value={experienceLevel}
                    onChange={handleExperienceLevelChange}
                    placeholder="Select experience level"
                    isSearchable={false}
                    styles={{
                      valueContainer: (provided) => ({
                        ...provided,
                        paddingLeft: "16px",
                      }),
                    }}
                  />

                  {errors.experienceLevel && (
                    <p className="error-message">{errors.experienceLevel}</p>
                  )}
                </div>
              </div>

              <div className="hr-reg-form-group">
                <div className="label-row">
                  <label className="hr-reg-label">
                    Bio / About You <span className="hr-reg-required">*</span>
                  </label>

                  <span className="character-count">{bio.length}/500</span>
                </div>

                <textarea
                  className={`hr-reg-textarea ${
                    errors.bio ? "input-error-1" : ""
                  }`}
                  placeholder="Tell us about yourself, your background and why you're passionate about mentoring..."
                  maxLength={500}
                  value={bio}
                  onChange={handleBioChange}
                />

                {errors.bio && <p className="error-message">{errors.bio}</p>}
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
                    Confirm Password <span className="hr-reg-required">*</span>
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
              <div className="terms-container-mentor">
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

              <button type="submit" className="create-account-btn">
                Create Account
              </button>
            </form>
            <footer className="mentor-registration-footer">
              <div className="divider-line">
                <div className="line"></div>

                <span className="or-text-hr">OR</span>

                <div className="line"></div>
              </div>

              <div className="signin-container">
                <p className="signin-text">
                  Already have an account?{" "}
                  <Link to="/login" className="signin-link-mentor">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="footer-bottom-mentor">
                <p className="footer-copyright-mentor">
                  © 2024 InternHub. All rights reserved.
                </p>

                <div className="footer-link-mentor">
                  <a href="#" className="footer-link-mentor">
                    Support
                  </a>

                  <a href="#" className="footer-link-mentor">
                    Contact Us
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
