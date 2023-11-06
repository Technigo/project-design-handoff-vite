import "./Hero.css";
import { Button } from "../../../../components/reusable/Button";
import { SpeechBubble } from "../../../../components/SpeechBubble";
// the hook
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const isBiggerScreen = window.innerWidth > 1050; // Check if the screen width is over 1025px

  // if (isBiggerScreen) {
  //   // Render the HTML structure for screens wider than 1025px
  //   return (
  //     <section id="hero">
  //       <div className="hero-large-wrapper">
  //         <div className="images-wrapper">
  //           <img className="petra-img" src="./petra1.png" alt="" />
  //           <img className="shakti-img" src="./shakti.png" alt="" />
  //           <img className="eyehands-img" src="./eyehands.png" alt="" />
  //         </div>
  //         <div className="hero-text-wrapper">
  //           <h1 className="title">{t("homePage.hero.h1")}</h1>
  //           <p>{t("homePage.hero.p")}</p>
  //           <Button
  //             path="/about"
  //             classNameContainer="satnam-btn-wrapper"
  //             textContent={t("homePage.hero.heroBtn")}
  //             ariaLabel="Click to learn more"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // } else {
  //   // Render an alternative HTML structure for screens not wider than 1025px
  //   return (
  //     <section id="hero">
  //       <div className="imageOnBiggerScreens">
  //         <img src="./petra1.png" alt="" />
  //       </div>
  //       <div className="overlay"></div>
  //       <SpeechBubble />
  //       <div className="hero-wrapper">
  //         <h1 className="title">{t("homePage.hero.h1")}</h1>
  //         <p>{t("homePage.hero.p")}</p>
  //         <Button
  //           path="/about"
  //           classNameContainer="satnam-btn-wrapper"
  //           textContent={t("homePage.hero.heroBtn")}
  //           ariaLabel="Click to learn more"
  //         />
  //       </div>
  //     </section>
  //   );
  // }
  return (
    <section id="hero">
      <div className="hero-image">
        <img src="./petra1.png" alt={t("imageAlts.petra1")} />
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
