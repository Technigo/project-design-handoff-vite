import { Download } from "./Download";
import { Info } from "./Info";
import { SocialMedia } from "./SocialMedia";
import { TermsPolicy } from "./TermsPolicy";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 100px 32px;
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  color: #fff;
  overflow: hidden;
  min-width: 340px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="boxes">
        <Download />
        <SocialMedia />
        <Info />
        <TermsPolicy />
      </div>
    </FooterContainer>
  );
};
