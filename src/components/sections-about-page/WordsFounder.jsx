import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSection = styled.section`
  margin: 80px 24px;
  display: flex; 

  .founder-wrapper {
    display: flex; 
    flex-direction: column;
    gap: 80px; 
    align-items: center; 
  }

  .image-founder{
    height: 260px; 
    width: 260px; 
    border-radius: 260px;
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(34, 9, 1, 0.70) 16.67%, rgba(184, 56, 8, 0.00) 75.98%, #220901 100%), url("/images/image-founder.png"); 
    background-size: cover; 
    background-position: 30% 
  }

  .founder-text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .paragraph-small {
    color: var(--white-red);
    padding-right: 50px; 
  }

    @media (min-width: 667px) and (max-width: 1024px) {
      margin: 150px 24px;
        .founder-wrapper {
          flex-direction: row; 
          justify-content: space-evenly; 
        }
        .founder-text {
          width: 50%; 
        }
      }

      @media (min-width: 1025px) {
      justify-content: center; 
      margin: 150px 24px;

        .founder-wrapper {
          flex-direction: row; 
          width: 70%; 
          justify-content: center; 
        }

        .founder-text {
          width: 50%; 
        }
        }
      

`;

export const WordsFounder = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledSection>
        <div className="founder-wrapper">
        <div className="image-founder" role="img" alt="photo of the founder">
        </div>

        <div className="founder-text">
          <p className="paragraph-small">{t("aboutPage.founder.heading")}</p>
          <p className="paragraph-small">{t("aboutPage.founder.text")}</p>
        </div>
        </div>
      </StyledSection>
    </>
  );
};
