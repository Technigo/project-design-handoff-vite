import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Events } from "../pages/Events";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
  </>
);

export default routes;
