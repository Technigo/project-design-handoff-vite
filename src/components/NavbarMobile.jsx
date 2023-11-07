import React, { useState } from "react";
import "./css/navbar.css";
import { Link } from 'react-router-dom';
import BurgerMenu from "./BurgerMenu";

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const preventPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="navbar">
            <img
                src="/menu.png"
                alt="menu"
                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={toggleMenu}
            />

            {menuOpen && <div onClick={preventPropagation}><BurgerMenu /></div>}

            <Link to="/"><img src="/logo.png" alt="logo" /></Link>

            <img
                src="/search.png"
                alt="search"
                style={{ width: '24px', height: '24px', margin: '0', padding: '10px' }}
            />
        </div>
    );
}

export default NavbarMobile;
