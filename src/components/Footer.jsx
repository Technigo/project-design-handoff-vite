import tabletLogo from "../assets/footerImages/tablet-logo.png";
import mobileLogo from "../assets/footerImages/mobile-logo.png";
import desktopLogo from "../assets/footerImages/desktop-logo.png";
import facebook from "../assets/followUsSection/facebook.png";
import instagram from "../assets/followUsSection/instagram.png";
import chevron from "../assets/followUsSection/chevron.png";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContent>
      <FooterText>
        <Logo alt="Company logo" />
        <h1>
          Learn, Laugh, and<br></br>Connect on the Slopes!
        </h1>
      </FooterText>
      <FooterList>About us</FooterList>
      <FooterList>FAQ</FooterList>
      <FooterList>Privacy Policy</FooterList>
      <FooterList>Terms and conditions</FooterList>
      <FollowUs>
        <Icons>
          <FooterList>Follow us</FooterList>
          <IconImage src={facebook} />
          <IconImage src={instagram} />
        </Icons>
        <Language>
          <FooterList>EN</FooterList>
          <ChevronImage src={chevron} />
        </Language>
      </FollowUs>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  background-color: #234059;
  height: 400px;
  color: #ffc8dd;
  padding-top: 80px;

  @media (min-width 600px) {
    margin: 80px 32px 80 px 32px;
  }
`;

const Logo = styled.div`
  background-image: url(${mobileLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 100px;
  margin-left: 24px;

  @media (min-width: 600 px) and (max-width: 1199px) {
    background-image: url(${tabletLogo});
    height: 60px;
    width: 140px;
    padding-top: 35px;
  }
  @media (min-width: 1200px) {
    background-image: url(${desktopLogo});
    height: 50px;
    width: 140px;
  }
`;

const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 32px;

  h1 {
    margin-top: 0px;
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 1.08px;
    text-align: right;
  }
`;

const FooterList = styled.li`
  display: flex;
  padding-left: 24px;
  padding-bottom: 10px;
  padding-top: 6px;
  color: #fff;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  &:active {
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-start;
  }
`;

const FollowUs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
    margin-top: -35px;
  }
`;

const IconImage = styled.img`
  height: 24px;
  padding: 5px;
`;

const ChevronImage = styled.img`
  height: 20px;
  height: 13px;
  padding-bottom: 10px;
  padding-top: 8px;
  padding-left: 10px;
  padding-right: 24px;
`;

const Language = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
`;
