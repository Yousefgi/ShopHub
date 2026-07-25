import MainLayout from "../../layouts/MainLayout";

import ProtectedRoute from "../../components/guards/ProtectedRoute";

import { lazy } from "react";

const HomePage = lazy(() => import("../../features/home/pages/HomePage"));
const ProductsPage = lazy(
  () => import("../../features/products/pages/ProductsPage"),
);
const ProductDetailsPage = lazy(
  () => import("../../features/products/pages/ProductDetailsPage"),
);
const CartPage = lazy(() => import("../../features/cart/pages/CartPage"));
const CheckoutPage = lazy(
  () => import("../../features/checkout/pages/CheckoutPage"),
);
const MyOrdersPage = lazy(
  () => import("../../features/orders/pages/MyOrdersPage"),
);
const OrderDetailsPage = lazy(
  () => import("../../features/orders/pages/OrderDetailsPage"),
);
const ProfilePage = lazy(
  () => import("../../features/profile/pages/ProfilePage"),
);

export const publicRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "products",
      element: <ProductsPage />,
    },
    {
      path: "products/:id",
      element: <ProductDetailsPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    {
      path: "checkout",
      element: (
        <ProtectedRoute>
          <CheckoutPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "orders",
      element: (
        <ProtectedRoute>
          <MyOrdersPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "orders/:id",
      element: (
        <ProtectedRoute>
          <OrderDetailsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "profile",
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },
  ],
};
