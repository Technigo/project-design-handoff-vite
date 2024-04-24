import styled from "styled-components";

const StyledOurClass = styled.section`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "AvenirMedium", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;

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

export const OurClass = () => {
  return (
    <StyledOurClass className="class-section">
      <h3 className="sub-title">our class</h3>
      <p>cards</p>
    </StyledOurClass>
  );
};
