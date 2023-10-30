import { Route } from "react-router-dom"

import { Home } from "../Pages/Home"
import { About } from "../Pages/About"

export const routes = (
    <>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}> </Route>
    </>
)

