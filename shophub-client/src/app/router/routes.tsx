import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../features/home/pages/HomePage";
import ProductsPage from "../../features/products/pages/ProductsPage";
import ProductDetailsPage from "../../features/products/pages/ProductDetailsPage";
import CartPage from "../../features/cart/pages/CartPage";
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
    ],
  },
];
