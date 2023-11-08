import React from 'react';
import ourYogaImage from '../assets/image/ourYoga.png';
import '../styles/stayInTouch.css';

export const StayInTouch = () => {
    return (
        <React.Fragment>
            <div className ="stayinTouch-page-wrapper">
                <h1 className="stayinTouch-page-title">Stay in touch with us</h1>
                <p className="stayinTouch-page-subtitle">Register your email address for news and updates from Serenity Yoga.</p>
                <input type="text" placeholder="Email address" className="stayinTouch-page-email" />
                <button className="stayinTouch-page-button">Subscribe</button>
                <div className="stayinTouch-page-dsc-wrapper">
                <p className="stayinTouch-page-dsc">By Signing up for our email list, you consent to the handling of your personal information in accordance with our terms and conditions.</p>
                </div>

            </div>
        
        </React.Fragment>
    )
}

