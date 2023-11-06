import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../public/Logotype.svg";
import "./Header.css";


export const Header = () => {

    const { t } = useTranslation()

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
                    <img src={t("header.search.searchIcon")} alt={t("header.search.searchIconAlt")} className="search-icon" />
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    );
};
