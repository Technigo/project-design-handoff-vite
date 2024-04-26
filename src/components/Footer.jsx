import mobileLogo from "../assets/footerImages/mobile-logo.png";
import styled from "styled-components";
export const Footer = () => {
  return (
    <FooterContent>
      <MobileLogo></MobileLogo>
      <FooterText>
        <h1>Learn, Laugh, and Connect on the Slopes!</h1>
        <FooterMeny>
          About us 
          FAQ
          Privacy Policy
          Terms and conditions
          </FooterMeny>
      </FooterText>
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
  background-image: url(${mobileLogo});
  background-repeat: no-repeat;
  height: 30px;
  width: 80px;
  margin-left: 60px;
`;

const FooterText = styled.div`

  h1 {
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 1.08px;
    padding-left: 100px;
    margin-bottom: 24px;
  }
`;

const FooterMeny = styled.div`
  color: white;
font-size: 18px;
font-family: Mulish;
font-weight: 500;
line-height: 23.40px;
word-wrap: break-word
`