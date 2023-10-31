import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { slide as Menu } from "react-burger-menu";
import "./header.css";

export const NavigationLinks = () => {
    const { t } = useTranslation();

    return (

        <nav>
            <ul>
                <li><NavLink to={"/at-home"}>{t("landingPage.navbar.nav1")}</NavLink></li>
                <li><NavLink to={"/studio"}>{t("landingPage.navbar.nav2")}</NavLink></li>
                <li><NavLink to={"/meet-the-teachers"}>{t("landingPage.navbar.nav3")}</NavLink></li>
                <li><NavLink to={"/about-us"}>{t("landingPage.navbar.nav4")}</NavLink></li>
                <li><NavLink to={"/contact-us"}>{t("landingPage.navbar.nav5")}</NavLink></li>
                <li><NavLink to={"#"}>{t("landingPage.navbar.nav6")}</NavLink></li>
                <li><NavLink to={"/sign-up"}>{t("landingPage.navbar.nav7")}</NavLink></li>
            </ul>
        </nav>

    )
}