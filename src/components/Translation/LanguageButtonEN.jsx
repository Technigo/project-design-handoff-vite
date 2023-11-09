import UKFlag from "/assets/1200px-United-kingdom_flag_icon_round.svg.png";
import styled from "styled-components";

// Create a styled component for the English language button (flag)
const StyledLanguageButtonEN = styled.img`
  width: 52px;
  cursor: pointer;
`;

// Define the LanguageButtonEN component which displays the UK flag and handles the onClick event
export const LanguageButtonEN = ({ onClick }) => {
  return (
    <div>
      <StyledLanguageButtonEN
        src={UKFlag}
        alt="United Kingdom flag"
        onClick={onClick}
      />
    </div>
  );
};
