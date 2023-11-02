import { useState, useEffect } from "react";
import { Logo } from "../Header/Logo";
import { FooterLinks } from "./FooterLinks";
import { SubscribeSection } from "./SubscribeSection";
import { useTranslation } from "react-i18next";


export const Footer = () => {
    const { t, i18n } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Function to change the language of the website
    const changeLanguageFunction = (lng) => {
        i18n.changeLanguage(lng);
    }

    // Function to handle the change of language using the value of the select element in a dropdown menu
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguageFunction(selectedLanguage);
    }

    // Add event listener to update windowWidth in state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <footer>
            <section className="footer-wrapper">
                {/* Value={i18n.language} sets the value of the <select> element based on the current language that is being used */}
                <SubscribeSection />
                {windowWidth < 834 ? (
                    <>
                        <div className="language-and-social">
                            <div className="icon-group">
                                <a href="http://facebook.com"><img src="./assets/icons/facebook.svg" alt="Facebook icon" /></a>
                                <a href="http://facebook.com"><img src="./assets/icons/instagram.svg" alt="Instagram icon" /></a>
                                <a href="http://facebook.com"><img src="./assets/icons/twitter.svg" alt="Twitter icon" /></a>
                            </div>
                            <div className="language-selector">
                                <select onChange={handleLanguageChange} value={i18n.language}>
                                    <option value="en">{t("landingPage.footer.language.heading")}</option>
                                    <option value="en">{t("landingPage.footer.language.english")}</option>
                                    <option value="se">{t("landingPage.footer.language.swedish")}</option>
                                </select>
                            </div>
                        </div>
                        <FooterLinks />
                    </>
                ) : (
                    <section className="footer-subsection">
                        <div className="language-and-social">
                            <div className="icon-group">
                                <a href="http://facebook.com"><img src="./assets/icons/facebook.svg" alt="Facebook icon" /></a>
                                <a href="http://facebook.com"><img src="./assets/icons/instagram.svg" alt="Instagram icon" /></a>
                                <a href="http://facebook.com"><img src="./assets/icons/twitter.svg" alt="Twitter icon" /></a>
                            </div>
                        </div>
                        <div className="language-selector">
                            <FooterLinks />
                            <select className={"language-select"} onChange={handleLanguageChange} value={i18n.language}>
                                <option value="en">{t("landingPage.footer.language.heading")}</option>
                                <option value="en">{t("landingPage.footer.language.english")}</option>
                                <option value="se">{t("landingPage.footer.language.swedish")}</option>
                            </select>
                        </div>
                        <div className="info-section">
                            <Logo text={"Align Yoga Studio"} />
                            <div className="address">
                                <p>{t("landingPage.footer.address.street")}</p>
                                <p>{t("landingPage.footer.address.zip")}</p>
                                <p>{t("landingPage.footer.address.city")}</p>
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </footer>
    )
}
