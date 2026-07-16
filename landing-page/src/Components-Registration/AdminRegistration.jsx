import React, { useState } from "react";
import "../Components-Registration/AdminRegistration.css";
import { Link, NavLink } from "react-router-dom";
import EyeOpen from "../assets/icons/eye-open.png";
import EyeClose from "../assets/icons/eye-close.png";
import Select from "react-select";
import ShieldBadge from "../assets/icons/security-mark.png";
import SystemVector from "../assets/System-Admin.png";
import WhiteShield from "../assets/icons/white-shield.png";
import AdminIcon from "../assets/icons/admin-icon.png";

export const AdminRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [organizationName, setOrganizationName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState(null);
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

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "singapore", label: "Singapore" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "japan", label: "Japan" },
    { value: "uae", label: "United Arab Emirates" },
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
    setJobTitle("");
    setCountry(null);
    setOrganizationName("");
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

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);

    if (errors.organizationName) {
      setErrors((prev) => ({
        ...prev,
        organizationName: "",
      }));
    }
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);

    if (errors.jobTitle) {
      setErrors((prev) => ({
        ...prev,
        jobTitle: "",
      }));
    }
  };

  // Country
  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);

    if (errors.country) {
      setErrors((prev) => ({
        ...prev,
        country: "",
      }));
    }
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

    if (!organizationName.trim()) {
      newErrors.organizationName =
        "Organization / Institution Name is required";
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

    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job Title / Designation is required";
    }

    if (!country) {
      newErrors.country = "Country is required";
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
    <div className="main-content-admin">
      <div className="mentor-reg-page-container">
        <div className="mentor-reg-left-container">
          <div className="mentor-reg-left-content-container">
            <h1 className="mentor-reg-logo">InterMS</h1>
            <div id="left-container-2-mentor">
              <h1 className="mentor-reg-quotes ">
                Regain access to your professional future.
              </h1>
              <p className="mentor-reg-description">
                Join thousands of companies and educational institutions
                managing the next generation of global talent through our
                secure, integrated ecosystem.
              </p>
              <div className="admin-image-container">
                <img
                  src={SystemVector}
                  alt="Preview"
                  className="system-vector"
                />
              </div>

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
                    <h2 className="impact">Role-based access</h2>
                    <p className="subtitle-mentor">
                      Secure and personalized experience for every user.
                    </p>
                  </div>
                </div>

                <div className="mentor-info-card">
                  <div className="image-div-shield">
                    <img
                      src={WhiteShield}
                      alt="White Shield"
                      className="mentor-guard-shield-sub"
                    />
                  </div>

                  <div className="mentor-text-content">
                    <h2 className="impact">Trusted & Secure</h2>
                    <p className="subtitle-mentor">
                      Your data is protected with industry-standard security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hr-reg-right-container">
          <div className="admin-left-middle-container">
            <div className="hr-reg-right-content-container">
              <div>
                <h1 className="mentor-reg-title">Admin Registration</h1>
                <p className="mentor-reg-subtitle ">
                  Fill in the details below to create your account
                </p>
              </div>

              <div>
                <span className="reg-as-subtitle">
                  Registering as <span className="hr-reg-required">*</span>
                </span>
                <div className="admin-primary-container">
                  <div className="admin-icon-wrapper">
                    <div className="admin-icon-container">
                      <img
                        src={AdminIcon}
                        alt="Admin-Icon"
                        className="admin-icon"
                      />
                    </div>

                    <p className="admin-title">Admin</p>
                  </div>
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
                    {/* Organization / Institution Name*/}
                    <div className="hr-reg-form-group">
                      <label className="hr-reg-label">
                        Organization / Institution Name{" "}
                        <span className="hr-reg-required">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Enter organization name"
                        className={`hr-reg-input ${
                          errors.organizationName ? "input-error-1" : ""
                        }`}
                        value={organizationName}
                        onChange={handleOrganizationNameChange}
                      />

                      {errors.organizationName && (
                        <p className="error-message">
                          {errors.organizationName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hr-reg-form-row">
                    {/* Skills / Expertise */}
                    <div className="hr-reg-form-group">
                      <label className="hr-reg-label">
                        Job Title / Designation{" "}
                        <span className="hr-reg-required">*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your job title"
                        className={`hr-reg-input ${
                          errors.jobTitle ? "input-error-1" : ""
                        }`}
                        value={jobTitle}
                        onChange={handleJobTitleChange}
                      />

                      {errors.jobTitle && (
                        <p className="error-message">{errors.jobTitle}</p>
                      )}
                    </div>

                    <div className="hr-reg-form-group">
                      <label className="hr-reg-label">
                        Country <span className="hr-reg-required">*</span>
                      </label>

                      <Select
                        className={`department-select ${
                          errors.country ? "department-error" : ""
                        }`}
                        classNamePrefix="department"
                        options={countryOptions}
                        value={country}
                        onChange={handleCountryChange}
                        placeholder="Select your country"
                        isSearchable
                        styles={{
                          valueContainer: (provided) => ({
                            ...provided,
                            paddingLeft: "16px",
                          }),
                        }}
                      />

                      {errors.country && (
                        <p className="error-message">{errors.country}</p>
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
                            alt={
                              showPassword ? "Hide password" : "Show password"
                            }
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
                        <p className="error-message">
                          {errors.confirmPassword}
                        </p>
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
      </div>
      <div className="admin-footer">
        <p className="admin-footer-text">
          © 2024 InternMS. All rights reserved.
        </p>

        <div className="admin-footer-links">
          <a href="/privacy-policy" className="admin-footer-link">
            Privacy Policy
          </a>

          <a href="/terms" className="admin-footer-link">
            Terms of Service
          </a>

          <a href="/support" className="admin-footer-link">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};
