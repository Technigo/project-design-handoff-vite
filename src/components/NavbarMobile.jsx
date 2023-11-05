import React, { useState } from "react";
import "./css/navbar.css";
import { HamburgerMenu } from "./HamburgerMenu"; // Import the HamburgerMenu component

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the menuOpen state when the menu icon is clicked
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <img
                src="/menu.png"
                alt="menu"
                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={toggleMenu} // Toggle the menu when the menu icon is clicked
            />

            <img src="/logo.png" alt="logo" />

            <img
                src="/search.png"
                alt="search"
                style={{ width: '24px', height: '24px', margin: '0', padding: '10px' }}
            />

            {menuOpen && <HamburgerMenu />} {/* Render HamburgerMenu when menuOpen is true */}
        </div>
    );
}

export default NavbarMobile;
