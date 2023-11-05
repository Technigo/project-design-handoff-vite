import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Classes } from "../Pages/Classes";
import { PageNotFound } from "../Pages/PageNotFound";

const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="*" element={<PageNotFound />} />
  </>
);

export default routing