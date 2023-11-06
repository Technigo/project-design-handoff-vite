import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import "./Nav.css";

export const Nav = () => {

    //declaring useState hook to keep track of state of hamburger menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    //useRef: used to create reference to a DOM element or to store a mutable value that doesn't trigger a re-render.
    //the navRef is declared, later attached to the nav element. (line 41)
    const navRef = useRef(null);

    //func with event parameter, in this case 'click'.
    const handleOutsideClick = (event) => {
        //this if checks if a click occured outside the nav element, navRef is how the function accesses the nav element.
        //if the navRef is not null or undefined, and what was clicked (event.target) is not belonging to the nav element, 
        //close the menu!
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    //the useEffect adds an event listener to the whole document, and removes it.
    //I dont want the handleOutsideClick func to run everytime something other than nav is clicked.
    //useEffect is called when mounted or component is rerendered by the toggleMenu function.
    useEffect(() => {
        //when a click event is detected, call handleOutsideClick. 
        document.addEventListener("click", handleOutsideClick);
        //and remove the eventlistener. 
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const { t } = useTranslation();
    return (
        <nav ref={navRef}>
            <FiMenu
                className={`menu-icon ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            />
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <NavLink onClick={closeMenu} to="/">{t("header.navbar.schedule")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={closeMenu} to="/">{t("header.navbar.classes")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={closeMenu} to="/">{t("header.navbar.prices")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={closeMenu} to="/about">{t("header.navbar.about")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={closeMenu} to="/about">{t("header.navbar.contact")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={closeMenu} to="/">{t("header.navbar.logIn")}</NavLink>
                </li>
            </ul>
        </nav>
    );
};
