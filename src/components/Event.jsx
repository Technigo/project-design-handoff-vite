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
  margin-top: 80px;
  margin-bottom: 80px;
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
`;

export const Event = () => {
  return (
    <StyledEvent className="event-section">
      <h3 className="sub-title">upcoming events</h3>
      <StyledEventContainer>
        {eventData.map((event, index) => (
          <EventCard key={index} event={event} /> // Render an EventCard for each item in the JSON array
        ))}
      </StyledEventContainer>
    </StyledEvent>
  );
};
