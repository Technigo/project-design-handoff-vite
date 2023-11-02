import { useState, useEffect } from "react";
import { Button } from "../Links/Button";
import { useTranslation } from "react-i18next";
import "./hero.css";

export const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation();

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
        <>
            {windowWidth >= 834 ? (
                <section className={"hero-section hero-background-image"}>
                    <article className="hero-content">
                        <div className="hero-text">
                            <h1>{t("landingPage.hero.h1")}</h1>
                            <p className="hero-paragraph">{t("landingPage.hero.heroParagraph")}</p>
                        </div>
                        <Button className={"green thick"} text={t("landingPage.hero.heroButton")} />
                    </article>
                </section>
            ) : (
                <section className={"hero-section"}>
                    <img className="hero-image" src="./align-yoga-hero-image.jpg" alt="Hero" />
                    <article className="hero-content">
                        <div className="hero-text">
                            <h1>{t("landingPage.hero.h1")}</h1>
                            <p className="hero-paragraph">{t("landingPage.hero.heroParagraph")}</p>
                        </div>
                        <Button className={"green thick"} text={t("landingPage.hero.heroButton")} />
                    </article>
                </section>
            )}
        </>
    )
}
