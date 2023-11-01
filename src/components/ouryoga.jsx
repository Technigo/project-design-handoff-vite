import React from 'react';
import ourYogaImage from '../assets/image/ourYoga.png';
import LogoSVG from '../assets/image/logotype.svg';
import '../styles/ouryoga.css';

export const OurYoga = () => {
    return (
        <React.Fragment>
            <div className="ourYoga-Welcome-wrapper">
                <div className="ourYoga-Welcome-text">
                    <div className="ourYoga-Welcome-text-wrapper">
                        <p className="ourYoga-Welcome-text-head">Welcome to our community of experienced teachers, where you&rsquo;ll find classes for all levels. Join us for our heartwarming events, including workshops, teacher training, and retreats</p>
                        <button className="ourYoga-button">View Our Offerings</button>
                    </div>
                    <div className="ourYoga-Welcome-text-desc-wrapper-main">
                        <img className="ourYoga-image" src={ourYogaImage} alt="our yoga" />
                        <div className="ourYoga-Welcome-text-desc-wrapper">
                            <h1 className="ourYoga-title">OUR YOGA</h1>
                            <p className="ourYoga-title-desc">No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!.</p>
                            <button className="ourYoga-button-2">Discover Our Classes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}