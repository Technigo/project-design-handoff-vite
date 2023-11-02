import { Logo } from "../Header/Logo";
import { FooterLinks } from "./FooterLinks";
import { SubscribeSection } from "./SubscribeSection";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t, i18n } = useTranslation();

    // Function to change the language of the website
    const changeLanguageFunction = (lng) => {
        i18n.changeLanguage(lng);
    }

    // Function to handle the change of language using the value of the select element in a dropdown menu
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguageFunction(selectedLanguage);
    }

    return (
        <footer>
            {/* Value={i18n.language} sets the value of the <select> element based on the current language that is being used */}
            <SubscribeSection />
            <div className="language-and-social">
                <div className="icon-group">
                    <a href="http://facebook.com"><img src="./assets/icons/facebook.svg" alt="Facebook icon" /></a>
                    <a href="http://facebook.com"><img src="./assets/icons/instagram.svg" alt="Instagram icon" /></a>
                    <a href="http://facebook.com"><img src="./assets/icons/twitter.svg" alt="Twitter icon" /></a>
                </div>
                <select onChange={handleLanguageChange} value={i18n.language}>
                    <option value="en">{t("landingPage.footer.language.heading")}</option>
                    <option value="en">{t("landingPage.footer.language.english")}</option>
                    <option value="se">{t("landingPage.footer.language.swedish")}</option>
                </select>
            </div>
            <FooterLinks />

            <div>
                <Logo text={"Align Yoga Studio"} />
                <p>{t("landingPage.footer.address.street")}</p>
                <p>{t("landingPage.footer.address.zip")}</p>
                <p>{t("landingPage.footer.address.city")}</p>
            </div>
        </footer>
    )
}
