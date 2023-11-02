import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../Button"

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(92, 22, 7, 0.15) 37%,
      rgba(51, 13, 3, 0.74) 88.29%,
      #220901 100%
    ),
    url("/images/hero-image.jpeg");
  height: 603px;
  background-size: cover;
  background-position: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    text-align: left;
  }

  h2 {
    text-align: center;
    color: white;
  }

  .hero-content{
    display: flex; 
    flex-direction: column; 
    margin: 0 24px; 
    gap: 32px; 
  }

  .button-wrapper {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
  }
`;


export const Hero = () => {
  const {t} = useTranslation()


  return (
    <>
      <StyledSection>
        <div className="hero-content">
        <h1>{t("homePage.hero.heading")}</h1>
        <p>{t("homePage.hero.text")}</p>
        <div className="button-wrapper">
        <Button>{t("homePage.hero.bookButton")}</Button>
        <Button secondary>{t("homePage.hero.exploreButton")}</Button>
        </div>
        </div>
      </StyledSection>
    </>
  );
};
