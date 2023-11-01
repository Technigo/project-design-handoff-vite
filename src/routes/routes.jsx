import { Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="*" element={<NotFoundPage />}></Route>
  </>
);
