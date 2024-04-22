//import styled
import styled from "styled-components";

//import reusables
import { Logo } from "../reusables/Logo";

//styles
const FooterAddress = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--primary-blk);
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const LanguageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 339px;
  justify-content: center;
  align-items: center;
  gap: 21px;
`;

//component
export const Footer = () => {
  return (
    <>
      <Logo type="secondary" />
      <FooterAddress>
        Home address 45B 120 71 Stockholm, Sweden +123 456 789
      </FooterAddress>
      <FooterLinks>About | Schedule | Contact</FooterLinks>
      <LanguageWrapper> image English</LanguageWrapper>
      <IconWrapper> Youtube Facebook Instagram</IconWrapper>
    </>
  );
};
