import React from "react";
import LogoSVG from '../assets/image/logotype.svg';
import LanguangeShifter from '../assets/image/languageshifter.svg';
import Facebook from '../assets/image/facebook.svg';
import Instagram from '../assets/image/instagram.svg';
import '../styles/ContactFootNote2.css';

export const ContactFootNote2 = () => {
    return (
        <React.Fragment>
            <div className="contactFootNote-row-wrapper">
                <div className="contactFootNote-col-1">
                    <p className="contactFootNote-contact">CONTACT</p>
                    <p className="contactFootNote-contact">TERMS</p>
                    <p className="contactFootNote-contact">FAQ</p>
                    <div className="contactFootNote-row-1">
                        <img className="contactFootNote-row-image-1" src={Facebook} alt="logo" />
                        <img className="contactFootNote-row-image-2" src={Instagram} alt="logo" />
                        <img className="contactFootNote-row-image-3" src={LanguangeShifter} alt="logo" />
                    </div>
                </div>
                <div className="contactFootNote-col-2">
                    <img className="contactFootNote-logo" src={LogoSVG} alt="logo" />
                </div>
                <div className="contactFootNote-col-3">
                    <div>
                        <h2>Serenity Yoga Mariatorget</h2>
                        <p>Address: Wollmar Yxtullsgatan 4,</p>
                        <p>Stockholm</p>
                    </div>
                    <div>
                        <h2>Serenity Yoga Hornstull</h2>
                        <p>Address: Hornstulls Strand 6,</p>
                        <p>Stockholm</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
