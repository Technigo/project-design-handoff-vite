import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MobileNavLinks } from "./Navigation/MobileNavLinks";
import { Burger } from "./Navigation/Burger";
import "./header.css";
// import { DesktopNavLinks } from "./Navigation/DesktopNavLinks";

export const Header = () => {
    // State to control whether the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = window.innerWidth;

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="site-header">
            <Link to={"/"}><Logo text={"Align"} /></Link>
            {windowWidth < 834 ? <Burger onClick={toggleMenu} /> : null}
            {windowWidth < 834 && isOpen ? <MobileNavLinks /> : null}
        </header>
    )
}
