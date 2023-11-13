import { Header } from '../components/Layout/layoutHomePage/hero/header';
import { Testimonials } from '../components/Layout/layoutHomePage/clientTestimonials/testimonials';
import { Courses } from '../components/Layout/layoutHomePage/courses/courses';
import { Membership } from '../components/Layout/layoutHomePage/membership/membership';
import { Instagram } from '../components/Layout/layoutHomePage/instagram/instagram'
import style from './Home.module.css';

import React from "react";

export const Home = () => {
    return (
        <div className={style.homeWrapper}>
            <Header />
            <Testimonials />
            <Courses />
            <Membership />
            <Instagram />
        </div>
    );
};