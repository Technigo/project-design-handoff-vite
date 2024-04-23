import styled from "styled-components";
import mobileLogo from "/logo.svg";

const StyledLogo = styled.img`
  width: 43px;
  height: 72px;

  @media (min-width: 744px) and (max-width: 1024px) {
    width: 68px;
    height: 91px;
  }

  @media (min-width: 1024px) {
    width: 85px;
    height: 112px;
    ${({ $placement }) => $placement === "footer" && "grid-area: lo;"};
  }
`;
export const Logo = ({ $placement }) => {
  return (
    <>
      <StyledLogo
        src={mobileLogo}
        alt="Logo"
        $placement={$placement}
      />
    </>
  );
};
