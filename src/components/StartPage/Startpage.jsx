import React from 'react';
import NavBar from './NavBar';
import HeroImage from './HeroImage';
import Location from './Location';
import Membership from './Membership';
import Features from './Features';
import Footer from '../Footer';

const StartPage = () => {
    return (
        <div>
            <NavBar/>
            <HeroImage />
            <Membership />
            <Features />
            <Location />
            <Footer />
        </div>
    );
};

export default StartPage;
