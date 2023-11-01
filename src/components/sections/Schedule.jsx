import styled from "styled-components";
import { ScheduleComponent } from "../ScheduleComponent";

export const StyledSection = styled.section`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Schedule = () => {
  return (
    <StyledSection>
      <p className="paragraph-teacher-name">SCHEDULE</p>
      <h3>Today, Wednesday 1 Nov</h3>
      <div className="schedule-wrapper">
        <ScheduleComponent />
      </div>
      <p className="tertiary-button">See weekly schedule</p>
    </StyledSection>
  );
};
