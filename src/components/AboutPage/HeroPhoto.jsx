import React from 'react';
import heroImage from '../../assets/AntiSocialSquadFC1.png';


const HeroImage = () => {
    return (
        <div className="hero-image">
            <img src={heroImage} alt="About Us Hero" />
            {/* Add any overlay text or other elements here */}
        </div>
    );
};

export default HeroImage;
