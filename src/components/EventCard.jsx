import styled from "styled-components";

// Styled component for the event card
const StyledEventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: 0 auto;
  font-family: "AvenirMedium", sans-serif;
  font-weight: 500;

  @media (min-width: 375px) and (max-width: 744px) {
    height: 456px;
    width: 294px;
    gap: 23px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 261px;
    min-height: 500px;
  }
`;

// Styled component for the event image
const StyledEventImage = styled.img`
  width: 100%;
  height: 234px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;

  @media (min-width: 375px) and (max-width: 744px) {
    width: 246px;
    height: 185px;
    flex-shrink: 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 213px;
    height: 240px;
    flex-shrink: 0;
  }
`;

// Styled component for the event title
const StyledEventTitle = styled.h3`
  font-family: "AvenirBlack", sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #000;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 375px) and (max-width: 744px) {
    font-size: 14px;
  }
`;

//Styled component for the date and description
const StyledDateDescription = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  width: 100%;
  word-wrap: break-word; // Prevents text overflow
  white-space: normal; // Allows text to wrap

  // Ensure fixed spacing to avoid affecting the image
  padding: 0; // Reset padding to avoid extra space
  margin: 0; // Ensure proper alignment

  @media (min-width: 375px) and (max-width: 744px) {
    font-size: 14px;
    word-wrap: break-word;
    white-space: normal;
    overflow: hidden;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
    word-wrap: break-word;
    white-space: normal;
    overflow: hidden;
  }
`;

// Styled component for the event date
const StyledEventDate = styled.p`
  font-size: 18px;
  color: #000;
  text-align: left;
  margin-bottom: 16px;
  margin: 0;
  padding: 0;

  @media (min-width: 375px) and (max-width: 744px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 16px;
  }
`;

// Styled component for the event description
const StyledEventDescription = styled.p`
  font-size: 18px;
  color: #000;
  line-height: 1.5;
  margin: 0;
  padding: 0;

  @media (min-width: 375px) and (max-width: 744px) {
    font-size: 14px;
  }
`;

// Styled component for the event button
const StyledEventButton = styled.button`
  background: #b3583b;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  width: 270px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #552a1c;
  }

  @media (min-width: 375px) and (max-width: 744px) {
    width: 145px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 145px;
  }
`;

export const EventCard = ({ event }) => {
  return (
    <StyledEventCard>
      <StyledEventImage src={event.image} alt={event.title} />
      <StyledEventTitle>{event.title}</StyledEventTitle>
      <StyledDateDescription>
        <StyledEventDate>{event.date}</StyledEventDate>
        <StyledEventDescription>{event.description}</StyledEventDescription>
      </StyledDateDescription>
      <StyledEventButton>{event.buttonLabel}</StyledEventButton>
    </StyledEventCard>
  );
};
