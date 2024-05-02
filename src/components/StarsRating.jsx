import styled from "styled-components";
import stars from "../assets/stars.svg";

const StyledStars = styled.div`
  font-family: Optima;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  img {
    width: 166px;
  }

  @media (min-width: 744px) and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    font-size: 28px;
    line-height: 32px; /* 114.286% */
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
    font-size: 32px;
    line-height: 40px; /* 125% */

    img {
      width: 256px;
    }
  }
`;
export const StarsRating = () => {
  return (
    <StyledStars>
      <p>512 reviews • Excellent</p>
      <img
        src={stars}
        alt="stars-reviews"
      />
      <p>4,9 on Trustpilot</p>
    </StyledStars>
  );
};
