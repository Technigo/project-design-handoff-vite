import React from 'react';
import Header from './Header';
import HeroImage from './HeroImage';
import Location from './Location';
import Membership from './Membership';
import Features from './Features';
import Footer from '../Footer';

const StartPage = () => {
    return (
        <div>
            <Header />
            <HeroImage />
            <Location />
            <Membership />
            <Features />
            <Footer />
        </div>
    );
};

export default StartPage;
