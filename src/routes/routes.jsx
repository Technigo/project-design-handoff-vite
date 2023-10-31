import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/AboutUs" element={<AboutUs />} />
  </>
);

export default routes;
