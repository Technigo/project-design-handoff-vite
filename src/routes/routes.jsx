//Defines and set up routes using React Router.

import { Route } from "react-router-dom"
import { LandingP } from "../pages/LandingP"
import { AboutP } from "../pages/AboutP"
//import { ErrorP } from "src/pages/ErrorP" This is commented but left in learning purpuses.


// Defining routes
export const routes = (
    <>
        <Route path="/" element={<LandingP />}></Route>
        <Route path="/about" element={<AboutP />}></Route>
    </>
)


//<Route path="*" element={<ErrorP />} /> Left in learning purposes.

