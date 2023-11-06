import React from 'react';
import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import { useTranslation } from 'react-i18next';
import "../Translation";

export const NavigationMenu = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <nav className="text-white text-base">
            <ul className="flex items-center justify-end">
                <li className="hover:shadow-yellow-box hidden mr-14 bg-black pl-3 pr-3 lg:flex mr-16">
                    <Link to="/about">{t("about")}</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-14 bg-black pl-3 pr-3 lg:flex mr-16 hover:shadow-yellow-box">
                    <Link to="/membership">{t("membership")}</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-14 bg-black pl-3 pr-3 lg:flex mr-16">
                    <Link to="/facilities">{t("facilities")}</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-14 bg-black pl-3 pr-3 lg:flex mr-16">
                    <Link to="/opening-hours">{t("openinghours")}</Link>
                </li>
                <li className="hidden md:inline-block lg:hover:shadow-yellow-box left-1 pl-3 pr-3 mt-0 mr-2 lg:mt-0 lg:mr-4 text-black border-solid border-2 border-black">

                    <Link to="/sign-in">{t("signIn")}</Link>
                </li>
                <div className="">
                    <img className="lg:hidden" src={HamburgerMenu} alt="Hamburger menu" />
                </div>
            </ul>
        </nav>
    );
};
