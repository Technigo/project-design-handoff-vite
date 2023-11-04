import { styled } from "styled-components";
import { useTranslation } from "react-i18next"

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between; 
  padding: 16px 0;
  background-color: transparent;
  border-top: 0.5px solid var(--light-red);

  .schedule-info {
    display: flex; 
    gap: 2rem; 
  }

  .schedule-time {
    display: flex; 
    flex-direction: column; 
    gap: 0.4rem; 
  }

  .schedule-text {
    display: flex; 
    flex-direction: column; 
    gap: 0.4rem; 
  }

  .tertiary-button {
   display: flex; 
  }
`;

export const ScheduleComponent = () => {
  const { t, ready } = useTranslation()

  const schedules = t("homePage.schedule", {returnObjects: true })

  if(!ready) return "loading translations..."
  return (
    <>
      {schedules.map((schedule) => (
        
        <StyledDiv key={schedule.id}>
          <div className="schedule-info">
            <div className="schedule-time">
              <p className="paragraph-class-white">
                {schedule.time}
              </p>
              <p className="paragraph-class-red">
                {schedule.length}
              </p>
            </div>

            <div className="schedule-text">
              <p className="paragraph-class-title">
                {schedule.class}
              </p>
              <p className="paragraph-teacher-name">
                {schedule.teacher}
              </p>
            </div>
          </div>
          <a className="tertiary-button tertiary-button-small">{schedule.book}</a>
        </StyledDiv>
      ))}
    </>
  );
};
