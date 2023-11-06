import { Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
export const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </>
);
