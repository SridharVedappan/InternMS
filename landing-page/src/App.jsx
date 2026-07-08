import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPages/LandingPage";
import Login from "./components/LoginPages/Login";
import Register from "./components/RegisterPages/Register";
import TwoStepVerification from "./components/LoginPages/TwoStepVerification";
import ForgotPassword from "./components/LoginPages/ForgotPassword";
import VerificationCode from "./components/LoginPages/VerificationCode";
import ForgotPasswordOTP from "./components/LoginPages/ForgotPasswordOTP";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/two-step-verification"
          element={<TwoStepVerification />}
        />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
