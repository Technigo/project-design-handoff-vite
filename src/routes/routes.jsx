import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NewsPage } from "../pages/NewsPage";
import { InfoPage } from "../pages/InfoPage";

export const routes = (
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/info" element={<InfoPage />} />
    </>
)