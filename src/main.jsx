import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalCarouselStyles } from "./components/StyledAbout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCarouselStyles />
    <App />
  </React.StrictMode>
);
