import { styled } from "styled-components";
import { InformationCard } from "../InformationCard";
import { useTranslation } from "react-i18next";

const StyledSection = styled.section`
  margin: 0 24px;


  .bigger {
    font-size: 18px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 42px;
  }

  .cards-wrapper {
    display: flex; 
    flex-direction: column; 
    gap: 32px; 
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    margin: 0 20%;
  }

  @media (min-width: 1025px) {
    margin: 0 10%;
      .cards-wrapper {
      flex-direction: row; 
 
  }
  
  }
`;

export const Information = () => {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <div className="text-wrapper">
        <h2>{t("homePage.informationText.heading")}</h2>
        <p className="paragraph-small bigger">
          {t("homePage.informationText.text")}
        </p>
      </div>
      <div className="cards-wrapper">
        <InformationCard />
      </div>
    </StyledSection>
  );
};
