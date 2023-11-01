import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MobileNavLinks } from "./Navigation/MobileNavLinks";
// import { Burger } from "./Navigation/Burger";
import "./header.css";
import { slide as Menu } from "react-burger-menu"; // Import the Menu component
import { DesktopNavLinks } from "./Navigation/DesktopNavLinks";

export const Header = () => {
    // State to control whether the menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Function to close the menu
    const closeMenu = () => {
        // Set isOpen to false to close the menu
        setMenuOpen(false);
    };

    // Add event listener to update windowWidth in state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="site-header">
            <Link to={"/"}><Logo text={"Align"} /></Link>
            {windowWidth < 834 ? ( // Render the Menu component and burger icon for smaller screens
                <Menu
                    right
                    isOpen={menuOpen}
                    onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                    customBurgerIcon={
                        !menuOpen && (
                            <img
                                className="burger-bars"
                                src="./assets/icons/hamburger-menu.svg"
                                alt="Hamburger menu icon"
                            />
                        )
                    }
                    customCrossIcon={false}
                >
                    <MobileNavLinks onClick={closeMenu} />
                    <div className="close-menu" onClick={closeMenu}>
                        <img src="./assets/icons/cross.svg" alt="Close menu icon" />
                    </div>
                </Menu>
            ) : (
                <DesktopNavLinks /> // Render desktop links for larger screens
            )}
        </header>
    )
}
