//import styled
import styled from "styled-components";

//import logo
import LogoSmall from "../../public/logo/primary-small.png";

//styles
const StyledLogo = styled.img`
  width: 133px;
  height: 56px;
`;

//component
export const Logo = () => {
  return <StyledLogo src={LogoSmall} alt="Shanti Yoga Logo" />;
};
