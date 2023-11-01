// routes.js
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Information} from "../pages/Information";


const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/information" element={<Information />} />

  </>
);

export default routes;