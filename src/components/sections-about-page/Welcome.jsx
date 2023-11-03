import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(92, 22, 7, 0.15) 37%,
      rgba(51, 13, 3, 0.74) 88.29%,
      #220901 100%
    ),
    url("/images/welcome-img.jpeg");
  height: 592px;
  background-size: cover;
  background-position: 50%;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 

  //Manipulating background image position in wide viewports
  @media (min-width: 950px) {
  background-position: 50% 0%;  
  }

  .wrapper-text {
    display: flex; 
    flex-direction: column; 
    gap: 32px; 
    padding: 24px; 
    overflow-wrap: break-word; 
  }


  h1 {
    color: var(--white-red);
    font-size: 32px;
  }

    @media (min-width: 667px) and (max-width: 1024px) {
      .wrapper-text{
        width: 65%; 
        margin: 0 0 10% 6%; 
      }
    }

    @media (min-width: 1025px) {
      .wrapper-text {
        width: 65%; 
        margin-left: 10%; 
      }
    }

`;

export const Welcome = () => {
  const {t} = useTranslation()
  return (
    <>
      <StyledSection>
        <div className="wrapper-text">
          <h1>{t("aboutPage.welcome.heading")}</h1>
          <p>{t("aboutPage.welcome.text1")}</p>
          <p>{t("aboutPage.welcome.text2")}</p>
        </div>
     
      </StyledSection>
    </>
  );
};
