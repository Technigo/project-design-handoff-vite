import { Footer } from "../components/Footer/Footer";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header/Header";
import { ArticlesAboutMe } from "../components/Articles/ArticlesAboutMe";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";

const AboutPageContainer = styled.div`
  /* header {
    width: 100%;
    height: auto;
  } */

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
      <div className="hero-section">
        <Header className="header" contentType="image" />{" "}
        {/* Pass the contentType prop to the Header component */}
      </div>
      <AboutPageContainer>
        <div className="hero-section">
          <h1>{t("aboutPage.mainSection.primaryHeading")}</h1>{" "}
          {/* Access the 'primaryHeading' section of the JSON data */}
          <p>{t("aboutPage.mainSection.primaryParagraph")}</p>{" "}
          {/* Access the 'primaryParagraph' section of the JSON data */}
          <p>{t("aboutPage.mainSection.secondaryParagraph")}</p>
          <div className="award-section">
            {" "}
            {/* Access the 'secondaryParagraph' section of the JSON data */}
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
          <p>{t("aboutPage.mainSection.tertiaryParagraph")}</p>{" "}
          {/* Access the 'tertiaryParagraph' section of the JSON data */}
        </div>
        <ArticlesAboutMe />
        <SignUpForm />
        <Footer />
      </AboutPageContainer>
    </>
  );
};
