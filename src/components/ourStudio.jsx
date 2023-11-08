import React from 'react';
import OurStudioImage from '../assets/image/ourStudio.png';
import '../styles/ourStudio.css';

export const OurStudio = () => {
    return (
        <React.Fragment>
            <div className="ourStudio-Welcome-wrapper">
                <div className="ourStudio-Welcome-text">
                <img className="ourStudio-image" src={OurStudioImage} alt="our studio" />
                    <div className="ourStudio-Welcome-text-desc-wrapper">
                        <h1 className="ourStudio-title">OUR STUDIOS FACILITATES</h1>
                        <ul>
                        <li className="ourStudio-title-desc">Spacious Practice Rooms. Our well-lit, tranquil spaces inspire a sense of serenity</li>
                        <li className="ourStudio-title-desc">Quality Yoga Props: We provide mats, blocks, bolster, and more for your practice</li>
                        <li className="ourStudio-title-desc">Clean and Hygenic: We maintain high standards of cleanliness using eco-friendly products.</li>
                        <li className="ourStudio-title-desc">Comfortable Lounge: Relax and connect with fellow yogis before and after class.</li>
                        <li className="ourStudio-title-desc">Changing and Shower Facilities: Freshen up with our convenient amenities</li>
                        <li className="ourStudio-title-desc">Relaxing Soundscapes: Enjoy calming soundscapes for an oasis of peace</li>
                        </ul>
                        <div className="ourStudio-button-wrapper">
                        <button className='ourStudio-button'>Book Now</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}