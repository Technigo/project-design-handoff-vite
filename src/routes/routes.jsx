import { Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
  </>
);
