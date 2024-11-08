import styled from "styled-components";

export const H1 = styled.h1`
  color: ${props => props.theme.colors.Font2};
  text-align: center;
  font-family: "Yeseva One";
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 0px;
  padding: -10px;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.colors.Font1};
  text-align: center;
  font-family: "Yeseva One";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const H3 = styled.h3`
  color: ${props => props.theme.colors.Font2};
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  margin: 55px 55px 59px 55px;

&.custom-margin {
    margin-top: 35px;
  }
`;

export const CardP = styled.p`
  color: ${props => props.theme.colors.Font2};
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const QuotesP = styled.p`
  color: ${props => props.theme.colors.Font2};
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;

  @media (min-width: 650px) { 
    font-size: 20px;
  }
`;

export const FooterP = styled.p`
  color: ${props => props.theme.colors.Font1};
  font-family: "Josefin Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 110%;
  text-align: left;
  width: 65%;
`;

export const FooterLink = styled.a`
color: ${props => props.theme.colors.Font1};
font-family: "Josefin Sans";
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: 110%;
text-align: right;
`;

export const ButtonP = styled.p`
color: ${props => props.theme.colors.Font1};
text-align: center;
font-family: "Josefin Sans";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 100%;
`;
