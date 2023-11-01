import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* <Route path="/yoga" element={<Yoga />} /> */}
    {/* <Route path="/scheduele" element={<Scheduele />} /> */}
    <Route path="/about" element={<About />} />
    {/* <Route path="/faq" element={<Faq />} /> */}
  </>
);
