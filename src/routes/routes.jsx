import { Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MyPages } from "../pages/MyPages";
import { AtHome } from "../pages/AtHome";
import { Studio } from "../pages/Studio";
import { AboutUs } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import { MeetTheTeachers } from "../pages/MeetTheTeachers";
// import { Search } from "../pages/Search";
import { SignUp } from "../pages/SignUp";
import { Classes } from "../pages/Classes";
import { VirtualClasses } from "../pages/VirtualClasses";
import { HelpCenter } from "../pages/HelpCenter";
import { Faq } from "../pages/Faq";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { ErrorPage } from "../pages/ErrorPage";

// Defining the routes, these are the pages that will be mounted when the user navigates to a specific path
export const routes = (
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-pages" element={<MyPages />} />

        <Route path="/at-home" element={<AtHome />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/meet-the-teachers" element={<MeetTheTeachers />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/virtual-classes" element={<VirtualClasses />} />
        <Route path="*" element={<ErrorPage />} />
    </>
)
