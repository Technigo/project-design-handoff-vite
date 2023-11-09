import SwedenFlag from "/assets/Sweden_flag_orb_icon.svg.png";
import styled from "styled-components";

// Create a styled component for the Swedish language button (flag)
const StyledLanguageButtonSE = styled.img`
  width: 52px;
  cursor: pointer;
`;

// Define the LanguageButtonSE component which displays the Swedish flag and handles the onClick event
export const LanguageButtonSE = ({ onClick }) => {
  return (
    <div>
      <StyledLanguageButtonSE
        src={SwedenFlag}
        alt="Sweden flag"
        onClick={onClick}
      />
    </div>
  );
};
