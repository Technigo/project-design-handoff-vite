import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import "./Nav.css";

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    <NavLink onClick={toggleMenu} to="/">{t("header.navbar.schedule")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={toggleMenu} to="/">{t("header.navbar.classes")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={toggleMenu} to="/">{t("header.navbar.prices")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={toggleMenu} to="/about">{t("header.navbar.about")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={toggleMenu} to="/about">{t("header.navbar.contact")}</NavLink>
                </li>
                <img
                    className="line"
                    src={t("header.navbar.line")}
                    alt={t("header.navbar.lineAlt")}
                />
                <li>
                    <NavLink onClick={toggleMenu} to="/">{t("header.navbar.logIn")}</NavLink>
                </li>
            </ul>
        </nav>
    );
};
