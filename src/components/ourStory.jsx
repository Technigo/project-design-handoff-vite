import React from 'react';
import ourYogaImage from '../assets/image/ourStory.png';
import '../styles/ourStory.css';

export const OurStory = () => {
    return (
        <React.Fragment>
            <div className="ourStory-Welcome-wrapper">
                <div className="ourStory-Welcome-text">
                    <div className="ourStory-Welcome-text-desc-wrapper">
                        <h1 className="ourStory-title">OUR STORY</h1>
                        <p className="ourStory-title-desc">In the heart of Stockholm, You&rsquo;ll find serenity Yoga. Our Journey began in 2022 in MariaTorget, Sodermalm, and expanded to Hornstull&rsquo;s Strand in 2023.</p>
                        <p className="ourStory-title-desc">We&rsquo;re all about yoga and holistic wellness. Our two studios are more than just places to practice, they&rsquo;re where you can discover inner peace, balance and strength.</p>
                        <p className="ourStory-title-desc">At Serenity Yoga, We&rsquo;re like a family. We&rsquo;re committed to making yoga a transformative experience for everyone, creating a safe and inclusive community. join us as we continue to this simple yet beautiful story.</p>
                    </div>
                    <img className="ourStory-image" src={ourYogaImage} alt="our yoga" />
                </div>
            </div>
        </React.Fragment>
    )
}