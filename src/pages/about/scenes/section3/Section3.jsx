import "./Section3.css";
import { useTranslation } from "react-i18next";

export const Section3 = () => {
  const { t } = useTranslation();

  return (
    <section id="section3">
      <div className="page-wrapper">
        <div className="section3-info">
          <p>{t("aboutPage.section3.text.p1")}</p>
          <br />
          <p>{t("aboutPage.section3.text.p2")}</p>
          <br />
          <p>{t("aboutPage.section3.text.p3")}</p>
        </div>
        <img src="./onlythebrave.png" alt={t("imageAlts.onlythebrave")} />
      </div>
    </section>
  );
};
