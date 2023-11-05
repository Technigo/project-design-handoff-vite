import { Footer } from "../components/Footer/Footer";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Menu } from "../components/Header/Menu";

const AboutPageContainer = styled.div`
  .hero-section {
    max-width: 500px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 16px;
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
    color: #c00202;
    font-style: italic;
  }
  .award-section {
    display: flex;
    gap: 16px;
    padding: 16px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

export const AboutPage = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <>
      <AboutPageContainer>
        <Menu />
        <div className="hero-section">
          <h1>{t("aboutPage.mainSection.primaryHeading")}</h1>
          <p>{t("aboutPage.mainSection.primaryParagraph")}</p>
          <p>{t("aboutPage.mainSection.secondaryParagraph")}</p>
          <div className="award-section">
            <img
              src="/award1.svg"
              alt="Best fitness awards, Good Housekeeping"
            />
            <img
              src="/award2.svg"
              alt="Award for Best in fitness, Shape 2023"
            />
            <img src="/award3.svg" alt="Women's Health fitness awards 2023" />
          </div>
          <p>{t("aboutPage.mainSection.tertiaryParagraph")}</p>
        </div>

        <Footer />
      </AboutPageContainer>
    </>
  );
};
