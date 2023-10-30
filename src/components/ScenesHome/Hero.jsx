import React from "react";
import heroimage from "../../../public/hero-image.png";

export const Hero = () => {
    return (
        <section className="hero-section">
            <img src={heroimage} alt="Picture of yoga mat being rolled out." />
            <h1>Yoga and meditation for women</h1>
            <h3>We help you stay vigorous in mind & body during menopause</h3>
            <button className="filled">Find yoga class</button>
            <button className="transparent">Become a member</button>
        </section>
    );
};
