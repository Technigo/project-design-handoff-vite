import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./Hero.css";

export const Hero = () => {

    const { t } = useTranslation();

    const scrollToMembershipSection = () => {
        const membershipSection = document.getElementById("membership-section");
        if (membershipSection) {
            membershipSection.scrollIntoView({ behaviour: "smooth"});
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-content-wrapper">
                <img
                    className="oval-image"
                    src={t("home.hero.heroImage")}
                    alt={t("home.hero.heroImageAlt")}
                />
                <div className="hero-text-and-buttons-wrapper">
                <h1>{t("home.hero.heading")}</h1>
                <h3>{t("home.hero.subHeading")}</h3>
                <div className="hero-btn-container">
                <Button>{t("home.hero.buttons.class")}</Button>
                {/* Something's up with this secondary prop, i get an error if i dont pu equal to "true",
                 otherwise i get a warning saying it shouldn't be sent through the DOM.
                 I don't know. It works as expected though.  */}
                <Button secondary="true" onClick={scrollToMembershipSection}>{t("home.hero.buttons.member")}</Button>
                </div>
                </div>
            </div>
        </section>
    );
};
