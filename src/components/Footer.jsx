import React from "react";
import "./css/footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-links">
                <Link to="/contact">Contact Us</Link>
                <a href="#">Privacy & Cookie Settings</a>
                <Link to="/about">About Us</Link>
                <a href="#">Language</a>
            </div>
        </div>
    )
}

export default Footer; 