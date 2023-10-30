
//import { ErrorP } from "src/pages/ErrorP"
import { Route } from "react-router-dom"
import { LandingP } from "../pages/LandingP"
import { AboutP } from "../pages/AboutP"

// Defining routes
export const routes = (
    <>
        <Route path="/" element={<LandingP />} />
        <Route path="/about" element={<AboutP />} />
    </>
)


//<Route path="*" element={<ErrorP />} />