import { lazy } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import AdminRoute from "../../components/guards/AdminRoute";

const DashboardPage = lazy(
  () => import("../../features/admin/dashboard/pages/DashboardPage"),
);

const AdminProductsPage = lazy(
  () => import("../../features/admin/product/pages/AdminProductsPage"),
);

const AdminOrdersPage = lazy(
  () => import("../../features/admin/order/pages/AdminOrdersPage"),
);

const AdminCategoriesPage = lazy(
  () => import("../../features/admin/categories/pages/AdminCategoriesPage"),
);

export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  ),
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: "dashboard",
      element: <DashboardPage />,
    },
    {
      path: "products",
      element: <AdminProductsPage />,
    },
    {
      path: "orders",
      element: <AdminOrdersPage />,
    },
    {
      path: "categories",
      element: <AdminCategoriesPage />,
    },
  ],
};
