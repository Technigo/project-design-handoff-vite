import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const routes = (
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path="" element="" />
        <Route path="" element="" />
    </>
)