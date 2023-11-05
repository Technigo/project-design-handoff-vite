import React from 'react';
import aboutUsImage from '../assets/image/HeroImage.png';
import LogoSVG from '../assets/image/logotype.svg';
import '../styles/aboutUsImage.css';
import { MissionValues } from "./missionValues.jsx";
import { OurStory } from "./ourStory.jsx";
import { OurStudio } from "./ourStudio.jsx";
import { WeHere } from "./weHere.jsx";

export const AboutUsImage = () => {
    return (
        <React.Fragment>
        <div className='about-image-wrapper'>
            {/* <div>
                <img className="logo-image"  src={LogoSVG} alt="logo" />
            </div> */}
            <div>
                <img className="aboutus-image" id="aboutUsImage" src={aboutUsImage} alt="about us" />
            </div>
        </div>
        
        </React.Fragment>
    )
}