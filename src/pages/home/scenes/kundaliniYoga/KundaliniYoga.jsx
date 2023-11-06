import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { useTranslation } from "react-i18next";
import "./KundaliniYoga.css";

export const KundaliniYoga = () => {
  const { t } = useTranslation();

  return (
    <section id="kundalini-yoga">
      <div className="square-container">
        <img
          className="praying"
          src="./prayingwoman.png"
          alt={t("imageAlts.prayingwoman")}
        />
      </div>
      <div className="page-wrapper">
        <SectionTitle
          className="kundalini-title"
          title={t("homePage.kundaliniYoga.title")}
        />
        <div className="kundalini-info">
          <p>{t("homePage.kundaliniYoga.text.p1")}</p>
          <br />
          <p>{t("homePage.kundaliniYoga.text.p2")}</p>
        </div>
        <div className="tell-me">
          <span>{t("homePage.kundaliniYoga.text.span")}</span>
        </div>
      </div>
      <div className="square-container">
        <img
          className="incense"
          src="./incense.png"
          alt={t("imageAlts.incense")}
        />
      </div>
    </section>
  );
};
