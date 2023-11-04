import styled from "styled-components";
import { useTranslation } from "react-i18next"
import { ActivityCard } from "../ActivityCard";

const StyledSection = styled.section`
  display: flex; 
  flex-direction: column;  
  margin-top: 100px; 
  margin-bottom: 200px; 

  .bigger {
    font-size: 18px; 
  }

  .text-wrapper {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
    margin-bottom: 42px; 
    margin-left: 24px; 
  }

    @media (min-width: 667px) and (max-width: 1024px) {
      .text-wrapper {
        margin-left: 12%; 
      }
    }

    @media (min-width: 1025px) {
      .text-wrapper {
        margin-left: 12%; 
      }
    }
  
  `

const StyledDiv = styled.div`
  max-width: 100%; 
  display: flex;
  overflow: auto;  
  white-space: nowrap;
  gap: 19px; 
`;

export const Activities = () => {
  const {t} = useTranslation()
  return (
    <>
     <StyledSection>
      <div className="text-wrapper">
        <h2>{t("homePage.activityText.heading")}</h2>
        <p className="paragraph-small bigger">{t("homePage.activityText.text")}</p>
        </div>
        <StyledDiv>
          <ActivityCard />
        </StyledDiv>
        </StyledSection>
    </>
  );
};
