import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ScheduleComponent } from "../ScheduleComponent";

export const StyledSection = styled.section`
  margin: 132px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Schedule = () => {
  const {t} = useTranslation()
  return (
    <StyledSection>
      <h4>{t("homePage.scheduleInfo.type")}</h4>
      <h3>{t("homePage.scheduleInfo.date")}</h3>
      <div className="schedule-wrapper">
        <ScheduleComponent />
      </div>
      <p className="tertiary-button">{t("homePage.scheduleInfo.link")}</p>
    </StyledSection>
  );
};
