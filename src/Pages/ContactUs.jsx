import React from 'react';
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import NavbarMobile from "../components/NavbarMobile";

const ContactUs = () => {

    const isMobile = useMediaQuery({ maxWidth: 393 });
    const isTablet = useMediaQuery({ minWidth: 394, maxWidth: 834 });

    return (

        <div className="main">
            {isMobile ? (
                <NavbarMobile />
            ) : isTablet ? (
                <NavbarMobile />
            ) : (
                <Navbar />
            )}
            <ContactForm />
            <Footer />
        </div>

    )

}

export default ContactUs; 