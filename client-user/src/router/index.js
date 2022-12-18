import RootPage from "../views.js/RootPage";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../views.js/LandingPage";
import ProductDetailPage from "../views.js/ProductDetailPage";
import NotFoundPage from "../views.js/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <LandingPage />
      },
      {
        path: "product/:slug",
        element: <ProductDetailPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
])