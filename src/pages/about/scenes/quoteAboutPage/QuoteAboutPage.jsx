import "./QuoteAboutPage.css";
import { useTranslation } from "react-i18next";

export const QuoteAboutPage = () => {
  const { t } = useTranslation();

  return (
    <section id="quote-about-page">
      <div className="page-wrapper">
        <ul className="quote-text">
          <li>{t("aboutPage.quoteAboutPage.text.one")}</li>
          <li>{t("aboutPage.quoteAboutPage.text.two")}</li>
          <li>{t("aboutPage.quoteAboutPage.text.three")}</li>
        </ul>
      </div>
    </section>
  );
};
