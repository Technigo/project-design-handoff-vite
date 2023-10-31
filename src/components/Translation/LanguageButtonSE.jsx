import SwedenFlag from "/assets/Sweden_flag_orb_icon.svg.png"; // Importera din SVG-fil
import styled from "styled-components";

const StyledLanguageButtonSE = styled.img`
  /* Dina CSS-stilar här */
  width: 52px;
  cursor: pointer;
  //&:hover {
  /* Stilar vid hover */
  //}
`;

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
