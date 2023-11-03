import { useState, useEffect } from "react";
import { Logo } from "../Header/Logo";
import { FooterLinks } from "./FooterLinks";
import { SubscribeSection } from "./SubscribeSection";
import { useTranslation } from "react-i18next";
import ukFlagIcon from '/assets/icons/united-kingdom.png';

// Component for the footer
export const Footer = () => {
    // Get the translation function from the i18next hook
    const { t, i18n } = useTranslation();
    // State to store the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // State to control whether the flag icon should be shown or not
    const [showFlagIcon, setShowFlagIcon] = useState(true);

    // Function to change the language of the website
    const changeLanguageFunction = (lng) => {
        i18n.changeLanguage(lng);
    }

    // Function to handle the change of language using the value of the select element in a dropdown menu
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguageFunction(selectedLanguage);
        // Check if the selected language is not the default language ("en")
        setShowFlagIcon(selectedLanguage === "en");
    }

    // Add event listener to update windowWidth in state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        // Remove event listener when component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <footer>
            <section className="footer-wrapper">
                {/* Mounts the subscribe section  */}
                <SubscribeSection />
                {/* Renders one layout on smaller screens and an other on larger screens. I wanted to change the way I render content here, and do it differently, but time ran out. I had to use a little absolute positioning in the CSS because desktop was hard to style, which I regret. NExt time I will layout the footer in an other way */}
                {windowWidth < 834 ? (
                    <>
                        <div className="language-and-social">
                            <div className="icon-group">
                                <a href="http://facebook.com"><img src="./assets/icons/facebook.svg" alt="Facebook icon" /></a>
                                <a href="https://www.instagram.com/"><img src="./assets/icons/instagram.svg" alt="Instagram icon" /></a>
                                <a id="twitter-icon" href="https://twitter.com/"><img src="./assets/icons/twitter.svg" alt="Twitter icon" /></a>
                            </div>
                            <div className="language-selector">
                                <select className="custom-select" onChange={handleLanguageChange} value={i18n.language}>
                                    {/* <option value="en">&nbsp;{t("landingPage.footer.language.heading")}</option> */}
                                    <option value="en">&nbsp;{t("landingPage.footer.language.english")}</option>
                                    <option value="se">{t("landingPage.footer.language.swedish")}</option>
                                </select>
                                {showFlagIcon && (
                                    <div className="uk-flag-icon">
                                        <img src={ukFlagIcon} alt="UK Flag icon" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <FooterLinks />
                    </>
                ) : (
                    <section className="footer-subsection">
                        <div className="language-and-social">
                            <div className="icon-group">
                                <a href="http://facebook.com"><img src="./assets/icons/facebook.svg" alt="Facebook icon" /></a>
                                <a href="https://www.instagram.com/"><img src="./assets/icons/instagram.svg" alt="Instagram icon" /></a>
                                <a id="twitter-icon" href="https://twitter.com/"><img src="./assets/icons/twitter.svg" alt="Twitter icon" /></a>
                            </div>
                        </div>
                        <div className="language-selector">
                            <FooterLinks />
                            <select className={"language-select custom-select"} onChange={handleLanguageChange} value={i18n.language}>
                                {/* <option value="en">&nbsp;{t("landingPage.footer.language.heading")}</option> */}
                                <option value="en">&nbsp;{t("landingPage.footer.language.english")}</option>
                                <option value="se">{t("landingPage.footer.language.swedish")}</option>
                            </select>
                            {showFlagIcon && (
                                <div className="uk-flag-icon">
                                    <img src={ukFlagIcon} alt="UK Flag icon" />
                                </div>
                            )}
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
