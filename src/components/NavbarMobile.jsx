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
            <img src="/menu.png" alt="menu" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />

            <img src="/logo.png" alt="logo" />

            <img src="/search.png" alt="search" style={{ width: '24px', height: '24px', margin: '0', padding: '10px' }} />
        </div>
    );
}

export default NavbarMobile;
