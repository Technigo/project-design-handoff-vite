import styled from "styled-components";
import mobileLogo from "/logo.svg";

const StyledLogo = styled.img`
  width: 34px;

  @media (min-width: 744px) and (max-width: 1440px) {
    width: 68px;
  }

  @media (min-width: 1440px) {
    width: 85px;
  }
`;
export const Logo = () => {
  return (
    <div>
      <StyledLogo
        src={mobileLogo}
        alt="Logo"
      />
    </div>
  );
};
