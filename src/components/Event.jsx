import styled from "styled-components";

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
      <p>cards</p>
    </StyledEvent>
  );
};
