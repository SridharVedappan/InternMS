import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Login } from "./Components-LoginPage/Login";
import { HrRegistration } from "./Components-Registration/HrRegistration";
import { TwoStepVerification } from "./Components-LoginPage/TwoStepVerification";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { VerificationCode } from "./Components-LoginPage/VerificationCode";
import { ForgotPasswordOTP } from "./Components-LoginPage/ForgotPasswordOTP";
import { ResetPassword } from "./Components-LoginPage/ResetPassword";
import { PasswordResetSuccess } from "./Components-LoginPage/PasswordResetSuccess";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hr-registration",
    element: <HrRegistration />,
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
  ,
  {
    path: "/password-reset-success",
    element: <PasswordResetSuccess />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
