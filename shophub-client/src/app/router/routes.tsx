import { publicRoutes } from "./public.routes";
import { authRoutes } from "./auth.routes";
import { adminRoutes } from "./admin.routes";

import NotFoundPage from "../../features/errors/pages/NotFoundPage";

export const routes = [
  publicRoutes,
  authRoutes,
  adminRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
