import { createBrowserRouter, redirect } from "react-router-dom";
import ProductsPage from "../views/ProductsPage";
import AddProductsPage from "../views/AddProductsPage";
import EditProductsPage from "../views/EditProductsPage";
import CategoriesPage from "../views/CategoriesPage";
import AddCategoriesPage from "../views/AddCategoriesPage";
import EditCategoriesPage from "../views/EditCategoriesPage";
import RegisterPage from "../views/RegisterPage";
import Root from "../views/Root";
import LoginPage from "../views/LoginPage";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return redirect("/login");
      }
      return token;
    },
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/add",
        element: <AddProductsPage />,
      },
      {
        path: "products/edit/:id",
        element: <EditProductsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "categories/add",
        element: <AddCategoriesPage />,
      },
      {
        path: "categories/edit/:id",
        element: <EditCategoriesPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/products");
      }
      return token;
    },
  },
]);

export default router;
