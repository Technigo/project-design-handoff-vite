import styled from "styled-components";
import swish from "../assets/Swishicon.svg";
import insamling from "../assets/insamlingskontroll.svg";


const SwishLogo = styled.img`
width: 141px;
height: 43px;
flex-shrink: 0;
padding: 56px 0 32px 0;
margin: 0 auto;
`;

const InsamlingsLogo = styled.img`
width: 219px;
height: 54px;
flex-shrink: 0;
padding-bottom: 46px;
margin: 0 auto;
`;


const FooterBox = styled.footer `
display: flex;
flex-direction: column;
`;


export const Footer = () => {
  return (
    <FooterBox>
      <SwishLogo src={swish} alt="Swish logo" />
      <InsamlingsLogo src={insamling} alt="Insamlingskontroll" />
    </FooterBox>
  );
};
