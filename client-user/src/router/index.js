import RootPage from "../views.js/RootPage";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../views.js/LandingPage";
import ProductDetailPage from "../views.js/ProductDetailPage";

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
      }
    ]
  }
])