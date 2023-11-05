import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import "./Section1.css";
import { useTranslation } from "react-i18next";

export const Section1 = () => {
  const { t } = useTranslation();

  return (
    <section id="section1">
      <div className="image-wrapper">
        <img src="./petra2.png" alt="" />
      </div>
      <div className="page-wrapper">
        <SectionTitle
          className="what-if-title"
          title={t("aboutPage.section1.title")}
        />
        <div className="section1-info">
          <p>
            {t("aboutPage.section1.text.p1")} <br />
            <br /> {t("aboutPage.section1.text.p2")}
          </p>
        </div>
      </div>
    </section>
  );
};
