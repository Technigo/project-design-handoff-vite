import "./Cards.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const Cards = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="backgrounds">
        <img className="hand" src="Hand.png" alt="Info card" />
        <img className="view" src="Rectangle348.png" alt="Info card" />
        <div className="hand-text">
          <h2>{t("infoTitle1")}</h2>
          <p>{t("infoText1")}</p>
          <h2>{t("infoTitle2")}</h2>
          <p>{t("infoText2")}</p>
          <h2>{t("infoTitle3")}</h2>
          <p>{t("infoText3")}</p>
        </div>
        <div className="view-text">
          <h2>{t("rightText")}</h2>
          <h2 className="yellow">{t("rightTextYellow")}</h2>
          <img src="Line5.png" alt="White line" />
          <button className="read-more-button">{t("rightButton")}</button>
        </div>
      </div>
    </div>
  );
};
