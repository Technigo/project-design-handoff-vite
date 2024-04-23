import trophyIcon from "/Property 1=Trophy.png";
import deadliftIcon from "/Property 1=Deadlift.png";
import styled from "styled-components";

const StyledUSP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 4px;
  p {
    max-width: 406px;
  }
  @media (min-width: 744px) and (max-width: 1024px) {
    p {
      max-width: 682px;
    }
  }
  @media (min-width: 1024px) {
    p {
      max-width: 416px;
    }
  }
`;
const Icon = styled.img`
  width: 48px;
  height: 48px;
  @media (min-width: 744px) and (max-width: 1024px) {
    width: 64px;
    height: 64px;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

export const USP = ({ type, text }) => {
  const getIcon = () => {
    switch (type) {
      case "champion":
        return trophyIcon;
      case "deadlift":
        return deadliftIcon;
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
