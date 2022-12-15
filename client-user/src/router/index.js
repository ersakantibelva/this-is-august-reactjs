import RootPage from "../views.js/RootPage";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../views.js/LandingPage";

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
        path: "category/:category",
        element: <h1>per category</h1>
      },
      {
        path: "product/:slug",
        element: <h1>per product</h1>
      }
    ]
  }
])