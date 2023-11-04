import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ScheduleComponent } from "../ScheduleComponent";
import { DateDisplay } from "../DateDisplay";

export const StyledSection = styled.section`
  margin: 132px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 667px) and (max-width: 1024px) {
    margin: 132px 20%; 
  }

  @media (min-width: 1025px) {
     margin: 132px 30%; 
}
`;

export const Schedule = () => {
  const {t} = useTranslation()
  return (
    <StyledSection>
     
      <h4>{t("homePage.scheduleInfo.type")}</h4>
      <DateDisplay/>
      <div className="schedule-wrapper">
        <ScheduleComponent />
      </div>
      <p className="tertiary-button">{t("homePage.scheduleInfo.link")}</p>
    </StyledSection>
  );
};
