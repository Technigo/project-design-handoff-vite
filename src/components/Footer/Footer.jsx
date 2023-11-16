import styled from "styled-components";
// import { Button } from "../../reusableComponents/Button";
import { useTranslation } from 'react-i18next'


const FooterWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 10px 50px 80px 50px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
   
    display: none;
  }
`;

const FooterImageMobile = styled.img`
  width: 138px;
  height: 104px;
  margin: 0 auto;


  @media (min-width: 768px) {
    align-self: flex-start;
}
`;

const FooterImageDesktop = styled.img`
 width: 138px;
  height: 104px;
`

const ButtonWrapper = styled.div`
 display: flex;
 margin-left: 50px;
 flex-direction: row;
gap: 20px;
justify-content: center;
@media (min-width: 768px) {
  display: flex;
}


`;

const TranslateButton = styled.button`
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
const Place = styled.div`
display: flex;
flex-direction: row;

`
const InfoParagraph = styled.p`
font-family: Assistant;
font-size: 18px;
`
const ContactFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;


`
const MenuFooter = styled.div`
display: none;
  @media (min-width: 768px) {
   display: flex;
   justify-content: space-between;
   gap: 20px;

  }
`

const MenuParagraph = styled.p`
font-family: var(--heading-font-family);
font-size: 18px;
`
const FooterWrapperDesktop = styled.div`
display: none;

@media (min-width:667px){
  display: flex;
  flex-direction: column;
 background-color: var(--footer-inactive-card-color); 
 padding: 48px 100px;
 overflow: hidden;
}
`
const BottomFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
margin-top: 20px ;

`
const TopFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
export const Footer = () => {

  const { i18n } = useTranslation();


  const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
    console.log(`Changed language to: ${lng}`);

  }
  const englishFunc = () => {
    changeLanguageFunc("en");
    console.log("Clicked on English button");
  }

  const swedishFunc = () => {
    console.log("Clicked on Swedish button");
    changeLanguageFunc("se");

  }
  console.log(`Current language: ${i18n.language}`);

  return (
    <>
      <FooterWrapperMobile>
        <FooterImageMobile src="./logo.png" alt="Logo" />
        <ButtonWrapper>
          <TranslateButton onClick={swedishFunc} >
            <img src="./SwedishLanguage.png" />
          </TranslateButton>
          <TranslateButton onClick={englishFunc}>
            <img src="./EnglishLanguage.png" />
          </TranslateButton>
        </ButtonWrapper>
      </FooterWrapperMobile>



      <FooterWrapperDesktop>
        <TopFooter>
          <FooterImageDesktop src="./logo.png" alt="Logo" />
          <ContactInfo>
            <Place>
              <img src="./round-place.svg" />
              <InfoParagraph>156 Marknadsvägen • Täby, Stockholm 12345, Sweden</InfoParagraph>
            </Place>
            <ContactFooter>

              <Place>
                <img src="./round-phone.svg" />
                <InfoParagraph>+46 08 534 2364</InfoParagraph>
              </Place>
              <Place>
                <img src="./icon-mail.svg" />
                <InfoParagraph>info@edgeperformance.com</InfoParagraph>
              </Place>
            </ContactFooter>
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
        </TopFooter>


        <BottomFooter>
          <MenuFooter>
            <MenuParagraph>About us </MenuParagraph>
            <MenuParagraph>Contact us </MenuParagraph>
            <MenuParagraph>Help </MenuParagraph>
            <MenuParagraph>Privacy Policy</MenuParagraph>
            <MenuParagraph>Disclaimer </MenuParagraph>
          </MenuFooter>
          <ButtonWrapper>
            <TranslateButton onClick={swedishFunc} >
              <img src="./SwedishLanguage.png" />
            </TranslateButton>
            <TranslateButton onClick={englishFunc}>
              <img src="./EnglishLanguage.png" />
            </TranslateButton>
          </ButtonWrapper>
        </BottomFooter>
      </FooterWrapperDesktop>

    </>
  );
};
