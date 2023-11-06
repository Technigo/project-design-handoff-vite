import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";

import searchIcon from "../../public/assets/searchIcon.svg";
import logo from "../../public/Logotype.svg";
import "./Header.css";
import { t } from "i18next";

export const Header = () => {
    return (
        <header>
            <div className="header-content-wrapper">
                <div className="logotype-logo-wrapper">
                    <Link to="/">
                        <img className="logo-img" src={logo} alt="Logo" />
                    </Link>
                    <Link to="/">
                        <p className="header-logotype">YogaBalance</p>
                    </Link>
                </div>
                <div className="header-search-nav-container">
                    <div className="search-container">
                    <input className="search-bar" type="text" placeholder={t("header.search.placeholder")} />
                    <img src={searchIcon} className="search-icon" />
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    );
};
