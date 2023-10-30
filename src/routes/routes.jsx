import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";
import { ContactUs } from "../Pages/ContactUs";

export const routes = () => {
  return (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
    </>
  )
}
