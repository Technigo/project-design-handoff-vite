import { Button } from "../../Components/Reusable/Buttons/Button";
import { useTranslation } from "react-i18next";

import "./hero.css"
export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="hero-section">
      {/* <div className="hero-content-wrapper"> */}
      <div className="heading-text-wrapper">
        <h1 className="hero-heading-h1">{t("Hero.h1")}</h1>
        <h2 className="hero-heading-h2">{t("Hero.h2")}</h2>
        </div>
        <div className="join-button-container">
        <Button buttonText={t("Hero.button")} buttonClass={"join-button"}/>
        </div>
        {/* </div> */}
    </div>
  )
}
