import React, { useState } from "react";
import "../Components-Registration/MentorRegistration.css";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import HrIcon from "../assets/icons/human-icon.png";
import Hr from "../assets/icons/hr.png";
import Mentor from "../assets/icons/mentor.png";
import Intern from "../assets/icons/intern.png";
import Company from "../assets/icons/company.png";
import CompanyLogo from "../assets/icons/company-icon.png";
import DownArrowSelect from "../assets/icons/down-arrow.png";

export const MentorRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [department, setDepartment] = useState(null);
  const [companyName, setCompanyName] = useState("");
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

  const departmentOptions = [
    { value: "hr", label: "Human Resources" },
    { value: "it", label: "Information Technology" },
    { value: "finance", label: "Finance" },
  ];

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCountryCode("+91");
    setDepartment(null);
    setCompanyName("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
    setErrors({});
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

  // Department
  const handleDepartmentChange = (selectedOption) => {
    setDepartment(selectedOption);

    setErrors((prevErrors) => ({
      ...prevErrors,
      department: "",
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

    // Phone Validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (countryCode === "+91" && !/^[6-9]/.test(phone)) {
      newErrors.phone = "Phone number must start with 6, 7, 8, or 9.";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Department Validation
    if (!department) {
      newErrors.department = "Please select a department.";
    }
    // companyName vlaidtion
    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required.";
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const fullPhoneNumber = countryCode + phone;

      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Phone:", fullPhoneNumber);
      console.log("Department:", department);

      alert("Account created successfully!");

      resetForm();
    }
  };

  return (
    <div className="hr-reg-page-container">
      <div className="hr-reg-left-container">
        <div className="hr-reg-left-content-container">
          <h1 className="hr-reg-logo">InterMS</h1>
          <div id="left-container-2-reg">
            <h1 className="hr-reg-quotes ">
              Empower your team with top-tier talent.
            </h1>
            <p className="hr-reg-description">
              Streamline your recruitment process, manage internships with ease,
              and connect with the next generation of industry leaders.
            </p>
            <div id="left-blur-box">
              <div className="reg-dashboard-card">
                <div className="reg-dashboard-item">
                  <div id="purple-circle">
                    <img src={HrIcon} alt="Hr-icon" id="hr-icon" />
                  </div>

                  <div className="reg-dashboard-content">
                    <h3 className="reg-dashboard-title">
                      Unified Talent Dashboard
                    </h3>

                    <p className="reg-dashboard-description">
                      Monitor all applications in real-time.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="progress-container">
                    <div className="reg-progress-bar">
                      <div className="reg-progress-fill"></div>
                    </div>
                    <div className="labels-container">
                      <p id="small-label-1">75% Efficiency Boost</p>
                      <p id="small-label-2">120+ Placements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-container-hr">
            <div className="stat-item-hr">
              <span className="stat-number-hr">500+</span>
              <span className="stat-label-hr">COMPANIES</span>
            </div>

            <div className="stat-item-hr">
              <span className="stat-number-hr">10k+</span>
              <span className="stat-label-hr">STUDENTS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-reg-right-container">
        <div className="hr-reg-right-content-container">
          <div>
            <h1 className="hr-reg-title">Create your HR account</h1>
            <p className="hr-reg-subtitle">
              Join our ecosystem of professional employers.
            </p>
          </div>

          <div>
            <span className="reg-as-subtitle">Registering as</span>
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
                    placeholder="John Doe"
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
                    Work Email Address{" "}
                    <span className="hr-reg-required">*</span>
                  </label>

                  <input
                    type="email"
                    className={`hr-reg-input ${
                      errors.email ? "input-error-1" : ""
                    }`}
                    placeholder="john.doe@company.com"
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
                    Department <span className="hr-reg-required">*</span>
                  </label>

                  <Select
                    className={`department-select ${
                      errors.department ? "department-error" : ""
                    }`}
                    classNamePrefix="department"
                    options={departmentOptions}
                    value={department}
                    onChange={handleDepartmentChange}
                    placeholder="Select your department"
                    isSearchable={false}
                    styles={{
                      valueContainer: (provided) => ({
                        ...provided,
                        paddingLeft: "16px",
                      }),
                    }}
                  />

                  {errors.department && (
                    <p className="error-message">{errors.department}</p>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div className="hr-reg-form-group">
                <label className="hr-reg-label">
                  Company Name <span className="hr-reg-required">*</span>
                </label>

                <div className="hr-reg-input-wrapper">
                  <img
                    src={CompanyLogo}
                    alt="Company"
                    className="company-icon-1"
                  />

                  <input
                    className={`hr-reg-input-company ${
                      errors.companyName ? "input-error-1" : ""
                    }`}
                    type="text"
                    placeholder="InternHub Inc."
                    value={companyName}
                    onChange={handleCompanyNameChange}
                  />
                </div>

                {errors.companyName && (
                  <p className="error-message">{errors.companyName}</p>
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
                      {showPassword ? <FiEyeOff /> : <FiEye />}
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
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
