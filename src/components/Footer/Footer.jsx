import styled from "styled-components"
import { Button } from "../../reusableComponents/Button"

const FooterWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
const FooterImage = styled.img`
max-width: 100%;
`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
gap:20px;
`
const TranslateButton = styled(Button)`
background-color: none;
border: none;
`
 export const Footer = () =>  {
   return (
     <>
       <FooterWrapper>
       <FooterImage src="./logo.png" alt="Logo" />
       <ButtonWrapper>
       <TranslateButton label="" imageSrc="./SwedishLanguage.png" />
         <TranslateButton label="" imageSrc="./EnglishLanguage.png" />
         </ButtonWrapper>
         </FooterWrapper>
    </>
  )
}
