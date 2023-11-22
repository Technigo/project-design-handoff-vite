import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Events } from "../pages/Events";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/Events" element={<Events />} />
  </>
);

export default routes;
