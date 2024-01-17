import "./Member.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const Member = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="member">
      <h1 className="become-a-member">{t("memberTitle")}</h1>
      <div className="cards">
        <div className="card1">
          <h2 className="member-title">{t("memberTitle1")}</h2>
          <h2>{t("memberPrice1")}</h2>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>{t("memberText1")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>{t("memberText2")}</p>
          </div>
          <button className="read-more-button">{t("memberButton")}</button>
        </div>
        <div className="card2">
          <h2 className="member-title">{t("memberTitle2")}</h2>
          <h2>{t("memberPrice2")}</h2>

          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>{t("memberText3")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>{t("memberText4")} </p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText5")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText6")}</p>
          </div>
          <button className="read-more-button">{t("memberButton")}</button>
        </div>
        <div className="card3">
          <h2 className="member-title">{t("memberTitle3")}</h2>
          <h2>{t("memberPrice3")}</h2>

          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText7")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText8")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText9")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText10")}</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p> {t("memberText11")}</p>
          </div>
          <button className="read-more-button"> {t("memberButton")}</button>
        </div>
      </div>
    </div>
  );
};
