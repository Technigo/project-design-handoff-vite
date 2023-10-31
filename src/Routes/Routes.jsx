import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { PageNotFound } from "../Pages/PageNotFound";

export const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<PageNotFound />} />
  </>
);
