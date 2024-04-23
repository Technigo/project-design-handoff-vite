import styled from "styled-components";
import { useState, useEffect } from "react";
import { handleResize } from "../utils/handleResize";
import reviewStarsSmall from "/mobile&tablet reviewstars.png";
import reviewStarsBig from "/desktop review stars.png";

const StyledStars = styled.div`
  font-family: Optima;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (min-width: 744px) and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
  }
`;
export const StarsRating = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cleanup = handleResize(setWindowWidth); // Using the imported handleResize function

    return () => cleanup();
  }, []);
  return (
    <StyledStars>
      <p>512 reviews • Excellent</p>
      <img
        src={windowWidth >= 1440 ? reviewStarsBig : reviewStarsSmall}
        alt="stars-reviews"
      />
      <p>4,9 on Trustpilot</p>
    </StyledStars>
  );
};
