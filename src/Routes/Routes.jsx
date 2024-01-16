import { Route } from "react-router-dom";
import { Home } from "../Component/Old component/Pages/Home";
import { Classes } from "../Component/Old component/Pages/Classes";
import { PageNotFound } from "../Component/Old component/Pages/PageNotFound";

const routing = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="*" element={<PageNotFound />} />
  </>
);

export default routing