import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./Components-LandingPage/LandingPage.jsx";
import { InternLogin } from "./Components-LoginPage/InternLogin.jsx";
import { HrRegistration } from "./Components-Registration/HrRegistration";
import { MentorRegistration } from "./Components-Registration/MentorRegistration";
import { InternRegistration } from "./Components-Registration/InternRegistration";
import { CompanyRegistration } from "./Components-Registration/CompanyRegistration";
import { AdminRegistration } from "./Components-Registration/AdminRegistration.jsx";
import { TwoStepVerification } from "./Components-LoginPage/TwoStepVerification";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { VerificationCode } from "./Components-LoginPage/VerificationCode";
import { ForgotPasswordOTP } from "./Components-LoginPage/ForgotPasswordOTP";
import { ResetPassword } from "./Components-LoginPage/ResetPassword";
import { PasswordResetSuccess } from "./Components-LoginPage/PasswordResetSuccess";
import { InternDashboard } from "./Components-InternDashBoard/InternDashboard.jsx";
import { AdminProfile } from "./Componnets-AdminDashBoard/AdminProfile.jsx"

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/intern-login",
    element: <InternLogin />,
  },
  {
    path: "/hr-registration",
    element: <HrRegistration />,
  },
  {
    path: "/mentor-registration",
    element: <MentorRegistration />,
  },
  {
    path: "/intern-registration",
    element: <InternRegistration />,
  },
  {
    path: "/company-registration",
    element: <CompanyRegistration />,
  },
  {
    path: "/admin-registration",
    element: <AdminRegistration />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/two-step-verification",
    element: <TwoStepVerification />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },
  {
    path: "/forgot-password-otp",
    element: <ForgotPasswordOTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

  {
    path: "/password-reset-success",
    element: <PasswordResetSuccess />,
  },
  {
    path: "/intern-dashboard",
    element: <InternDashboard />,
  },{
    path: "/admin-profile",
    element: <AdminProfile />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
