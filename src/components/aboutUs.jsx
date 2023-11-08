import React from "react";
import ourYogaImage from '../assets/image/aboutUs2.png';
import '../styles/aboutUs.css';

export const AboutUs = () => {
    return (
        <React.Fragment>
            <div className="ourYoga-Welcome-wrapper">
                <div className="ourYoga-Welcome-text">
                    <div className="ourYoga-Welcome-text-wrapper">
                        <h1 className="aboutUs-title">NEW TO YOGA?</h1>
                        <p className="ourYoga-Welcome-text-head">Start with a free trial session, and we&rsquo;ll help you begin your journey with confidence</p>
                        <button className="ourYoga-button">Book Now</button>
                    </div>
                    <div className="ourYoga-Welcome-text-desc-wrapper-main">
                        <img className="ourYoga-image" src={ourYogaImage} alt="our yoga" />
                        <div className="ourYoga-Welcome-text-desc-wrapper">
                            <h1 className="ourYoga-title">ABOUT US</h1>
                            <p className="ourYoga-title-desc">Serenity Yoga embarked on its journey at Mariatorget, Sodermalm in Stockholm in the summer of 2022. In the autumn of 2023, we expanded our presence with a second studio at Hornstull's Strand</p>
                            <button className="ourYoga-button-2">Discover Our Story</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}