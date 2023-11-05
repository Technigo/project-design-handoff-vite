import "./Hero.css";
import { Button } from "../../../../components/reusable/Button";
import { SpeechBubble } from "../../../../components/SpeechBubble";
// the hook
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div className="imageOnBiggerScreens">
        <img src="./petra1.png" alt="" />
      </div>
      <div className="overlay"></div>
      <SpeechBubble />
      <div className="hero-wrapper">
        <h1 className="title">{t("homePage.hero.h1")}</h1>
        <p>{t("homePage.hero.p")}</p>
        <Button
          path="/about"
          classNameContainer="satnam-btn-wrapper"
          textContent={t("homePage.hero.heroBtn")}
          ariaLabel="Click to learn more"
        />
      </div>
    </section>
  );
};
