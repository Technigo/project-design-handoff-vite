import { Route } from "react-router-dom";
import { StartPage } from "../Pages/Startpage";
import { AboutUsPage } from "../Pages/AboutUsPage";

export const routes = (
  <>
    {/* ------- Page Routes ------- */}
    <Route path="/" element={<StartPage />} />
    <Route path="/aboutus-page" element={<AboutUsPage />} />
  </>
);
