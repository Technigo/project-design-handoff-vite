import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </>
);

// export default routes;
