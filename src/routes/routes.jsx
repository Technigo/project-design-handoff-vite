import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ContentPage } from "../pages/ContentPage";
import { ErrorPage } from "../pages/ErrorPage";

// Defining the routes, these are the pages that will be mounted when the user navigates to a specific path
export const routes = (
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/content-page" element={<ContentPage />} />
        <Route path="*" element={<ErrorPage />} />
    </>
)