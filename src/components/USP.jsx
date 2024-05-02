import styled from "styled-components";
import trophy from "../assets/trophy.svg";
import deadlift from "../assets/deadlift.svg";

const StyledUSP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 4px;

  p {
    max-width: 406px;
    font-family: Optima;
    font-size: 24px;
    line-height: 28px; /* 116.667% */
  }
  @media (min-width: 744px) and (max-width: 1024px) {
    p {
      max-width: 682px;
      font-size: 28px;
      line-height: 32px; /* 114.286% */
    }
  }
  @media (min-width: 1024px) {
    p {
      max-width: 416px;
      font-size: 32px;
      line-height: 40px; /* 125% */
    }
  }
`;
const Icon = styled.img`
  width: 48px;
  height: 48px;

  @media (min-width: 744px) {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

export const USP = ({ type, text }) => {
  const getIcon = () => {
    switch (type) {
      case "champion":
        return trophy;
      case "deadlift":
        return deadlift;
      default:
        return null;
    }
  };
  return (
    <StyledUSP>
      <Icon
        src={getIcon()}
        alt={type === "champion" ? "Champion Icon" : "Deadlift Icon"}
      />
      <p>{text}</p>
    </StyledUSP>
  );
};
