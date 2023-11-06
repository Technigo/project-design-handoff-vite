import React from "react";
import { ContactWelcome } from "../components/ScenesAbout/ContactWelcome";
import { Founder } from "../components/ScenesAbout/Founder";
import { ContactForm } from "../components/ScenesAbout/ContactForm";


export const About = () => {
    return (
    <>
    <ContactWelcome />
    <Founder />
    <ContactForm />
    </>
    );
};
