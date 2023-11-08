import React, { useState } from 'react';
import aboutUsImage from '../assets/image/aboutUs.png';
import LogoSVG from '../assets/image/logotype.svg';
import SearchSVG from '../assets/image/Search.svg';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] =useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <React.Fragment>
            <div className="navbar-wrapper">
                <img className="serenity-logo" src={LogoSVG} alt="logo" />
                <div className={`navBar-list ${isMobileMenuOpen ? 'mobile-menu-open': ''} `}>
                <Link to="/AboutUs"  className="navBar_1">ABOUT US</Link>
                <Link to="/Explore"  className="navBar_2">EXPLORE</Link>
                <Link to="/Schedule"  className="navBar_3">SCHEDULE</Link>
                <Link to="/Prices"  className="navBar_4">PRICES</Link>
                </div>
                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    {/* <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="3" rx="1.5" fill="#38302A" />
                        <rect y="8" width="30" height="3" rx="1.5" fill="#38302A" />
                        <rect y="16" width="30" height="3" rx="1.5" fill="#38302A" />
                    </svg> */}
                    <div className="hamburger-search">
                        <img src={SearchSVG} alt="search logo" />
                        <div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
                    <div className='mobile-menu-item-wrapper'>
                    <div className='mobile-menu-item'>Our Mission and Values</div>
                    <div className='mobile-menu-item'>Our Story</div>
                    <div className='mobile-menu-item'>Our Studio</div>
                    <div className='mobile-menu-item'>Contact</div>
                    </div>
            </div>
        </React.Fragment>
    )
 }

