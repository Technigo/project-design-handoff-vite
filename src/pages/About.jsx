import React from "react";
import { HeaderAbout } from '../components/Layout/layoutAboutPage/hero/headerAbout';
import { Founder } from '../components/Layout/layoutAboutPage/founder/founder'
import { ContactForm } from '../components/Layout/layoutAboutPage/contactForm/contactForm'


export const About = () => {
    return (
        <>
            <HeaderAbout />
            <Founder />
            <ContactForm />
        </>
    );
};