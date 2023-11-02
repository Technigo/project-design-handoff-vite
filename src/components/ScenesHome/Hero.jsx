import { useTranslation } from "react-i18next";
import heroimage from "../../../public/hero-image.png";
import { Button } from "../Button/Button";
import "./Hero.css";

export const Hero = () => {

    const { t } = useTranslation();

    return (
        <section className="hero-section">
            <div className="hero-content-wrapper">
                <img
                    className="oval-image"
                    src={heroimage}
                    alt="Picture of yoga mat being rolled out."
                />
                <h1>{t("home.hero.heading")}</h1>
                <h3>{t("home.hero.subHeading")}</h3>
                <div className="hero-btn-container">
                <Button>{t("home.hero.buttons.class")}</Button>
                <Button secondary="true">{t("home.hero.buttons.member")}</Button>
                </div>
            </div>
        </section>
    );
};
