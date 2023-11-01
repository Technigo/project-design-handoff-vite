import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Classes } from "../Pages/Classes";
import { Prices } from "../Pages/Prices";
import { PageNotFound } from "../Pages/PageNotFound";

export const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Classes />} />
    <Route path="/prices" element={<Prices />} />
    <Route path="*" element={<PageNotFound />} />
  </>
);
