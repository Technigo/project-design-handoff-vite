import { useTranslation } from "react-i18next";
import "./goodtoknow.css";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";
import { SecondaryBtn } from "../../components/buttons/secondary/SecondaryBtn";

export const GoodToKnowSection = () => {
  const { t } = useTranslation();
  return (
    <div className="good-to-know-container">
      <h2 className="good-to-know-title">{t("goodToKnow")}</h2>
      <div className="good-to-know-info">
        <div className="openingHours">
          <h3 className="openingHoursTitle">{t("openingHours")}</h3>
          <p className="openingHoursInfo">{t("openingHoursInfo")}</p>
        </div>
        <div className="bookAClass">
          <h3 className="bookAClassTitle">{t("bookAClass")}</h3>
          <p className="bookAClassInfo">{t("bookAClassInfo")}</p>
        </div>
        <div className="studioMembership">
          <h3 className="studioMembershipTitle">{t("studioMembership")}</h3>
          <p className="studioMembershipInfo">{t("studioMembershipInfo")}</p>
        </div>
      </div>
      <div className="signUpInBtns">
        <PrimaryBtn btnName={t("signUpBtn")} />
        <SecondaryBtn btnName={t("login")} />
      </div>
      <img alt="wave pattern" className="good-to-know-wave" />
    </div>
  );
};
