import SwedenFlag from "/assets/Sweden_flag_orb_icon.svg.png";
import styled from "styled-components";

const StyledLanguageButtonSE = styled.img`
  width: 52px;
  cursor: pointer;
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
