import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About"
import { NotFound } from "../pages/NotFound/NotFound";

const routes = (
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="*" element={<NotFound />}></Route>
    </>
);

export default routes;