//import styled
import styled from "styled-components";

//import reusables
import { Logo } from "../reusables/Logo";
import { Socials } from "../reusables/Socials";
import { Language } from "../reusables/Language";

//styles
const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "logo logo logo logo logo logo logo logo logo logo logo logo"
    "adr adr adr adr adr adr adr adr adr adr adr adr "
    "lk lk lk lk lk lk lk lk lk lk lk lk"
    "lg lg lg lg lg lg lg lg lg lg lg lg"
    " sl sl sl sl sl sl sl sl sl sl sl sl ";
  row-gap: 31px;
  padding: 68px 16px;

  @media all and (min-width: 744px) {
    grid-template-areas:
      "logo logo logo logo lk lk lk lk adr adr adr adr"
      " . . . . . . . lg lg sl sl sl";
    padding: 26px 24px;
    row-gap: 16px;
    column-gap: 12px;
    border-top: 1px solid var(--primary-blk);
  }

  @media all and (min-width: 1024px) {
    grid-template-areas: "logo logo lk lk lk lk adr adr adr adr lg sl";
    padding: 32px 124px;
    column-gap: 20px;
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;

  @media all and (min-width: 744px) {
    justify-content: flex-start;
  }
`;

const AddressWrapper = styled.div`
  grid-area: adr;

  @media all and (min-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media all and (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const FooterText = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--primary-blk);

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const LinksWrapper = styled.div`
  grid-area: lk;
  display: flex;
  justify-content: center;
`;

const LanguageWrapper = styled.div`
  grid-area: lg;
  display: flex;
  justify-content: center;

  @media all and (min-width: 744px) {
    justify-content: flex-end;
  }
`;

const IconWrapper = styled.div`
  grid-area: sl;
  display: flex;
  justify-content: center;

  @media all and (min-width: 744px) {
    justify-content: flex-end;
  }
`;

//component
export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        {/* renders logo based on viewport width */}
        <LogoWrapper>
          <Logo
            type={
              window.innerWidth < 744
                ? "secondary"
                : window.innerWidth >= 1024 //
                ? "small"
                : "big"
            }
          />
        </LogoWrapper>
        <AddressWrapper>
          <FooterText>Home address 45B</FooterText>
          <FooterText>120 71 Stockholm, Sweden</FooterText>
          <FooterText>+123 456 789</FooterText>
        </AddressWrapper>
        <LinksWrapper>
          <FooterText>About</FooterText>
          <FooterText>Schedule</FooterText>
          <FooterText>Contact</FooterText>
        </LinksWrapper>
        <LanguageWrapper>
          <Language />
        </LanguageWrapper>
        <IconWrapper>
          <Socials social="yt" url="https://www.youtube.com/" />
          <Socials social="fb" url="https://www.facebook.com" />
          <Socials social="ig" url="https://www.instagram.com/" />
        </IconWrapper>
      </FooterWrapper>
    </>
  );
};
