import React, { useState } from "react";
import "./css/navbar.css";
import { slide as Menu } from 'react-burger-menu';

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <button onClick={handleMenuButtonClick}><img src="/menu.png" style={{ width: '24px', height: '24px' }} /></button>
            <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
                <a id="home" className="menu-item" href="/">
                    Home
                </a>
                <a id="videos" className="menu-item" href="/videos">
                    Videos
                </a>
                <a id="workout" className="menu-item" href="/workout">
                    Workout Plan
                </a>
                <a id="tracker" className="menu-item" href="/tracker">
                    Tracker
                </a>
                <a id="favorites" className="menu-item" href="/favorites">
                    Favorites
                </a>
            </Menu>

            <img src="/logo.png" alt="logo" />

            <img src="/search.png" alt="search" />
        </div>
    );
}

export default NavbarMobile;
