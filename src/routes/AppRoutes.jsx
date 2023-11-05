import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />

        </Routes>
    )
}