import { styled } from "styled-components";
import scheduleInformation from "../data/schedule.json";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between; 
  padding: 16px;
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
  return (
    <>
      {Object.keys(scheduleInformation).map((key) => (
        <StyledDiv key={key}>
          <div className="schedule-info">
            <div className="schedule-time">
              <p className="paragraph-class-white">
                {scheduleInformation[key].time}
              </p>
              <p className="paragraph-class-red">
                {scheduleInformation[key].length}
              </p>
            </div>

            <div className="schedule-text">
              <p className="paragraph-class-title">
                {scheduleInformation[key].class}
              </p>
              <p className="paragraph-teacher-name">
                {scheduleInformation[key].teacher}
              </p>
            </div>
          </div>

          <a className="tertiary-button tertiary-button-small">Book</a>
        </StyledDiv>
      ))}
    </>
  );
};
