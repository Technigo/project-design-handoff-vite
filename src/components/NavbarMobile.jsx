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
            <img src="/menu.png" alt="menu" style={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleMenuButtonClick} />
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

            <img src="/search.png" alt="search" style={{ width: '24px', height: '24px', margin: '0', padding: '10px' }} />
        </div>
    );
}

export default NavbarMobile;
