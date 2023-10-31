import { Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { WantMorePage } from "../pages/wantMore/WantMorePage";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/want-more" element={<WantMorePage />}></Route>
    <Route path="*" element={<NotFoundPage />}></Route>
  </>
);
