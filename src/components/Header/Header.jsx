import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { Button } from "../Links/Button";
import { useTranslation } from "react-i18next";
import "./header.css";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <Link to={"/"}><Logo text={"Align"} /></Link>
            <div className="nav-and-button">
                <NavigationLinks />
                <Button className={"brown"} text={t("landingPage.navbar.button")} />
            </div>
        </header>
    )
}
