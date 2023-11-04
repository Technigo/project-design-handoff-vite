import "./pakages.css";
import { useTranslation } from "react-i18next";

export const Pakages = () => {
  const { t } = useTranslation();

  return (
    <section className="pakages-section">

      <div className="pakages-wrapper">
        
        <div className="pakage-container">
          <img className="pakage-image" src="/Images/pakage-become-jedi.png" alt="" />
          <p className="pakage-text">{t("Pakages.p1")}</p>
        </div>

        <div className="pakage-container">
          <img className="pakage-image" src="/Images/pakage-darkside.png" alt="" />
          <p className="pakage-text">{t("Pakages.p2")}</p>
        </div>

        <div className="pakage-container">
          <img className="pakage-image" src="/Images/pakage-mandelore.png" alt="" />
          <p className="pakage-text">{t("Pakages.p3")}</p>
        </div>
      </div>
    </section>
  );
};
