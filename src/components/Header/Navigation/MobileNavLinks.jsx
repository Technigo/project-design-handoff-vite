import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navlinks.css";

export const MobileNavLinks = ({ onClick }) => {
    // State to control whether the menu is open or closed
    const [isOpen, setIsOpen] = useState(true);

    // Function to toggle the menu
    const toggleClose = () => {
        setIsOpen(false);
    };

    const { t } = useTranslation();

    // If the mobile menu is closed (isOpen is false), return null
    if (!isOpen) {
        return null;
    }

    return (
        <nav>
            <ul className="mobile-links">
                <img src="./assets/icons/cross.svg" alt="Close menu icon" className="close-menu" onClick={toggleClose} />
                <div className="mobile-links-container">
                    <li onClick={onClick}><NavLink to={"/my-pages"}>{t("landingPage.navbar.button")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/sign-up"}>{t("landingPage.hero.heroButton")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/at-home"}>{t("landingPage.navbar.nav1")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/studio"}>{t("landingPage.navbar.nav2")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/about-us"}>{t("landingPage.navbar.nav4")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/contact-us"}>{t("landingPage.navbar.nav5")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/meet-the-teachers"}>{t("landingPage.navbar.nav3")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/faq"}>{t("landingPage.footer.support.faq")}</NavLink></li>
                    <li onClick={onClick}><NavLink to={"/my-pages"}>{t("landingPage.navbar.my-page")}</NavLink></li>
                </div>
            </ul>
        </nav>
    )
}