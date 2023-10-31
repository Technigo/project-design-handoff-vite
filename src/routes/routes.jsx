import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { WantMore } from "../pages/WantMore/WantMore";
import { NotFound } from "../pages/NotFound/NotFound";

const routes = (
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/wantmore" element={<WantMore/>}></Route>
    <Route path="*" element={<NotFound />}></Route>
    </>
);

export default routes;