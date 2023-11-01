import React from "react";
import heroimage from "../../../public/hero-image.png";
import "./Hero.css";
import { Button } from "../Button/Button";
import styled from "styled-components";

export const Hero = () => {

    const heading1 ="Yoga and meditation for women";
    const subHeading3 ="We help you stay vigorous in mind & body during menopause"; 

    return (
        <section className="hero-section">
            <div className="hero-content-wrapper">
                <img
                    className="oval-image"
                    src={heroimage}
                    alt="Picture of yoga mat being rolled out."
                />
                <h1>{heading1}</h1>
                <h3>{subHeading3}</h3>
                <div className="hero-btn-container">
                <Button>Find yoga class</Button>
                <Button secondary="true">Become a member</Button>
                </div>
            </div>
        </section>
    );
};
