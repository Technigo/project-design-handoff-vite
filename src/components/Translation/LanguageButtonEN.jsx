import UKFlag from "/assets/1200px-United-kingdom_flag_icon_round.svg.png"; // Importera din SVG-fil
import styled from "styled-components";

const StyledLanguageButtonEN = styled.img`
  /* Dina CSS-stilar här */
  width: 52px;
  cursor: pointer;
  //&:hover {
  /* Stilar vid hover */
  //}
`;

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
