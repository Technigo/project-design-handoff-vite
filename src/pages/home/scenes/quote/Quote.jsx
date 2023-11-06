import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "./Quote.css";

const DisplayFlex = styled.div`
  display: flex;
`;

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
      <DisplayFlex>
        <div className="square-container">
          <img src="./shakti.png" alt={t("imageAlts.shakti")} />
        </div>
        <div className="square-container">
          <img src="./eyehands.png" alt={t("imageAlts.eyehands")} />
        </div>
      </DisplayFlex>
    </section>
  );
};
