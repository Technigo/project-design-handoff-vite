import { Footer } from "../components/Footer/Footer";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header/Header";
import { ArticlesAboutMe } from "../components/Articles/ArticlesAboutMe";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";

const AboutPageContainer = styled.div`
  width: 100%;

  .main-section {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 16px;
    margin: 0 auto;
    padding: 16px;
    p {
      font-weight: 300;
      line-height: 160%;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
    color: #c00202;
    font-style: italic;
  }

  .award-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 20px;
    img {
      height: auto;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 24px;
      margin: 2rem 0;
    }
    .award-section {
      gap: 2.5rem;
    }

    .main-section {
      margin-bottom: 5rem;
      p {
        font-size: 18px;
        font-weight: 300;
        line-height: 160%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .main-section {
      max-width: 1000px;
      p {
        font-size: 24px;
      }
    }

    span {
      width: 180px;
      height: auto;
    }

    h1 {
      font-size: 36px;
    }
  }
`;

export const AboutPage = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <>
      <div className="hero-section">
        <Header contentType="image" />
        {/* Pass the contentType prop to the Header component */}
      </div>
      <AboutPageContainer>
        <div className="main-section">
          <h1>{t("aboutPage.mainSection.primaryHeading")}</h1>
          {/* Access the 'primaryHeading' section of the JSON data */}
          <p>{t("aboutPage.mainSection.primaryParagraph")}</p>
          {/* Access the 'primaryParagraph' section of the JSON data */}
          <p>{t("aboutPage.mainSection.secondaryParagraph")}</p>
          <div className="award-section">
            {/* Access the 'secondaryParagraph' section of the JSON data */}
            <span>
              <img
                src="/award1.svg"
                alt="Best fitness awards, Good Housekeeping"
              />
            </span>
            <span>
              <img
                src="/award2.svg"
                alt="Award for Best in fitness, Shape 2023"
              />
            </span>
            <span>
              <img src="/award3.svg" alt="Women's Health fitness awards 2023" />
            </span>
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
