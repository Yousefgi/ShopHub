import { lazy } from "react";

import AuthLayout from "../../layouts/AuthLayout";

import GuestRoute from "../../components/guards/GuestRoute";

const LoginPage = lazy(() => import("../../features/auth/pages/LoginPage"));
const RegisterPage = lazy(
  () => import("../../features/auth/pages/RegisterPage"),
);

export const authRoutes = {
  path: "/",
  element: (
    <GuestRoute>
      <AuthLayout />
    </GuestRoute>
  ),
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};
