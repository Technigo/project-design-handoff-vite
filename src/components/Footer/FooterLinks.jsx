import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";

export const FooterLinks = () => {
    const { t } = useTranslation();

    return (
        <nav className="footer-links">
            <ul className="studio">
                <h4>{t("landingPage.footer.studio.heading")}</h4>
                <li><Link to={"/about-us"}>{t("landingPage.footer.studio.aboutUs")}</Link></li>
                <li><Link to={"/meet-the-teachers"}>{t("landingPage.footer.studio.teachers")}</Link></li>
                <li><Link to={"/classes"}>{t("landingPage.footer.studio.classes")}</Link></li>
            </ul>
            <ul className="support">
                <h4>{t("landingPage.footer.support.heading")}</h4>
                <li><Link to={"/help-center"}>{t("landingPage.footer.support.help")}</Link></li>
                <li><Link to={"/contact-us"}>{t("landingPage.footer.support.contact")}</Link></li>
                <li><Link to={"/faq"}>{t("landingPage.footer.support.faq")}</Link></li>
                <li><Link to={"/privacy"}>{t("landingPage.footer.support.privacy")}</Link></li>
            </ul>

        </nav>
    )
}