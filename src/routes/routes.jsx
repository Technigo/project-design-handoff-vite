import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);

// export default routes;
