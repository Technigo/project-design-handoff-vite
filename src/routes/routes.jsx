import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";

export const routes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);

// export default routes;
