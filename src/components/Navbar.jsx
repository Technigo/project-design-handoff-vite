import React from 'react';
import "./css/navbar.css";

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
                <img className="globe" src="/globe.png" alt="ENG/SVE" />
            </div>
        </nav>
    );
};

export default Navbar;
