import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../features/home/pages/HomePage";
import ProductsPage from "../../features/products/pages/ProductsPage";

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
    ],
  },
];
