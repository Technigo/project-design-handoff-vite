import "./InfoPage.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const InfoPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="info-page">
      <div className="grid-container">
        <div className="grid-item">
          <h2>{t("gridTitle1")}</h2>
          <p>{t("gridText1")}</p>
          <button className="read-more-button">{t("gridButton")}</button>
        </div>
        <div className="grid-item">
          <img src="Breakfast-1.png" alt="Breakfast image" />
        </div>
        <div className="grid-item">
          <img src="Breakfast-2.png" alt="Breakfast image" />
        </div>

        <div className="grid-item">
          <img src="Gym-1.png" alt="Gym image" />
        </div>
        <div className="grid-item">
          <img src="Gym-2.png" alt="Gym image" />
        </div>

        <div className="grid-item">
          <h2>{t("gridTitle2")}</h2>
          <p>{t("gridText2")}</p>
          <button className="read-more-button">{t("gridButton")}</button>
        </div>

        <div className="grid-item">
          <h2>{t("gridTitle3")}</h2>
          <p>{t("gridText3")}</p>
          <button className="read-more-button">{t("gridButton")}</button>
        </div>
        <div className="grid-item">
          <img src="Co-working.png" alt="Co-working image" />
        </div>

        <div className="grid-item">
          <img src="Spa-3.png" alt="Spa image" />
        </div>
        <div className="grid-item">
          <h2>{t("gridTitle4")}</h2>
          <p>{t("gridText4")}</p>
          <button className="read-more-button">{t("gridButton")}</button>
        </div>
        <div className="grid-item">
          <img src="Spa-2.png" alt="Spa image" />
        </div>

        <div className="grid-item">
          <h2>{t("gridTitle5")}</h2>
          <p>{t("gridText5")}</p>
          <button className="read-more-button">{t("gridButton")}</button>
        </div>
        <div className="grid-item">
          <div className="after-hours-images">
            <img src="After-hours-1.png" alt="After hours image" />
            {/* <div className="grid-item"></div> */}
            <img src="After-hours-2.png" alt="After hours image" />
          </div>
        </div>
      </div>
    </div>
  );
};
