import { Hero } from "../components/ScenesHome/Hero";
import { KindWords } from "../components/ScenesHome/KindWords";
import { Courses } from "../components/ScenesHome/Courses";
import { Membership } from "../components/ScenesHome/Membership";
import { Instagram } from "../components/ScenesHome/Instagram";
import { Footer } from "../components/Footer"

import React from "react";

export const Home = () => {
    return (
        <>
            <Hero />
            <KindWords />
            <Courses />
            <Membership />
            <Instagram />
        </>
    );
};
