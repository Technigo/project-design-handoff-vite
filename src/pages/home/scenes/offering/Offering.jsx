import { Button } from "../../../../components/reusable/Button";
import "./Offering.css";
import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { useTranslation } from "react-i18next";

export const Offering = () => {
  const { t } = useTranslation();

  return (
    <section id="offering">
      <div className="page-wrapper">
        <SectionTitle
          className="offering-title"
          title={t("homePage.offering.title")}
        />
        <div className="offering-info">
          <p>{t("homePage.offering.text.p1")}</p>
          <br />
          <p>
            {t("homePage.offering.text.p2.one")}{" "}
            <span className="metal-mania-font">
              {t("homePage.offering.text.p2.span")}
            </span>
          </p>
          <br />
          <p>{t("homePage.offering.text.p3")}</p>
          <br />
          <p>{t("homePage.offering.text.p4")}</p>
          <br />
          <p>
            {t("homePage.offering.text.p5.one")}
            <span className="single-word">
              {t("homePage.offering.text.p5.span.one")}
            </span>
            {t("homePage.offering.text.p5.two")}
            <span className="single-word">
              {t("homePage.offering.text.p5.span.two")}
            </span>
            {t("homePage.offering.text.p5.three")}
            <span className="single-word">
              {t("homePage.offering.text.p5.span.three")}
            </span>
            {t("homePage.offering.text.p5.four")}
          </p>
        </div>
        <Button textContent={t("homePage.offering.btn")} />
      </div>
    </section>
  );
};
