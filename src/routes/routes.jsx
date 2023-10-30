import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { AtHome } from "../pages/AtHome";
import { Studio } from "../pages/Studio";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { MeetTheTeachers } from "../pages/MeetTheTeachers";
// import { Search } from "../pages/Search";
import { SignUp } from "../pages/SignUp";

import { ErrorPage } from "../pages/ErrorPage";

// Defining the routes, these are the pages that will be mounted when the user navigates to a specific path
export const routes = (
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/at-home" element={<AtHome />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/meet-the-teachers" element={<MeetTheTeachers />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
    </>
)