import styled, { keyframes } from "styled-components";
import HeartIcon from "../assets/HeartIcon.svg";

const pulse = keyframes`
  0% {
    transform: scaleX(1) scaleY(1);
  }

  50% {
    transform: scaleX(1.04) scaleY(1.3);
  }

  100% {
    transform: scaleX(1) scaleY(1);
  }
`;

export const StyledIntro = styled(HeartIcon)`
  animation: ${pulse} 2s infinite;
`;

/*export const StyledIntro = styled.heartIcon`

`;*/
