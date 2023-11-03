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
                <h1>{t("home.hero.heading")}</h1>
                <h3>{t("home.hero.subHeading")}</h3>
                <div className="hero-btn-container">
                <Button>{t("home.hero.buttons.class")}</Button>
                <Button secondary onClick={scrollToMembershipSection}>{t("home.hero.buttons.member")}</Button>
                </div>
            </div>
        </section>
    );
};
