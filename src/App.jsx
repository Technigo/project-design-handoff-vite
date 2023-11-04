import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
