import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import "./KundaliniYoga.css";
import { useTranslation } from "react-i18next";

export const KundaliniYoga = () => {
  const { t } = useTranslation();

  return (
    <section id="kundalini-yoga">
      <div className="square-image-container">
        <img className="praying" src="./prayingwoman.png" alt="" />
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
      <div className="square-image-container">
        <img className="incense" src="./incense.png" alt="" />
      </div>
    </section>
  );
};
