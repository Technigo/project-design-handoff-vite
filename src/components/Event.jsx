import styled from "styled-components";
import eventData from "../data/Events.json";
import { EventCard } from "./EventCard";

// Styled component for the container that holds the event cards
const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  overflow-x: auto;
  margin: 80px auto;

  @media (min-width: 320px) and (max-width: 744px) {
    margin: 48px 0px 96px 17px;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media (min-width: 744px) and (max-width: 1024px) {
    margin: 48px 0px 48px 32px;
    overflow-x: auto;
    white-space: nowrap;
  }
`;
const StyledEvent = styled.section`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "AvenirMedium", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  .sub-title {
    height: 5.5rem;
    width: 100%;
    background-color: #e4dbd2;
    padding: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 744px) {
    .sub-title {
      font-size: 16px;
    }
  }

  @media (max-width: 428px) {
    .sub-title {
      font-size: 14px;
    }
  }
`;

export const Event = () => {
  return (
    <StyledEvent className="event-section">
      <h3 className="sub-title">upcoming events</h3>
      <StyledEventContainer>
        {eventData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </StyledEventContainer>
    </StyledEvent>
  );
};
