import React, { useState } from "react";
import "../Components-Registration/InternRegistration.css";
import { Link, NavLink } from "react-router-dom";
import EyeOpen from "../assets/icons/eye-open.png";
import EyeClose from "../assets/icons/eye-close.png";
import Select from "react-select";
import HrIcon from "../assets/icons/human-icon.png";
import Hr from "../assets/icons/hr.png";
import Mentor from "../assets/icons/mentor.png";
import Intern from "../assets/icons/intern.png";
import Company from "../assets/icons/company.png";
import CompanyLogo from "../assets/icons/company-icon.png";
import DownArrowSelect from "../assets/icons/down-arrow.png";
import VerifiedIcon from "../assets/icons/verified-icon.png";
import DashboardIcon from "../assets/icons/dashboard-icon.png";
import ProfileImage from "../assets/icons/Profile-icon-intern.png";
import Upload from "../assets/icons/upload-icon.png";

export const InternRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [college, setCollege] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState(null);
  const [graduationYear, setGraduationYear] = useState(null);
  const [resume, setResume] = useState(null);
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

  const fieldOfStudyOptions = [
    { value: "java-full-stack", label: "Java Full Stack" },
    { value: "mern-stack", label: "MERN Stack" },
    { value: "mean-stack", label: "MEAN Stack" },
    { value: "python-full-stack", label: "Python Full Stack" },
    { value: "react-js", label: "React.js" },
    { value: "angular", label: "Angular" },
    { value: "node-js", label: "Node.js" },
    { value: "dotnet", label: ".NET Development" },
    { value: "data-science", label: "Data Science" },
    { value: "artificial-intelligence", label: "Artificial Intelligence" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "cyber-security", label: "Cyber Security" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "devops", label: "DevOps" },
    { value: "ui-ux-design", label: "UI/UX Design" },
  ];

  const currentYear = new Date().getFullYear();

  const graduationYearOptions = Array.from({ length: 16 }, (_, index) => {
    const year = currentYear - 5 + index;
    return {
      value: year.toString(),
      label: year.toString(),
    };
  });

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCountryCode("+91");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
    setErrors({});
    setSkills("");
    setProfessionalTitle("");
    setDateOfBirth("");
    setCollege("");
    setGraduationYear(null);
    setResume(null);
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

  // Date Of Birth
  const handleDateOfBirthChange = (e) => {
    const value = e.target.value;

    setDateOfBirth(value);

    setErrors((prev) => ({
      ...prev,
      dateOfBirth: value ? "" : "Date of Birth is required.",
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setResume(null);
      setErrors((prev) => ({
        ...prev,
        resume: "",
      }));
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setResume(null);

      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF, DOC, and DOCX files are allowed",
      }));

      return;
    }

    if (file.size > maxSize) {
      setResume(null);

      setErrors((prev) => ({
        ...prev,
        resume: "File size must be less than 5MB",
      }));

      return;
    }

    setResume(file);

    setErrors((prev) => ({
      ...prev,
      resume: "",
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

  const handleFieldOfStudyChange = (selectedOption) => {
    setFieldOfStudy(selectedOption);

    setErrors((prev) => ({
      ...prev,
      fieldOfStudy: selectedOption ? "" : "Please select your field of study.",
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

  const handleGraduationYearChange = (selectedOption) => {
    setGraduationYear(selectedOption);

    setErrors((prev) => ({
      ...prev,
      graduationYear: selectedOption
        ? ""
        : "Please select your graduation year.",
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

    if (!graduationYear) {
      newErrors.graduationYear = "Please select your graduation year.";
    }

    // resume
    if (!resume) {
      newErrors.resume = "Please upload your resume.";
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
    // date Of Birth
    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required.";
    }

    // College / University
    if (!college.trim()) {
      newErrors.college = "College / University is required.";
    }

    if (!fieldOfStudy) {
      newErrors.fieldOfStudy = "Please select your field of study.";
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
          <div id="left-container-2-intern">
            <h1 className="intern-reg-quotes ">
              Your gateway to professional excellence starts here.
            </h1>
            <p className="intern-reg-description">
              Join thousands of ambitious students securing world- class
              internships at leading tech companies and creative agencies.
            </p>

            <div className="bottom-container-intern">
              <div>
                <div className="blur-card-container-intern">
                  <img
                    src={VerifiedIcon}
                    alt="Verified Employers"
                    className="verify-icon"
                  />

                  <div className="blur-card-content">
                    <h3 className="verify-badge-for-inter">
                      Verified Employers
                    </h3>
                    <p className="intern-quotes">
                      Connect with pre-vetted top-tier companies worldwide.
                    </p>
                  </div>
                </div>

                <div className="blur-card-container-intern-1">
                  <img
                    src={DashboardIcon}
                    alt="Expert Mentors"
                    className="verify-icon"
                  />

                  <div className="blur-card-content-1">
                    <h3 className="verify-badge-for-inter">Smart Tracking</h3>
                    <p className="intern-quotes-2">
                      Manage all your applications in one organized dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="profile-and-quotes">
                <p className="testimonial-quote">
                  "InternMS helped me land my dream internship at a Fortune 500
                  company within 3 weeks of joining."
                </p>

                <div className="testimonial-profile">
                  <img
                    src={ProfileImage}
                    alt="Sarah J."
                    className="testimonial-profile-image"
                  />

                  <p className="testimonial-name">
                    — Sarah J., Product Design Intern
                  </p>
                </div>
              </div>
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
                {/* Date of Birth  */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Date of Birth <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="date"
                    className={`hr-reg-input ${
                      errors.dateOfBirth ? "input-error-1" : ""
                    }`}
                    value={dateOfBirth}
                    onChange={handleDateOfBirthChange}
                  />

                  {errors.dateOfBirth && (
                    <p className="error-message">{errors.dateOfBirth}</p>
                  )}
                </div>
              </div>
              <div className="hr-reg-form-row">
                {/* College / University */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    College / University{" "}
                    <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your university name"
                    className={`hr-reg-input ${
                      errors.college ? "input-error-1" : ""
                    }`}
                    value={college}
                    onChange={handleCollegeChange}
                  />

                  {errors.college && (
                    <p className="error-message">{errors.college}</p>
                  )}
                </div>

                {/* field of study */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Field of Study <span className="hr-reg-required">*</span>
                  </label>

                  <Select
                    className={`department-select ${
                      errors.fieldOfStudy ? "department-error" : ""
                    }`}
                    classNamePrefix="department"
                    options={fieldOfStudyOptions}
                    value={fieldOfStudy}
                    onChange={handleFieldOfStudyChange}
                    placeholder="Select your field of study"
                    isSearchable={false}
                    styles={{
                      valueContainer: (provided) => ({
                        ...provided,
                        paddingLeft: "16px",
                      }),
                    }}
                  />

                  {errors.fieldOfStudy && (
                    <p className="error-message">{errors.fieldOfStudy}</p>
                  )}
                </div>
              </div>

              <div className="hr-reg-form-row">
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Graduation Year <span className="hr-reg-required">*</span>
                  </label>

                  <Select
                    className={`department-select ${
                      errors.graduationYear ? "department-error" : ""
                    }`}
                    classNamePrefix="department"
                    options={graduationYearOptions}
                    value={graduationYear}
                    onChange={handleGraduationYearChange}
                    placeholder="Select your graduation year"
                    isSearchable={false}
                    styles={{
                      valueContainer: (provided) => ({
                        ...provided,
                        paddingLeft: "16px",
                      }),
                    }}
                  />

                  {errors.graduationYear && (
                    <p className="error-message">{errors.graduationYear}</p>
                  )}
                </div>
                {/* resume upload */}
                <div className="hr-reg-form-group">
                  <label className="hr-reg-label">
                    Resume <span className="hr-reg-optional">(Optional)</span>
                  </label>

                  <label
                    className={`resume-upload-box ${
                      errors.resume ? "resume-error" : ""
                    }`}
                  >
                    <img src={Upload} alt="Upload Resume" />

                    <span>
                      {resume ? resume.name : "Upload PDF, DOCX (Max 5MB)"}
                    </span>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                      hidden
                    />
                  </label>

                  {errors.resume && (
                    <p className="error-message">{errors.resume}</p>
                  )}
                </div>
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

              <button type="submit" className="create-account-btn">
                Create Account
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
  );
};
