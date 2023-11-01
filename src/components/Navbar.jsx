import React from 'react';
import "./css/navbar.css";
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {


    return (

        <nav>

            <img src="/logo.png" alt="logo" />
            <div className="nav-links">
                <a href="#">Videos</a>
                <a href="#">Workout Plan</a>
                <a href="#">Tracker</a>
                <a href="#">Favorites</a>
            </div>
            <div className="search">
                <div className="search-container">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <button className="search-button">
                        <img src="/search.png" alt="search" />
                    </button>
                </div>
                <LanguageSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
