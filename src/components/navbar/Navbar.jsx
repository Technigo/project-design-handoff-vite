

import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className={styles.nav}>
            <svg className={styles.navBlackSvgBackground} xmlns="http://www.w3.org/2000/svg" width="428" height="181" viewBox="0 0 428 181" fill="none">
                <path d="M477 181C462.368 45.8483 -9 245.57 -9 -2H477V84V181Z" fill="#1D1C25" />
            </svg>

            <img
                className={styles.logo}
                src="/Images/YogaBalance.svg"
                alt="YogaBalance Logo"
            />    <img
                className={styles.logoText}
                src="/Images/YogaBalanceText.svg"
                alt="YogaBalance Text"
            />
            <div
                className={`${styles.menuIcon} ${isNavExpanded ? styles.open : ''}`}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <div className={`${styles.navLinks} ${isNavExpanded ? styles.active : ''}`}>
                <svg className={styles.navSvgBackground} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 532" preserveAspectRatio="none">
                    <path d="M0 0C236.904 17.8123 -128.96 532 305 532V0H0Z" stroke="#FFD075" stroke-width="1" fill="#612E77" />
                </svg>
                <NavLink to="/" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>SCHEDULE</NavLink>
                <NavLink to="/classes" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>CLASSES</NavLink>
                <NavLink to="/prices" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>PRICES</NavLink>
                <NavLink to="/about" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>ABOUT</NavLink>
                <NavLink to="/contact" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>CONTACT</NavLink>
                <NavLink to="/login" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>LOG IN</NavLink>
            </div>
        </nav >
    );
};

export default Navbar;
