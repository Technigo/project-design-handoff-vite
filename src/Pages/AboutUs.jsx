import React from 'react';
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar.jsx";
import Articles from "../components/Articles.jsx";
import ArticlesMobile from "../components/ArticlesMobile.jsx";
import Footer from "../components/Footer.jsx";
import NavbarMobile from "../components/NavbarMobile";

const AboutUs = () => {

    const isMobile = useMediaQuery({ maxWidth: 393 });
    const isTablet = useMediaQuery({ minWidth: 394, maxWidth: 834 });

    return (
        <div className="main">
            {isMobile || isTablet ? (
                <NavbarMobile />
            ) : (
                <Navbar />
            )}

            {isMobile || isTablet ? (
                <ArticlesMobile />
            ) : (
                <Articles />
            )}

            <Footer />
        </div>
    )
}

export default AboutUs;
