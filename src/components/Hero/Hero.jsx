import { Button } from "../Links/Button";
import { useTranslation } from "react-i18next";
import "./hero.css";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero-section">
            <img src="./assets/images/align-yoga-hero-image.jpg" alt="Hero" />
            <article className="hero-content">
                <h1>{t("landingPage.hero.h1")}</h1>
                <p>{t("landingPage.hero.heroParagraph")}</p>
                <Button className={"green"} text={t("landingPage.hero.heroButton")} />
            </article>
        </section>
    )
}
