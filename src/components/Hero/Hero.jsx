import { useState, useEffect } from "react";
import { Button } from "../Links/Button";
import { useTranslation } from "react-i18next";
import "./hero.css";

// Component that renders the hero-section on the landing page
export const Hero = () => {
    // State for the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation();

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
        <>
            {/* If window with is larger than the specified tablet width the hero image is inserted as a background-image via css instead for nicer styling */}
            {windowWidth >= 834 ? (
                <section className={"hero-section hero-background-image"}>
                    <article className="hero-content">
                        <div className="hero-text">
                            <h1>{t("landingPage.hero.h1")}</h1>
                            <p className="hero-paragraph">{t("landingPage.hero.heroParagraph")}</p>
                        </div>
                        <Button linkTo={"/sign-up"} className={"green thick"} text={t("landingPage.hero.heroButton")} />
                    </article>
                </section>
            ) : (
                <section className={"hero-section"}>
                    <img className="hero-image" src="./assets/images/align-yoga-hero-image.jpg" alt="Hero" />
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
