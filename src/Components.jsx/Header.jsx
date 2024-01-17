import "./Header.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <img className="bubbles" src="Gym-bubble.png" alt="Gym bubble" />
      <img className="bubbles" src="Spa-1.png" alt="Spa bubble" />
      <img className="bubbles" src="Co-working.png" alt="Co work bubble" />
      <img
        className="bubbles"
        src="After-hours-1.png"
        alt="After hours bubble"
      />
      ;
      <div className="header-text">
        <h1>{t("title")}</h1>
        <h1>
          <span class="yellow">{t("title2")}</span>
        </h1>
        <p>{t("description")}</p>
        <p>{t("description2")}</p>
      </div>
      <img className="vector" src="Vector-2.png" alt="Line" />
    </div>
  );
};
