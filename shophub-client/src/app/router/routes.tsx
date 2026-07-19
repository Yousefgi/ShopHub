import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../features/home/pages/HomePage";
import ProductsPage from "../../features/products/pages/ProductsPage";
import ProductDetailsPage from "../../features/products/pages/ProductDetailsPage";
import CartPage from "../../features/cart/pages/CartPage";
import LoginPage from "../../features/auth/pages/LoginPage";
import AuthLayout from "../../layouts/AuthLayout";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import CheckoutPage from "../../features/checkout/pages/CheckoutPage";
import MyOrdersPage from "../../features/orders/pages/MyOrdersPage";
import OrderDetailsPage from "../../features/orders/pages/OrderDetailsPage";
export const routes = [
  {
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
        element: <CheckoutPage />,
      },
      {
        path: "orders",
        element: <MyOrdersPage />,
      },
      {
        path: "orders/:id",
        element: <OrderDetailsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
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
  },
];
