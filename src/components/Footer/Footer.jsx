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
  .boxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 350px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 700px;
      height: 200px;
    }
  }

  @media screen and (min-width: 1024px) {
    .boxes {
      max-width: 900px;
      gap: 25px;
    }
  }
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
