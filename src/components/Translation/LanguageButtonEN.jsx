import UKFlag from "/assets/1200px-United-kingdom_flag_icon_round.svg.png";
import styled from "styled-components";

const StyledLanguageButtonEN = styled.img`
  width: 52px;
  cursor: pointer;
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
