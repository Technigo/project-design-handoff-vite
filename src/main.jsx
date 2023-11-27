import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";
import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { Error } from "./components/ui/Error/Error.jsx";

import "./styles/index.scss";
import "./styles/reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: "/contact", element: <AboutPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
