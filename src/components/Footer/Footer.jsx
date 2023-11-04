import styled from "styled-components";
import { Button } from "../../reusableComponents/Button";


const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 10px 50px 80px 50px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px 100px 80px 100px;
    background-color: var(--footer-inactive-card-color);
  }
`;

const FooterImage = styled.img`
  width: 138px;
  height: 104px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
 display: flex;
 margin-left: 50px;
@media (min-width: 768px) {
  display: flex;
 
}

flex-direction: row;
gap: 20px;
justify-content: center;
`;

const TranslateButton = styled(Button)`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ContactInfo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
const SocialMedia = styled.p`
font-family: var(--heading-font-family);
color:   #777b88;
margin-top: 25px;
`
const SocialWrapper = styled.div`
display: flex;
flex-direction: row;

`

export const Footer = () => {

  return (
    <>
      <FooterWrapper>
        <FooterImage src="./logo.png" alt="Logo" />
        <ButtonWrapper>
          <TranslateButton  imageSrc="./SwedishLanguage.png">
          </TranslateButton>
          <TranslateButton imageSrc="./EnglishLanguage.png">
          </TranslateButton>
        </ButtonWrapper>

        <ContactInfo>
          <img src="./Icons/pinMap.png" />
          <img src="./Icons/facebook.svg" />
          <img src="./Icons/facebook.svg" />
         <SocialWrapper>
          <SocialMedia>SOCIAL MEDIA</SocialMedia>
          <img src="./Icons/facebook.svg" />
          <img src="./Icons/twitter.svg" />
          <img src="./Icons/linkedin.svg" />
          <img src="./Icons/youtube.svg" />
          <img src="./Icons/instagram.svg" />
          <img src="./Icons/googleplus.svg" />
          <img src="./Icons/pinterest.svg" />
            <img src="./Icons/rss.svg" />
         </SocialWrapper>
        </ContactInfo>
      </FooterWrapper>
    </>
  );
};
