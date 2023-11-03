import { useState } from "react"
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./Nav.css";


export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const { t } = useTranslation();
    return (
        <nav>
            <FiMenu className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}/>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <NavLink to="/">{t("header.navbar.nav1")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("header.navbar.nav2")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("header.navbar.nav3")}</NavLink>
                </li>
                <li>
                    <NavLink to="/about">{t("header.navbar.nav4")}</NavLink>
                </li>
                <li>
                    <NavLink to="/about">{t("header.navbar.nav5")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("header.navbar.nav6")}</NavLink>
                </li>
            </ul>
        </nav>
    );
};
