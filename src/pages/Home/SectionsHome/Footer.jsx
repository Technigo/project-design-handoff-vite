import styled from "styled-components";
import { TranslationComponent } from "../../../components/TranslationComponent";
import { ImgComp } from "../../../reusableComp/ImgComp";
import { Links } from "../../../reusableComp/Links";

const FooterSection = styled.section`
background: var(--bg-color);
display: flex;
flex direction: row;
`;

const IconsContainer = styled.div`
display: flex;
width: 390px;
height: 80px;
padding: 23px 8px 8px 8px;
justify-content: center;
align-items: flex-start;
gap: 16px;
`;

const TranslationAndLinksContainer = styled.div`
display: flex;
width: 390px;
justify-content: center;
align-items: center;
gap: 3px;
`



export const Footer = () => {
  const linksData = [
    { text: 'HOME', url: 'https://www.google.com/?hl=sv' },
    { text: 'Newsletter', url: 'https://www.google.com/?hl=sv' },
    { text: '40 Days of Sadhana', url: 'https://www.google.com/?hl=sv' }
  ]

  return (
    <>
    <FooterSection>
        <TranslationAndLinksContainer classname="lang-and-links">
        <TranslationComponent />
        <Links links={linksData}/>
        </TranslationAndLinksContainer>
        <IconsContainer className="icons">
                <a href="https://www.instagram.com/inkapetrarebecca/">
                    <ImgComp 
                    sectionClassName={"icon-box"} 
                    elementClassName={"icon"} 
                    imagePath={"/icons/Instagram.webp"} 
                    ImageAltText={"Link to Instagram"} />
                </a>
                <a href="https://open.spotify.com/user/eer0ds8nf29bby3op5iil4rxn?si=f4e01785b6b84794">
                    <ImgComp 
                    sectionClassName={"icon-box"} 
                    elementClassName={"icon"} 
                    imagePath={"/icons/Spotify.webp"} 
                    ImageAltText={"Link to Spotify"} />
                </a>
            </IconsContainer>
    </FooterSection>
    </>
  );
};

//Links och translation måste nog ha egna divs for styling