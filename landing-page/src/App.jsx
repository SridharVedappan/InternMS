import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components-LandingPage/LandingPage";
import Login from "./Components-LoginPage/Login";
import TwoStepVerification from "./Components-LoginPage/TwoStepVerification";
import ForgotPassword from "./Components-LoginPage/ForgotPassword";
import VerificationCode from "./Components-LoginPage/VerificationCode";
import ForgotPasswordOTP from "./Components-LoginPage/ForgotPasswordOTP";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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
