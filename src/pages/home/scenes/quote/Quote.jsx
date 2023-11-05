import "./Quote.css";
import { useTranslation } from "react-i18next";

export const Quote = () => {
  const { t } = useTranslation();

  return (
    <section id="quote">
      <div className="page-wrapper">
        <p>
          {t("homePage.quote.text.one")}
          <br />
          {t("homePage.quote.text.two")}
          <br />
          {t("homePage.quote.text.three")}
        </p>
      </div>
      <div className="image-wrapper">
        <div className="flex-image">
          <div className="square-image-container">
            <img src="./shakti.png" alt="" />
          </div>
          <div className="square-image-container">
            <img src="./eyehands.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
