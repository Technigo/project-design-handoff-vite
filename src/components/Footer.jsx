import tabletLogo from "../assets/footerImages/tablet-logo.png";
import styled from "styled-components";
export const Footer = () => {
  return (
    <FooterContent>
      <MobileLogo alt="Company logo" />
      <FooterText>
        <h1>
          Learn, Laugh, and<br></br>Connect on the Slopes!
        </h1>
      </FooterText>
      <FooterList>About us</FooterList>
      <FooterList>FAQ</FooterList>
      <FooterList>Privacy Policy</FooterList>
      <FooterList>Terms and conditions</FooterList>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  background-color: #234059;
  height: 600px;
  color: #ffc8dd;
  padding-top: 40px;
`;

const MobileLogo = styled.div`
  background-image: url(${tabletLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 100px;
  margin-left: 24px;
  padding-bottom: 40px;
`;

const FooterText = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 40px;
  margin: auto;

  h1 {
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 1.08px;
  }
`;

const FooterList = styled.li`
  display: flex;
  padding-left: 24px;
  padding-bottom: 10px;
  color: #fff;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
