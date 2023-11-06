import React, { useState } from "react";
import "./css/navbar.css";
import { Link } from 'react-router-dom';
import BurgerMenu from "./BurgerMenu"; // Import BurgerMenu without curly braces

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the menuOpen state when the menu icon is clicked
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Prevent the click event from propagating to the parent element
    const preventPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="navbar">
            <img
                src="/menu.png"
                alt="menu"
                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={toggleMenu} // Toggle the menu when the menu icon is clicked
            />

            <Link to="/"><img src="/logo.png" alt="logo" /></Link>

            <img
                src="/search.png"
                alt="search"
                style={{ width: '24px', height: '24px', margin: '0', padding: '10px' }}
            />

            {menuOpen && <div onClick={preventPropagation}><BurgerMenu /></div>} {/* Render BurgerMenu when menuOpen is true */}
        </div>
    );
}

export default NavbarMobile;
